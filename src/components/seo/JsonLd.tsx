import { siteConfig } from "@/content/settings";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.avexcel.net",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.avexcel.net"}/brand/logo.png`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: "Addis Ababa",
      addressCountry: "ET",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+251916957018",
        contactType: "customer service",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
