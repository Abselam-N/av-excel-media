import {siteConfig} from "@/content/settings";
export function JsonLd(){
 const base="https://avexcel.net";
 const business={"@context":"https://schema.org","@type":"LocalBusiness","@id":`${base}/#business`,name:siteConfig.name,url:base,email:siteConfig.contact.email,telephone:siteConfig.contact.phone.replace(/\s/g, ""),description:siteConfig.description,slogan:siteConfig.tagline,logo:`${base}/brand/logo.png`,image:`${base}/brand/logo.png`,address:{"@type":"PostalAddress",streetAddress:siteConfig.contact.address,addressLocality:siteConfig.location,addressCountry:"ET"},areaServed:{"@type":"Country",name:"Ethiopia"},...(siteConfig.socialLinks.length?{sameAs:siteConfig.socialLinks}:{})};
 // TODO: Add verified opening hours, coordinates and social profiles only after the client confirms them.
 return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(business).replace(/</g,"\\u003c")}}/>;
}
