import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/content/services";
import { projectsData } from "@/content/projects";
import { PageHeader } from "@/components/ui/PageHeader";
import { LedScreenRentalDetail } from "@/components/services/LedScreenRentalDetail";
const base = "https://avexcel.net";
export function generateMetadata({params}:{params:{slug:string}}): Metadata {
 const s=servicesData[params.slug];if(!s)return {title:"Not found"};
 const url=`/services/${s.slug}`;
 return {title:s.seoTitle,description:s.seoDescription,alternates:{canonical:url},openGraph:{type:"website",title:`${s.seoTitle} | AV Excel`,description:s.seoDescription,url,images:[{url:"/og-image.png",alt:s.title}]},twitter:{card:"summary_large_image",title:s.seoTitle,description:s.seoDescription,images:["/og-image.png"]}};
}
export function generateStaticParams(){return Object.keys(servicesData).map(slug=>({slug}));}
export default function ServiceDetailPage({params}:{params:{slug:string}}){
 const service=servicesData[params.slug];if(!service)notFound();
 const related=service.relatedProjectSlugs.map(s=>projectsData[s]).filter(Boolean);
 const serviceUrl=`${base}/services/${service.slug}`;
 const schema={"@context":"https://schema.org","@graph":[
  {"@type":"Service","@id":`${serviceUrl}#service`,name:service.title,description:service.quickAnswer,dateModified:service.lastModified,serviceType:service.title,provider:{"@id":`${base}/#business`},areaServed:{"@type":"Country",name:"Ethiopia"}},
  {"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:base},{"@type":"ListItem",position:2,name:"Services",item:`${base}/services`},{"@type":"ListItem",position:3,name:service.title,item:serviceUrl}]},
  {"@type":"FAQPage",mainEntity:service.faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))}
 ]};
 return <>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}}/>
  <PageHeader eyebrow="Services" title={service.h1} lead={service.quickAnswer}/>
  {service.slug==="led-screen-rental"?<LedScreenRentalDetail/>:<div className="wrap space-y-20 pb-24">
   <section><h2 className="t-h3 mb-6">What&apos;s included</h2><div className="border-b border-border">{service.whatIsIncluded.map(item=><div key={item.title} className="grid gap-2 border-t border-border py-6 md:grid-cols-12"><h3 className="font-semibold md:col-span-4">{item.title}</h3><p className="max-w-[62ch] text-muted-foreground md:col-span-8">{item.description}</p></div>)}</div></section>
   {service.sections.map(section=><section key={section.title}><h2 className="t-h3 mb-6">{section.title}</h2><div className="max-w-[75ch] space-y-5 text-muted-foreground">{section.paragraphs.map((para,i)=><p key={i}>{para}</p>)}</div></section>)}
   <section><h2 className="t-h3 mb-6">Typical use cases</h2><ul className="border-b border-border">{service.typicalUseCases.map(u=><li key={u} className="border-t border-border py-4 text-muted-foreground">{u}</li>)}</ul></section>
   <section><h2 className="t-h3 mb-6">Our process</h2><ol className="border-b border-border">{service.process.map((step,i)=><li key={step.title} className="grid gap-3 border-t border-border py-6 md:grid-cols-12"><span className="meta md:col-span-1">{String(i+1).padStart(2,"0")}</span><h3 className="font-semibold md:col-span-4">{step.title}</h3><p className="text-muted-foreground md:col-span-7">{step.description}</p></li>)}</ol></section>
   <section><h2 className="t-h3 mb-6">Frequently asked questions</h2><div className="border-b border-border">{service.faqs.map(f=><div key={f.question} className="border-t border-border py-6"><h3 className="font-semibold">{f.question}</h3><p className="mt-2 text-muted-foreground">{f.answer}</p></div>)}</div></section>
   {related.length>0&&<section><h2 className="t-h3 mb-6">Related projects</h2>{related.map(pr=><Link key={pr.slug} href={`/projects/${pr.slug}`} className="index-row"><span className="meta">{pr.year}</span><div><h3 className="t-h3">{pr.title}</h3><p className="meta mt-1">{pr.venue}</p></div><ArrowRight className="arrow h-5 w-5"/></Link>)}</section>}
   <nav aria-label="Related audiovisual services" className="space-y-4"><h2 className="t-h3">Related services</h2><div className="flex flex-wrap gap-6">{Object.values(servicesData).filter(s=>s.slug!==service.slug).map(s=><Link key={s.slug} className="link-arrow" href={`/services/${s.slug}`}>{s.title} <ArrowRight className="h-4 w-4"/></Link>)}</div></nav>
   <div className="flex flex-wrap items-center gap-8"><Link href="/contact" className="btn btn-primary">Request a quote</Link><Link href="/services" className="link-arrow">All services <ArrowRight className="h-4 w-4"/></Link></div>
  </div>}
 </>;
}
