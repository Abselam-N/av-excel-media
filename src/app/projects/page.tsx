import type { Metadata } from "next";
import { ProjectsGallery } from "@/components/ProjectsGallery";
export const metadata: Metadata = { title: "Projects", description: "Explore AV Excel Media & Communication audiovisual productions, conferences, live events and event technology projects in Ethiopia." };
export default function ProjectsPage() { return <ProjectsGallery />; }
