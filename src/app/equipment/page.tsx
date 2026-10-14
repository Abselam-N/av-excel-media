import { profileMedia } from "@/content/profileMedia";
import { equipmentData } from "@/content/equipment";
import { PageHeader } from "@/components/ui/PageHeader";
import { Expandable } from "@/components/ui/Expandable";

export const metadata = { title: "Equipment" };

export default function EquipmentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Equipment"
        title="Professional gear, operated by our own crew."
        lead="Cameras, switchers, wireless links, lighting, and workstations for live and recorded production."
      />
      <div className="wrap space-y-16 pb-24">
        {equipmentData.map((category, index) => (
          <section key={category.title} className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="t-h2">{category.title}</h2>
              <p className="meta mt-2 max-w-[34ch]">{category.description}</p>
            </div>
            <div className="border-b border-border md:col-span-8">
              <div className="grid grid-cols-3 gap-3 pb-6 sm:grid-cols-4" aria-label={`${category.title} equipment photographs`}>
                {(profileMedia[23 + index] || []).map((src, photoIndex) => (
                  <div key={src} className="group flex aspect-[4/3] items-center justify-center overflow-hidden rounded-md">
                    <img src={src} alt={`${category.title} equipment photograph ${photoIndex + 1}`} loading="lazy" className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110" />
                  </div>
                ))}
              </div>
              {category.items.map((item) => (
                <Expandable
                  key={item.name}
                  header={
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6">
                      <h3 className="font-semibold">{item.name}</h3>
                      <span className="meta">{item.category}</span>
                    </div>
                  }
                >
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {item.specs.map((spec) => (
                      <li key={spec}>{spec}</li>
                    ))}
                  </ul>
                </Expandable>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
