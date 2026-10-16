export interface ServicePillar {
  slug: string;
  title: string;
  shortDescription: string;
  heroSummary: string;
  whatIsIncluded: {
    title: string;
    description: string;
  }[];
  typicalUseCases: string[];
  relatedProjectSlugs: string[];
  reviewNotice?: string;
}

export const servicesData: Record<string, ServicePillar> = {
  "led-screen-rental": {
    slug: "led-screen-rental",
    title: "LED Screen Rental & Stage Display Solutions",
    shortDescription: "Indoor and outdoor LED display rentals, stage backdrops, IMAG screens, and technical show support.",
    heroSummary: "Transform your next event with broadcast-grade visual impact. AV Excel delivers end-to-end LED display rentals tailored for corporate conferences, exhibitions, concerts, gala dinners, and hybrid summits. From high-resolution indoor panels to weatherproof outdoor walls, we provide seamless video hardware backed by complete on-site engineering.",
    whatIsIncluded: [
      { title: "Ultra-Fine Pixel Pitch", description: "High-density LED panels designed for crisp text, presentations, and live image magnification (IMAG) without visible moiré or pixelation on camera." },
      { title: "Turnkey Engineering", description: "Full delivery, structural truss rigging, ground support systems, power distribution, and on-site signal switching handled by experienced broadcast technicians." },
      { title: "Seamless Multi-Input Control", description: "Compatible with complex switcher inputs, SDI/HDMI feeds, media servers, and live video feeds with ultra-low latency." },
      { title: "Custom Aspect Ratios & Curved Formats", description: "Flexible panel configurations to build ultra-wide backdrops, split-screen stage walls, or custom multi-display stage layouts." },
    ],
    typicalUseCases: ["Corporate conferences and keynote presentations", "Hybrid conferences and live-streamed symposiums", "Concerts, festivals and outdoor screenings", "Exhibitions, gala dinners and product launches"],
    relatedProjectSlugs: [],
  },
  "event-technology": {
    slug: "event-technology",
    title: "Event Technology",
    shortDescription:
      "Broadcast-grade multi-platform live streaming, hybrid video conferencing facilitation, LED screen systems, and high-fidelity sound engineering.",
    heroSummary:
      "Eliminate technical friction at high-stakes conferences, summits, and national ceremonies with redundant live streaming, hybrid interpretation systems, and crystal-clear sound engineering.",
    whatIsIncluded: [
      {
        title: "Live Streaming & Recording",
        description:
          "Simultaneous multi-platform streaming to YouTube, Zoom, Facebook, and custom RTMP destinations in Full HD quality. Every session is fully recorded and delivered to the client as a final file for archiving or sharing.",
      },
      {
        title: "Video Conferencing Facilitation",
        description:
          "Full-service video conferencing support across Zoom, Microsoft Teams, and Google Meet covering equipment, operation, hybrid setup, and online interpretation for multilingual events. Technical hosts manage waiting rooms and breakout sessions.",
      },
      {
        title: "LED Screen Rental, Content Management & Multi-Camera Switching",
        description:
          "End-to-end visual production from LED screen rental and installation to live multi-camera switching and full content management. Integrates live graphics, lower thirds, and branded content seamlessly.",
      },
      {
        title: "Sound System",
        description:
          "Sound system rental, setup, and operation for indoor and outdoor events covering speaker and PA installation, sound mixing, and a full range of microphones with dedicated engineers on hand.",
      },
    ],
    typicalUseCases: [
      "International Summits & Bilateral Conferences",
      "Hybrid Corporate AGMs and Board Meetings",
      "Multilingual NGO Consultations with Live Interpretation",
      "High-Level Award Ceremonies & Product Launches",
    ],
    relatedProjectSlugs: [
      "etex-25",
      "presidential-high-level-breakfast-dialogue",
      "national-police-day-116",
      "africa-job-creation-forum-3rd",
    ],
  },
  "video-photo-production": {
    slug: "video-photo-production",
    title: "Video & Photo Production",
    shortDescription:
      "Cinematic documentary production, developmental research storytelling, and rapid-turnaround event photo and video coverage.",
    heroSummary:
      "Visual storytelling crafted with broadcast cinema cameras, aerial drone footage, and dedicated field sound recording. We capture the core mission of your organization with cinematic clarity.",
    whatIsIncluded: [
      {
        title: "Documentary Production",
        description:
          "Compelling documentaries covering organizational impact, social development, cultural heritage, and community narratives. Handles initial research, field interviews, cinematic shooting, drone footage, and full post-production in-house.",
      },
      {
        title: "Event Photography & Videography",
        description:
          "Professional coverage for corporate conferences, summits, NGO gatherings, and cultural events. Delivers edited photos and videos as well as raw master files.",
      },
      {
        title: "Same-Day Highlight Reels",
        description:
          "Onsite editing and same-day highlight reels ensuring your content is ready to share while the event is still live.",
      },
    ],
    typicalUseCases: [
      "NGO Program Impact and Beneficiary Documentation",
      "Agricultural and Rural Development Field Studies",
      "Multi-Day International Summit Coverage",
      "Corporate Milestone and Institutional Legacy Films",
    ],
    relatedProjectSlugs: [
      "tov-agricultural-documentary",
      "jdc-door-to-door-health-program",
      "hope-for-justice-learning-event",
    ],
  },
  "event-management-branding": {
    slug: "event-management-branding",
    title: "Event Management & Branding",
    shortDescription:
      "Full-cycle event planning, vendor sourcing, on-ground logistics coordination, stage design, and comprehensive venue branding.",
    heroSummary:
      "From preliminary floorplans to stage cues and branded signage, we manage the intricate operational details so your executive team can focus entirely on attendees.",
    whatIsIncluded: [
      {
        title: "Event Management",
        description:
          "Full-cycle event management for conferences, corporate events, and NGO gatherings from initial concept to final execution, covering planning, vendor coordination, and on-ground logistics.",
      },
      {
        title: "Branding & Printing",
        description:
          "Branding and print materials from signage and banners to programs and promotional materials so your event looks and feels as professional as it runs.",
      },
    ],
    typicalUseCases: [
      "Corporate Launches and Strategic Partner Summits",
      "Civil Society and NGO Multi-Day Workshops",
      "High-Level Diplomatic Dinners",
    ],
    relatedProjectSlugs: [
      "hope-for-justice-learning-event",
      "etex-25",
    ],
  },
  "av-integration-training": {
    slug: "av-integration-training",
    title: "AV Integration & Training",
    shortDescription:
      "Turnkey audiovisual system design, structured cabling, hardware installation, and hands-on technical capacity building.",
    heroSummary:
      "Transform executive boardrooms, auditoriums, and community spaces into reliable audiovisual environments with tailored acoustic planning, modern hardware integration, and staff training.",
    whatIsIncluded: [
      {
        title: "AV Integration",
        description:
          "Design and installation of tailored audiovisual systems for offices, conference rooms, auditoriums, and public venues. Covers cabling, infrastructure, full equipment installation, and ongoing technical support.",
      },
      {
        title: "Training",
        description:
          "Hands-on training for staff, technicians, and organizations on the operation and management of AV systems and media equipment tailored to team skill levels.",
      },
    ],
    typicalUseCases: [
      "Corporate Boardroom and Hybrid Meeting Room Upgrades",
      "University and Institutional Auditorium Fit-Outs",
      "Internal Media Unit Technical Upskilling",
    ],
    relatedProjectSlugs: ["etex-25"],
  },
  "digital-marketing-content-creation": {
    slug: "digital-marketing-content-creation",
    title: "Digital Marketing & Content Creation",
    shortDescription:
      "Creative digital content that strengthens brands' online presence, boosts visibility, and builds meaningful audience engagement.",
    heroSummary:
      "At AV Excel Media & Communication, we help brands and organizations build a powerful digital presence through compelling, high-quality content. We combine creativity, storytelling, and professional media production to transform ideas into engaging digital experiences that connect with audiences. From promotional videos, social media content, and photography to digital campaigns and branded storytelling, we create content that reflects each client's identity, communicates their message, and strengthens their online visibility. Our goal is to help businesses and organizations stand out in the digital space, build meaningful connections with their audiences, and establish a consistent, professional, and memorable online presence.",
    whatIsIncluded: [
      { title: "Social Media Content Production", description: "Engaging short-form videos, reels, interviews, and social-first content tailored to each brand's audience." },
      { title: "Promotional Videos & Photography", description: "Professional visual storytelling that presents clients, products, services, and campaigns with clarity and impact." },
      { title: "Branded Digital Campaign Content", description: "Creative campaign visuals, graphics, and multimedia assets designed for consistent communication across digital platforms." },
    ],
    typicalUseCases: [
      "Strengthening Business and Organizational Online Presence",
      "Social Media Engagement and Brand Awareness",
      "Promotional and Digital Storytelling Campaigns",
    ],
    relatedProjectSlugs: [],
  },
};
