export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  location: string;
  country: string;
  description: string;
  vision: string;
  mission: string;
  coreValues: string[];
  contact: {
    email: string;
    phone: string;
    altPhone: string;
    whatsappNumber: string;
    telegramPhone: string;
    address: string;
  };
  navigation: Array<{ name: string; href: string }>;
}

export const siteConfig: SiteConfig = {
  name: "AV Excel Media & Communication",
  shortName: "AV Excel",
  tagline: "Excellence in Every Frame",
  location: "Addis Ababa",
  country: "Ethiopia",
  description:
    "AV Excel is a premier audiovisual solutions provider based in Addis Ababa, Ethiopia, offering event technology, video and photo production, event management, and branding services. Founded by a team of dynamic young media professionals, we deliver customized solutions tailored to each client, combining creativity, professionalism, and technical expertise.",
  vision:
    "To set the global standard for excellence in audiovisual services, seamlessly integrating innovation, creativity, and flawless execution to transform every experience into a lasting impression.",
  mission:
    "To deliver world-class audiovisual solutions with the highest degree of excellence, ensuring every project achieves its fullest creative and technical potential.",
  coreValues: ["Professionalism", "Creativity", "Solution-focused"],
  contact: {
    email: "contact@avexcel.net",
    phone: "+251 91 695 7018",
    altPhone: "+251 92 671 0826",
    whatsappNumber: "+251972218429",
    telegramPhone: "+251972218429",
    address: "HMM Building, 6th floor, Ethio-China road, Addis Ababa, Ethiopia",
  },
  navigation: [
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Equipment", href: "/equipment" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
};
