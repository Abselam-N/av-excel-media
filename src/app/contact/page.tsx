import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
export const metadata: Metadata = { title: "Contact & Request a Quote", description: "Contact AV Excel Media & Communication in Addis Ababa for LED screen rental, live streaming, video conferencing and audiovisual event solutions." };
export default function ContactPage() { return <ContactForm />; }
