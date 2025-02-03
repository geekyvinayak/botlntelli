import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="container py-16 space-y-16">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter text-center sm:text-5xl">
          Terms &{" "}
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Conditions
          </span>
        </h1>
        <p className="text-sm text-muted-foreground text-center">Updated at January 3rd, 2025</p>
      </div>

      {/* General Terms */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle>General Terms</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            By accessing and placing an order with Botintelli, you confirm that you are in agreement with and bound by the terms of service contained in the Terms & Conditions outlined below. These terms apply to the entire website and any email or other type of communication between you and Botintelli.
          </p>
          <p>
            Under no circumstances shall Botintelli team be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the materials on this site, even if Botintelli team or an authorized representative has been advised of the possibility of such damages. If your use of materials from this site results in the need for servicing, repair or correction of equipment or data, you assume any costs thereof.
          </p>
          <p>
            Botintelli will not be responsible for any outcome that may occur during the course of usage of our resources. We reserve the rights to change prices and revise the resources usage policy in any moment.
          </p>
        </CardContent>
      </Card>

      {/* License */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle>License</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Botintelli grants you a revocable, non-exclusive, non-transferable, limited license to download, install and use the website strictly in accordance with the terms of this Agreement.
          </p>
          <p>
            These Terms & Conditions are a contract between you and Botintelli (referred to in these Terms & Conditions as "Botintelli", "us", "we" or "our"), the provider of the Botintelli website and the services accessible from the Botintelli website (which are collectively referred to in these Terms & Conditions as the "Botintelli Service").
          </p>
          <p>
            You are agreeing to be bound by these Terms & Conditions. If you do not agree to these Terms & Conditions, please do not use the Botintelli Service. In these Terms & Conditions, "you" refers both to you as an individual and to the entity you represent. If you violate any of these Terms & Conditions, we reserve the right to cancel your account or block access to your account without notice.
          </p>
        </CardContent>
      </Card>

      {/* Restrictions */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle>Restrictions</CardTitle>
        </CardHeader>
        <CardContent>
          <p>You agree not to, and you will not permit others to:</p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>License, sell, rent, lease, assign, distribute, transmit, host, outsource, disclose or otherwise commercially exploit the website or make the platform available to any third party.</li>
            <li>Modify, make derivative works of, disassemble, decrypt, reverse compile or reverse engineer any part of the website.</li>
            <li>Remove, alter or obscure any proprietary notice (including any notice of copyright or trademark) of Botintelli or its affiliates, partners, suppliers or the licensors of the website.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Return and Refund Policy */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle>Return and Refund Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Thanks for shopping at Botintelli. We appreciate the fact that you like to buy the stuff we build. We also want to make sure you have a rewarding experience while you're exploring, evaluating, and purchasing our products.
          </p>
          <p>
            As with any shopping experience, there are terms and conditions that apply to transactions at Botintelli. We'll be as brief as our attorneys will allow. The main thing to remember is that by placing an order or making a purchase at Botintelli, you agree to the terms along with Botintelli's Privacy Policy.
          </p>
          <p>
            If, for any reason, You are not completely satisfied with any good or service that we provide, don't hesitate to contact us and we will discuss any of the issues you are going through with our product.
          </p>
        </CardContent>
      </Card>

      {/* Your Suggestions */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle>Your Suggestions</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Any feedback, comments, ideas, improvements or suggestions (collectively, "Suggestions") provided by you to Botintelli with respect to the website shall remain the sole and exclusive property of Botintelli. Botintelli shall be free to use, copy, modify, publish, or redistribute the Suggestions for any purpose and in any way without any credit or any compensation to you.
          </p>
        </CardContent>
      </Card>

      {/* Your Consent */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle>Your Consent</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            We've updated our Terms & Conditions to provide you with complete transparency into what is being set when you visit our site and how it's being used. By using our Botintelli, registering an account, or making a purchase, you hereby consent to our Terms & Conditions.
          </p>
        </CardContent>
      </Card>

      {/* Copyright Infringement Notice */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle>Copyright Infringement Notice</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            If you are a copyright owner or such owner's agent and believe any material on our website constitutes an infringement on your copyright, please contact us setting forth the following information: (a) a physical or electronic signature of the copyright owner or a person authorized to act on his behalf; (b) identification of the material that is claimed to be infringing; (c) your contact information, including your address, telephone number, and an email; (d) a statement by you that you have a good faith belief that use of the material is not authorized by the copyright owners; and (e) the a statement that the information in the notification is accurate, and, under penalty of perjury you are authorized to act on behalf of the owner.
          </p>
        </CardContent>
      </Card>

      {/* Termination */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle>Termination</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            This Agreement shall remain in effect until terminated by you or Botintelli. Botintelli may, in its sole discretion, at any time and for any or no reason, suspend or terminate this Agreement with or without prior notice.
          </p>
          <p>
            This Agreement will terminate immediately, without prior notice from Botintelli, in the event that you fail to comply with any provision of this Agreement. You may also terminate this Agreement by deleting the website and all copies thereof from your computer.
          </p>
          <p>
            Upon termination of this Agreement, you shall cease all use of the website and delete all copies of the website from your computer.
          </p>
          <p>
            Termination of this Agreement will not limit any of Botintelli's rights or remedies at law or in equity in case of breach by you (during the term of this Agreement) of any of your obligations under the present Agreement.
          </p>
        </CardContent>
      </Card>

      {/* Contact Us */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Don't hesitate to contact us if you have any questions.</p>
          <p className="mt-2">
            Via this Link:{" "}
            <Link href="https://www.botintelli.com/contact" className="text-blue-600 hover:underline">
              https://www.botintelli.com/contact
            </Link>
          </p>
        </CardContent>
      </Card>

      {/* Footer Note */}
      <div className="text-center text-sm text-muted-foreground">
        <p>These Terms & Conditions were last updated on January 3rd, 2025</p>
      </div>
    </div>
  )
}

