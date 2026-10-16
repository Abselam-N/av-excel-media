export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  { name: "Moti Taina", role: "General Manager", bio: "", image: "/team/moti-taina.jpg" },
  { name: "Abselam Nigatu", role: "Technical Director", bio: "", image: "/team/abselam-nigatu.jpg" },
  { name: "Abesha Meseret", role: "Operations Manager", bio: "", image: "/team/abesha-meseret.jpg" },
  { name: "Yitay Kifle", role: "LED Screen Engineer", bio: "", image: "/team/yitay-kifle.jpg" },
  { name: "Kaleabe Seifu", role: "Lead Audio Visual Supervisor", bio: "", image: "/team/kaleabe-seifu.jpg" },
];
