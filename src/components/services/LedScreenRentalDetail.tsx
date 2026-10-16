import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/content/services";

const options = [
  ["Indoor Stage Backdrop", "P1.9 – P2.6", "Keynote conferences, corporate meetings, hybrid events", "High refresh rate, flicker-free on broadcast cameras"],
  ["Indoor IMAG & Presentation", "P2.6 – P3.9", "Medium-to-large halls, summits, breakout rooms", "High contrast ratio, broad viewing angles"],
  ["Outdoor High-Brightness Wall", "P3.9 – P4.8", "Outdoor festivals, product launches, sports viewing", "IP65 weatherproof, daylight-visible (5,000+ nits)"],
  ["Custom Stage Accents & Columns", "P2.6 – P2.9", "Creative stage designs, DJ booths, exhibition booths", "Modular curve blocks, lightweight rigging"],
];
const packages = [
  { title: "Corporate & Conference Package", ideal: "100–500+ attendees, training summits, keynote presentations", setup: "High-resolution indoor LED backdrop centered on stage or dual flanking IMAG screens.", includes: "Ground-stack support or stage rigging, video processor/scaler, video switcher inputs for PowerPoint/Keynote slides and camera feeds, and a dedicated technician for the duration of the event." },
  { title: "Hybrid & Live Stream Display Setup", ideal: "Zoom/Teams hybrid conferences, panel sessions, live-streamed symposiums", setup: "Low-latency display calibrated specifically to prevent flicker on video cameras.", includes: "Multiview processor routing, split-screen layout capability (remote speakers + slides + in-room video), and color-matching calibration for studio and broadcast cameras." },
  { title: "Concerts, Festivals & Outdoor Screenings", ideal: "Large outdoor venues, daytime gatherings, high-capacity musical shows", setup: "Weather-sealed, high-nit outdoor LED wall designed for direct sunlight visibility.", includes: "Heavy-duty outdoor truss structure, wind-bracing engineering, outdoor power distribution, and backup signal routing." },
];
const process = [
  ["Consultation & Site Assessment", "We evaluate your venue dimensions, ambient light levels, seating distance, and power availability to recommend the optimal pixel pitch and wall size."],
  ["CAD & Layout Mockup", "We provide dimensions, power requirements, and aspect ratio diagrams so your media and presentation teams can prepare content at 1:1 pixel resolution."],
  ["Rigging & Setup", "Our technical crew arrives ahead of schedule to build the support structures, assemble panels, balance power loads, and calibrate color uniformity."],
  ["Live Show Operation", "A dedicated video engineer remains on-site throughout your rehearsals and live show to handle switching, troubleshooting, and input routing."],
  ["Teardown & Load-out", "Rapid, professional strike and removal immediately following event conclusion."],
];
export function LedScreenRentalDetail() {
  const service = servicesData["led-screen-rental"];
  return <div className="wrap space-y-16 pb-24 md:space-y-24">
    <section aria-labelledby="led-why"><h2 id="led-why" className="t-h3 mb-6">Why choose AV Excel for LED rentals?</h2>
      <div className="border-b border-border">{service.whatIsIncluded.map(item => <div key={item.title} className="grid gap-3 border-t border-border py-6 md:grid-cols-12"><h3 className="font-semibold md:col-span-4">{item.title}</h3><p className="text-muted-foreground md:col-span-8 md:max-w-[62ch]">{item.description}</p></div>)}</div>
    </section>
    <section aria-labelledby="led-options"><h2 id="led-options" className="t-h3 mb-6">Screen options & technical configurations</h2>
      <p className="mb-5 text-sm text-muted-foreground">Typical configurations; exact specifications and availability are confirmed during consultation.</p>
      <div className="overflow-x-auto"><table className="w-full min-w-[720px] border-collapse text-left text-sm"><thead><tr className="border-b border-border">{["Display category", "Typical pixel pitch", "Best used for", "Key technical highlight"].map(h => <th key={h} scope="col" className="p-4 font-semibold">{h}</th>)}</tr></thead><tbody>{options.map(row => <tr key={row[0]} className="border-b border-border">{row.map((cell,i) => <td key={i} className="p-4 align-top text-muted-foreground">{cell}</td>)}</tr>)}</tbody></table></div>
    </section>
    <section aria-labelledby="led-packages"><h2 id="led-packages" className="t-h3 mb-6">Comprehensive event packages</h2><div className="border-b border-border">{packages.map((item,i) => <article key={item.title} className="grid gap-4 border-t border-border py-8 md:grid-cols-12"><div className="md:col-span-4"><p className="meta mb-2">{String(i+1).padStart(2,"0")}</p><h3 className="font-semibold">{item.title}</h3></div><dl className="space-y-4 text-muted-foreground md:col-span-8"><div><dt className="font-semibold text-foreground">Ideal for</dt><dd>{item.ideal}</dd></div><div><dt className="font-semibold text-foreground">Setup</dt><dd>{item.setup}</dd></div><div><dt className="font-semibold text-foreground">Includes</dt><dd>{item.includes}</dd></div></dl></article>)}</div></section>
    <section aria-labelledby="led-process"><h2 id="led-process" className="t-h3 mb-6">How our rental process works</h2><ol className="border-b border-border">{process.map(([title,description],i) => <li key={title} className="grid gap-3 border-t border-border py-6 md:grid-cols-12"><span className="meta tabular-nums md:col-span-1">{String(i+1).padStart(2,"0")}</span><h3 className="font-semibold md:col-span-4">{title}</h3><p className="text-muted-foreground md:col-span-7">{description}</p></li>)}</ol></section>
    <div className="flex flex-wrap items-center gap-x-8 gap-y-4"><Link href="/contact" className="btn btn-primary">Request a quote</Link><Link href="/services" className="link-arrow">All services <ArrowRight className="h-4 w-4" /></Link></div>
  </div>;
}
