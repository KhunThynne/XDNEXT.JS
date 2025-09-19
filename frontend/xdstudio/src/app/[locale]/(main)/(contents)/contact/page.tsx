import { Card, CardHeader } from "@/libs/shadcn/ui/card";
import { AdditionalContacts } from "./components/additional-contacts";
import { ContactForm } from "./components/contact-form";
import { ContactHeader } from "./components/contact-header";
import { TeamMemberCard } from "./components/team-member-card";
import { ContactDiscordCard } from "./components/ContactDiscordCard";

const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Community Manager",
    avatar: "/community-manager-headshot.png",
    contacts: {
      discord: "alexj#1234",
      facebook: "https://facebook.com/alexjohnson",
      tiktok: "https://tiktok.com/@alexj",
      linkedin: "https://linkedin.com/in/alexjohnson",
      personalFacebook: "https://facebook.com/alex.johnson.personal",
      instagram: "https://instagram.com/alexj_official",
    },
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Social Media Specialist",
    avatar: "/professional-headshot-of-social-media-specialist.png",
    contacts: {
      discord: "sarahc#5678",
      facebook: "https://facebook.com/sarahchen.page",
      tiktok: "https://tiktok.com/@sarahc_creative",
      linkedin: "https://linkedin.com/in/sarahchen",
      personalFacebook: "https://facebook.com/sarah.chen.personal",
      instagram: "https://instagram.com/sarahc_designs",
    },
  },
  {
    id: 3,
    name: "Mike Rodriguez",
    role: "Content Creator",
    avatar: "/content-creator-headshot.png",
    contacts: {
      discord: "mikerod#9012",
      facebook: "https://facebook.com/mikerodriguez.content",
      tiktok: "https://tiktok.com/@mike_creates",
      linkedin: "https://linkedin.com/in/mikerodriguez",
      personalFacebook: "https://facebook.com/mike.rodriguez.personal",
      instagram: "https://instagram.com/mike_content",
    },
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto space-y-8 px-4 py-12">
        <ContactHeader />
        <ContactDiscordCard inviteLink="https://discord.gg/your-server" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <AdditionalContacts />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
