import Script from 'next/script'

export function Analytics() {
  return (
    <Script
      defer
      data-domain="botintelli.com"
      src="https://analytics.botintelli.com/js/plausible.js"
    />
  )
}
