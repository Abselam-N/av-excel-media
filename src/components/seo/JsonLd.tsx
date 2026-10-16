import { siteConfig } from "@/content/settings";
export function JsonLd() {
  const url = "https://avexcel.net";
  const address = { "@type": "PostalAddress", streetAddress: siteConfig.contact.address, addressLocality: siteConfig.location, addressCountry: "ET" };
  const shared = { name: siteConfig.name, url, description: siteConfig.description, logo: `${url}/brand/logo.png`, email: siteConfig.contact.email, telephone: siteConfig.contact.phone, address };
  // No verified social profile URLs supplied; omit sameAs rather than invent links.
  const schema = { "@context": "https://schema.org", "@graph": [ { "@type": "Organization", "@id": `${url}/#organization`, ...shared }, { "@type": "LocalBusiness", "@id": `${url}/#business`, ...shared, parentOrganization: { "@id": `${url}/#organization` } } ] };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />;
}
