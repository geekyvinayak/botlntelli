"use server"

import nodemailer from "nodemailer"
import { z } from "zod"

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  subject: z.string(),
  message: z.string().min(10),
})

const pricingFormSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  jobTitle: z.string().min(2),
  companySize: z.string(),
  message: z.string().optional(),
  source: z.string().optional(),
})

const demoFormSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  jobTitle: z.string().min(2),
  companySize: z.string(),
  useCase: z.string().min(10),
  preferredDate: z.string().optional(),
  timezone: z.string(),
})

const loginDemoFormSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  message: z.string().min(10),
})

export async function sendEmail(formData: FormData) {
  const formType = formData.get("formType")

  let result;
  let emailContent;

  if (formType === "contact") {
    result = contactFormSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    })

    if (result.success) {
      const { name, email, company, subject, message } = result.data
      emailContent = `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h2>Message:</h2>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `
    }
  } else if (formType === "pricing") {
    result = pricingFormSchema.safeParse({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      company: formData.get("company"),
      jobTitle: formData.get("jobTitle"),
      companySize: formData.get("companySize"),
      message: formData.get("message"),
      source: formData.get("source"),
    })

    if (result.success) {
      const { firstName, lastName, email, company, jobTitle, companySize, message, source } = result.data
      emailContent = `
        <h1>New Pricing Inquiry</h1>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Company Size:</strong> ${companySize}</p>
        <p><strong>Additional Information:</strong> ${message || 'N/A'}</p>
        <p><strong>Source:</strong> ${source || 'N/A'}</p>
      `
    }
  } else if (formType === "demo") {
    result = demoFormSchema.safeParse({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      company: formData.get("company"),
      jobTitle: formData.get("jobTitle"),
      companySize: formData.get("companySize"),
      useCase: formData.get("useCase"),
      preferredDate: formData.get("preferredDate"),
      timezone: formData.get("timezone"),
    })

    if (result.success) {
      const { firstName, lastName, email, company, jobTitle, companySize, useCase, preferredDate, timezone } = result.data
      emailContent = `
        <h1>New Demo Request</h1>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Company Size:</strong> ${companySize}</p>
        <p><strong>Use Case:</strong> ${useCase}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate || 'Not specified'}</p>
        <p><strong>Timezone:</strong> ${timezone}</p>
      `
    }
  } else if (formType === "login_demo") {
    result = loginDemoFormSchema.safeParse({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
    })

    if (result.success) {
      const { firstName, lastName, email, company, message } = result.data
      emailContent = `
        <h1>New Login Page Demo Request</h1>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <h2>Message:</h2>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `
    }
  } else {
    return { success: false, error: "Invalid form type" }
  }

  if (!result || !result.success) {
    return { success: false, error: "Invalid form data" }
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  // Add debug mode for logging
  transporter.set('debug', true);

  try {
    const info = await transporter.sendMail({
      from: `"BotIntelli" <${process.env.SMTP_USER}>`,
      to: "prabhanshu@literatitech.co.in",
      replyTo: result.data.email,
      subject: formType === "demo" ? "New Demo Request" : 
               formType === "contact" ? `New contact form submission: ${result.data.subject}` : 
               formType === "login_demo" ? "New Login Page Demo Request" :
               "New Pricing Inquiry",
      html: emailContent,
    })

    console.log("Message sent: %s", info.messageId);
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error("Failed to send email:", error)
    return { success: false, error: error instanceof Error ? error.message : "Failed to send email" }
  }
}
