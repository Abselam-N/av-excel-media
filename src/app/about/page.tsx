import Image from "next/image";
import { siteConfig } from "@/content/settings";
import { teamMembers } from "@/content/team";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = { title: "About AV Excel Media & Communication in Addis Ababa", description: "Meet the audiovisual professionals behind AV Excel in Addis Ababa, Ethiopia, and learn about our approach to live production and technical services.", alternates: { canonical: "/about" }, openGraph: { title: "About AV Excel Media & Communication in Addis Ababa | AV Excel", description: "Meet the audiovisual professionals behind AV Excel in Addis Ababa, Ethiopia, and learn about our approach to live production and technical services.", url: "/about", images: ["/og-image.png"] }, twitter: { card: "summary_large_image" as const, title: "About AV Excel Media & Communication in Addis Ababa", description: "Meet the audiovisual professionals behind AV Excel in Addis Ababa, Ethiopia, and learn about our approach to live production and technical services.", images: ["/og-image.png"] } };

export default function AboutPage() {
  const values = [
    ["Professionalism", "Rigorous technical standards and protocol compliance."],
    ["Creativity", "Cinematic visual storytelling and dynamic motion graphics."],
    ["Solution-focused", "Adaptive execution to meet any production challenge."],
  ];

  return (
    <>
      <PageHeader eyebrow={siteConfig.tagline} title="About AV Excel Media & Communication" lead={siteConfig.description} />
      <div className="wrap space-y-20 pb-24">
        <p className="max-w-[62ch] text-muted-foreground">
          Our team brings hands-on experience across
          media houses, NGOs, and UN agencies, enabling us to execute high-profile events, produce impactful
          documentaries, and manage strategic campaigns with confidence.
        </p>

        <a href="/docs/av-excel-company-profile.pdf" target="_blank" rel="noopener noreferrer" className="inline-block border border-border px-6 py-3 font-semibold hover:border-primary">Download our company profile (PDF) ↗</a>
        <section className="grid gap-12 border-t border-border pt-10 md:grid-cols-2">
          <div>
            <h2 className="t-h3 mb-3">Vision</h2>
            <p className="max-w-[52ch] text-muted-foreground">{siteConfig.vision}</p>
          </div>
          <div>
            <h2 className="t-h3 mb-3">Mission</h2>
            <p className="max-w-[52ch] text-muted-foreground">{siteConfig.mission}</p>
          </div>
        </section>

        <section>
          <h2 className="t-h2 mb-8">Core values</h2>
          <div className="border-b border-border">
            {values.map(([title, text]) => (
              <div key={title} className="grid gap-2 border-t border-border py-6 md:grid-cols-12">
                <h3 className="t-h3 md:col-span-4">{title}</h3>
                <p className="text-muted-foreground md:col-span-8">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="t-h2 mb-8">Team</h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
            {teamMembers.map((m) => (
              <div key={m.name}>
                <div className="relative mb-4 aspect-[4/5] overflow-hidden bg-neutral-900">
                  <Image src={m.image} alt={`Portrait of ${m.name}`} fill sizes="(max-width: 767px) 50vw, 25vw" className="object-cover object-top" />
                </div>
                <h3 className="font-semibold">{m.name}</h3>
                <p className="meta">{m.role}</p>
                {m.bio && <p className="meta mt-1">{m.bio}</p>}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
