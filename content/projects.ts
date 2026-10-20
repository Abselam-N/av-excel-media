import { profileMedia } from "./profileMedia";
export type ProjectCategory = "Live Events" | "Documentaries" | "Content";

export interface ProjectCaseStudy {
  slug: string;
  lastModified?: string;
  title: string;
  year: string;
  date: string;
  venue: string;
  location: string;
  category: ProjectCategory;
  servicesProvided: string[];
  shortDescription: string;
  fullCaseStudy: string[];
  keyHighlights: string[];
  galleryImages?: string[];
  coverImage?: string;
  video?: { provider: "youtube" | "vimeo"; id: string; title: string };
  galleryPlaceholders: {
    caption: string;
    alt: string;
  }[];
}

// TODO: Add verified lastModified dates to individual projects when their actual edit dates are known.
export const projectsData: Record<string, ProjectCaseStudy> = {
  "arfsd-12-2026": {
    slug: "arfsd-12-2026",
    title: "12th Africa Regional Forum on Sustainable Development (ARFSD)",
    year: "2026",
    date: "28–30 April 2026",
    venue: "United Nations Economic Commission for Africa (UNECA)",
    location: "Addis Ababa, Ethiopia",
    category: "Live Events",
    servicesProvided: ["Three-day event highlight video production", "Professional event photography"],
    shortDescription: "Three days of event highlights and professional photography for the 12th ARFSD at UNECA, produced on behalf of IC Publications.",
    fullCaseStudy: ["AV Excel delivered three days of event highlight video production and professional photography for the 12th Africa Regional Forum on Sustainable Development (ARFSD), on behalf of IC Publications, at the United Nations Economic Commission for Africa (UNECA) in Addis Ababa."],
    keyHighlights: ["Three-day event documentation", "Highlight video production", "Professional conference photography"],
    video: { provider: "youtube", id: "xuXUOEwtDvA", title: "12th ARFSD — Event highlights" },
    galleryImages: ["_DSC3657", "_DSC4610", "_DSC4621", "_DSC3671", "_DSC3831", "0Y9A9705", "DSC06155", "0Y9A0098", "_DSC3535", "0Y9A0162", "0Y9A0771"].map(name => `/projects/arfsd-12-2026/${name}.webp`),
    galleryPlaceholders: [],
  },

  "etex-25": {
    slug: "etex-25",
    title: "Ethiopian Tech Expo (ETEX 25)",
    year: "2025",
    date: "16-18 May 2025",
    venue: "Addis International Convention Center",
    location: "Addis Ababa, Ethiopia",
    category: "Live Events",
    servicesProvided: [
      "Multi-camera live switching",
      "Screen content management",
      "PowerPoint and comfort monitor management",
      "Plenary & breakout session technical operation",
    ],
    shortDescription:
      "Ethiopia's first Tech Expo: multi-camera live switching, screen content management, and comfort monitor distribution across plenary and breakout sessions.",
    fullCaseStudy: [
      "Ethiopian Tech Expo (ETEX 25) was held at the Addis International Convention Center from 16-18 May 2025 as Ethiopia's first major tech exposition.",
      "AV Excel provided multi-camera live switching, screen content management, and PowerPoint and comfort monitor management across both plenary and breakout sessions.",
    ],
    keyHighlights: [
      "Multi-camera live switching across plenary halls",
      "Comfort monitor distribution for keynote speakers",
      "Synchronized presentation management",
    ],
    galleryImages: ["/profile-media/slide-12-1.webp", "/profile-media/slide-12-2.webp", "/projects/etex-25/497900478_122127563318804955_985603860306077863_n.webp", "/projects/etex-25/GrKvYZGXkAA-s71.webp", "/projects/etex-25/GsI0AktWgAAv82e.webp", "/projects/etex-25/497679295_122127377660804955_469647166940055947_n.webp", "/projects/etex-25/497809625_122127550514804955_8202527883345083570_n.webp", "/projects/etex-25/497651666_122127324938804955_2907500708916911880_n.webp", "/projects/etex-25/498173615_122127561764804955_6888957959485329501_n.webp"],
    galleryPlaceholders: [
      { caption: "Plenary stage LED displays and camera switching", alt: "ETEX 25 main stage" },
      { caption: "Master switcher control position", alt: "Vision mixing desk" },
    ],
  },
  "national-police-day-116": {
    slug: "national-police-day-116",
    title: "National Police Day 116th Anniversary Parade",
    year: "2025",
    date: "28 April 2025",
    venue: "Meskel Square",
    location: "Addis Ababa, Ethiopia",
    category: "Live Events",
    servicesProvided: ["Live switching service", "Outdoor visual feed management"],
    shortDescription:
      "Live switching service delivered at Meskel Square for the high-profile National Police Day 116th Anniversary parade.",
    fullCaseStudy: [
      "AV Excel provided live switching services at Meskel Square for the National Police Day 116th Anniversary parade on 28 April 2025.",
    ],
    keyHighlights: [
      "Live switching for large-scale outdoor civic celebration",
      "Reliable video signal distribution across Meskel Square screens",
    ],
    galleryPlaceholders: [
      { caption: "Meskel Square parade review dais", alt: "Police day parade dais" },
    ],
  },
  "presidential-high-level-breakfast-dialogue": {
    slug: "presidential-high-level-breakfast-dialogue",
    title: "The 3rd Presidential High-Level Breakfast Dialogue",
    year: "2026",
    date: "February 2026",
    venue: "African Union Summit Venue",
    location: "Addis Ababa, Ethiopia",
    category: "Live Events",
    servicesProvided: ["Audiovisual services", "High-level speech audio reinforcement", "Screen content display management"],
    shortDescription:
      "Audiovisual services for the 3rd Presidential High-Level Breakfast Dialogue during the 39th African Union Summit in Addis Ababa.",
    fullCaseStudy: [
      "AV Excel provided audiovisual services for the 3rd Presidential High-Level Breakfast Dialogue, held during the 39th African Union Summit in February 2026 in Addis Ababa.",
    ],
    keyHighlights: [
      "Diplomatic protocol audiovisual compliance",
      "Pristine speech reinforcement and feedback prevention",
    ],
    galleryPlaceholders: [
      { caption: "Presidential round-table conference dais", alt: "Dialogue stage" },
    ],
  },
  "hope-for-justice-learning-event": {
    slug: "hope-for-justice-learning-event",
    coverImage: "/profile-media/slide-15-2.webp",
    video: { provider: "vimeo", id: "1234969916", title: "Hope for Justice — Event video" },
    title: "Hope for Justice Learning Event",
    year: "2026",
    date: "2026",
    venue: "Hilton Hotel",
    location: "Addis Ababa, Ethiopia",
    category: "Live Events",
    servicesProvided: ["Event audiovisual production", "LED screen rental", "Content management", "Videography documentation", "Professional photography"],
    shortDescription:
      "Helped organize Hope for Justice's learning event at the Hilton Hotel, Addis Ababa, providing LED screens, content management, videography, and photography.",
    fullCaseStudy: [
      "AV Excel helped organize Hope for Justice's event at Hilton Hotel, Addis Ababa, providing LED screen rental, content management, videography, and photography services.",
    ],
    keyHighlights: [
      "Complete event organization combined with technical audiovisual deployment",
      "LED screen stage backdrop with branded content management",
    ],
    galleryImages: ["/profile-media/slide-15-2.webp", "/profile-media/slide-15-3.webp", "/projects/hope-for-justice-learning-event/HFJ-101.webp", "/projects/hope-for-justice-learning-event/HFJ-110.webp", "/projects/hope-for-justice-learning-event/HFJ-139.webp", "/projects/hope-for-justice-learning-event/HFJ-215.webp", "/projects/hope-for-justice-learning-event/HFJ-212.webp", "/projects/hope-for-justice-learning-event/HFJ-190.webp"],
    galleryPlaceholders: [],
  },
  "africa-job-creation-forum-3rd": {
    slug: "africa-job-creation-forum-3rd",
    title: "3rd Africa Job Creation Forum",
    year: "2025",
    date: "7-9 July 2025",
    venue: "Adwa Memorial Museum",
    location: "Addis Ababa, Ethiopia",
    category: "Live Events",
    servicesProvided: ["Live streaming to YouTube", "Zoom Webinar facilitation", "Hybrid presentation bridging"],
    shortDescription:
      "Live streaming services to YouTube and Zoom Webinar for the 3rd Africa Job Creation Forum at the Adwa Memorial Museum.",
    fullCaseStudy: [
      "AV Excel provided live streaming services to YouTube and Zoom Webinar for the 3rd Africa Job Creation Forum, held at Adwa Memorial Museum from 7-9 July 2025.",
    ],
    keyHighlights: [
      "Three consecutive days of multi-platform streaming",
      "Seamless hybrid integration between physical speakers and virtual panelists",
    ],
    galleryPlaceholders: [
      { caption: "Live streaming encoder station", alt: "Streaming encoders" },
    ],
  },
  "africa-public-service-day-10th": {
    slug: "africa-public-service-day-10th",
    title: "10th Africa Public Service Day",
    year: "2025",
    date: "21-23 June 2025",
    venue: "African Union (Mandela Hall & Multipurpose Hall)",
    location: "Addis Ababa, Ethiopia",
    category: "Live Events",
    servicesProvided: ["Live streaming service on YouTube (Mandela Hall)", "Hybrid setup for breakout sessions (Multipurpose Hall)"],
    shortDescription:
      "Live streaming on YouTube at Mandela Hall and hybrid setup at Multipurpose Hall for breakout sessions at the African Union.",
    fullCaseStudy: [
      "The 10th Africa Public Service Day was held at the African Union from 21 - 23 June, 2025. We provided a live streaming service on YouTube at the Mandela Hall and Hybrid setup at Multipurpose Hall, for a breakout session.",
    ],
    keyHighlights: [
      "Mandela Hall live YouTube broadcast operations",
      "Multipurpose Hall hybrid conferencing integration",
    ],
    galleryPlaceholders: [
      { caption: "Mandela Hall assembly plenary coverage", alt: "Mandela Hall plenary session" },
    ],
  },
  "santim-pay-pos-launch": {
    slug: "santim-pay-pos-launch",
    coverImage: "/profile-media/slide-19-1.webp",
    galleryImages: ["/profile-media/slide-19-1-clean.webp", "/profile-media/slide-19-2-clean.webp", "/profile-media/slide-19-3-clean.webp"],
    title: "Santim Pay POS Device Manufacturing Plant Launch",
    year: "2025",
    date: "19 July 2025",
    venue: "Science Museum",
    location: "Addis Ababa, Ethiopia",
    category: "Live Events",
    servicesProvided: ["LED screen rental", "Live camera switching", "Content management"],
    shortDescription:
      "LED screen rental, live switching, and content management for the Santim Pay POS Device Manufacturing Plant inauguration at the Science Museum.",
    fullCaseStudy: [
      "AV Excel provided LED screen rental, live switching, and content management services for the Santim Pay POS Device Manufacturing Plant launch event, held at the Science Museum, Addis Ababa.",
    ],
    keyHighlights: [
      "High-resolution LED screen rental and calibration at Science Museum",
      "Real-time live camera switching for partner announcements",
    ],
    galleryPlaceholders: [
      { caption: "Science Museum auditorium LED screen setup", alt: "Santim Pay launch stage" },
    ],
  },
  "rophnan-concert-tour-2025": {
    slug: "rophnan-concert-tour-2025",
    title: "Rophnan Concert Tour (Mekelle & Addis Ababa)",
    year: "2025",
    date: "2025",
    venue: "Mekelle Stadium & Addis Ababa Convention Center",
    location: "Mekelle & Addis Ababa, Ethiopia",
    category: "Live Events",
    servicesProvided: ["Live camera switching", "LED screen content management"],
    shortDescription:
      "Live switching and content management at Mekelle Stadium and Addis Ababa Convention Center for Rophnan's 2nd tour.",
    fullCaseStudy: [
      "We provided a live switching and content management service at Mekelle stadium and Addis Ababa Convention Center to deliver a successful concert for Rophnan's 2nd tour.",
    ],
    keyHighlights: [
      "Arena-scale concert live camera switching",
      "Stadium LED screen visual content coordination",
    ],
    galleryPlaceholders: [
      { caption: "Stadium concert stage visual setup", alt: "Concert stage LED towers" },
    ],
  },
  "tov-agricultural-documentary": {
    slug: "tov-agricultural-documentary",
    title: "TOV - Agricultural Video Production",
    year: "2025",
    date: "2025",
    venue: "Rural Communities & Farm Sites",
    location: "Ethiopia",
    category: "Documentaries",
    servicesProvided: ["Documentary video production", "Field interviews", "Drone footage", "Environmental visuals", "Post-production editing"],
    shortDescription:
      "Full agricultural documentary covering farming practices, community engagement, and rural development interventions.",
    fullCaseStudy: [
      "AV Excel produced a full agricultural documentary covering farming practices, community engagement, and rural development interventions. The production included field interviews, drone footage, environmental visuals, and complete post-production editing.",
    ],
    keyHighlights: [
      "In-depth agricultural interviews in rural settings",
      "Cinematic drone coverage",
      "Full in-house editing and color grading",
    ],
    galleryPlaceholders: [
      { caption: "Aerial drone capture of farmland", alt: "Farmland drone shot" },
    ],
  },
  "jdc-door-to-door-health-program": {
    slug: "jdc-door-to-door-health-program",
    video: { provider: "youtube", id: "tvxGzKLgnO8", title: "JDC Door-to-Door Health Program — Video" },
    title: "JDC - Door-to-Door Health Program & Food Distribution",
    year: "2025",
    date: "2025",
    venue: "Community Distribution Centers & Households",
    location: "Addis Ababa, Ethiopia",
    category: "Documentaries",
    servicesProvided: ["Impact video documentation", "Field photography", "Household interview documentation"],
    shortDescription:
      "Documented JDC's door-to-door health intervention and food distribution program through video and photography.",
    fullCaseStudy: [
      "AV Excel documented JDC's door-to-door health intervention and food distribution program. The assignment covered interviews, community interactions, household visits, and overall program implementation through video and photography.",
    ],
    keyHighlights: [
      "Sensitive household visit documentation",
      "High-resolution still photography for donor accountability",
    ],
    galleryPlaceholders: [
      { caption: "Door-to-door health worker consultation", alt: "Health worker visiting patient home" },
    ],
  },
};

// Images are sourced from the matching project slides in the AV Excel company profile.
const projectSlide: Record<string, number> = {"etex-25":12,"national-police-day-116":13,"presidential-high-level-breakfast-dialogue":14,"hope-for-justice-learning-event":15,"africa-job-creation-forum-3rd":16,"africa-public-service-day-10th":17,"rophnan-concert-tour-2025":18,"santim-pay-pos-launch":19,"tov-agricultural-documentary":20,"jdc-door-to-door-health-program":21};
for (const project of Object.values(projectsData)) {
  if (projectSlide[project.slug] && !project.galleryImages?.length) project.galleryImages = profileMedia[projectSlide[project.slug]] || [];
}
