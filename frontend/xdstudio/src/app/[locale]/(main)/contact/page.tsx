import { TeamMemberCard } from "./components/team-member-card";
import { ContactDiscordCard } from "./components/ContactDiscordCard";
import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { Card } from "@/libs/shadcn/ui/card";
import { DiscordServerCard } from "@/shared/components/ui/cards/DiscordServerCard";
import ContentCard from "@/shared/components/ui/cards/ContentCard";

const teamMembers = [
  {
    id: 1,
    name: "Merlinx",
    mainRole: "Founder",
    avatar: "https://avatars.githubusercontent.com/u/88436887?s=64&v=4",
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
    name: "Dev_Khunthynne",
    mainRole: "Co-founder",
    avatar: "https://avatars.githubusercontent.com/u/88494232?v=4",
    contacts: {
      discord: "sarahc#5678",
      facebook: "https://facebook.com/sarahchen.page",
      tiktok: "https://tiktok.com/@sarahc_creative",
      linkedin: "https://linkedin.com/in/sarahchen",
      personalFacebook: "https://facebook.com/sarah.chen.personal",
      instagram: "https://instagram.com/sarahc_designs",
    },
  },
  // {
  //   id: 3,
  //   name: "Mike Rodriguez",
  //   role: "Content Creator",
  //   avatar: "/content-creator-headshot.png",
  //   contacts: {
  //     discord: "mikerod#9012",
  //     facebook: "https://facebook.com/mikerodriguez.content",
  //     tiktok: "https://tiktok.com/@mike_creates",
  //     linkedin: "https://linkedin.com/in/mikerodriguez",
  //     personalFacebook: "https://facebook.com/mike.rodriguez.personal",
  //     instagram: "https://instagram.com/mike_content",
  //   },
  // },
];

export default function ContactPage() {
  return (
    <div className=" ">
      {/* <ContentCard
        className="min-h-80!"
        title={`Get in Touch`}
        description={`Connect with our team through your preferred platform. We're here to help and would love to hear from you!.`}
      >
        <section>test</section>
      </ContentCard> */}

      <div className="container mx-auto space-y-6">
        <ContentCard
          title={"Our Team & Community"}
          description="Get in touch with us, meet the team behind the project, and connect with our Discord community."
        >
          <ContainerSection
            title="TEAM Members"
            classNames={{ title: " self-start" }}
          >
            <div className="flex gap-5 max-sm:flex-col">
              {teamMembers.map((member) => (
                <TeamMemberCard
                  key={member.id}
                  member={member}
                  className="max-w-xs"
                />
              ))}
            </div>
          </ContainerSection>
        </ContentCard>

        <ContainerSection
          title="Discord Patner"
          classNames={{
            title: " ",
            content:
              "grid grid-cols-1  @min-xl:grid-cols-2 @min-5xl:grid-cols-3 @min-7xl:grid-cols-4 gap-5 place-items-center",
          }}
        >
          {[
            {
              iconUrl: "https://picsum.photos/seed/gamers/64",
              serverName: "Gamers United",
              onlineCount: 783,
              memberCount: 2540,
              inviteLink: "https://discord.gg/gamersunited",
            },
            {
              iconUrl: "https://picsum.photos/seed/code/64",
              serverName: "Code & Coffee",
              onlineCount: 1204,
              memberCount: 5210,
              inviteLink: "https://discord.gg/codecoffee",
            },
            {
              iconUrl: "https://picsum.photos/seed/art/64",
              serverName: "The Art Studio",
              onlineCount: 450,
              memberCount: 1890,
              inviteLink: "https://discord.gg/artstudio",
            },
            {
              iconUrl: "https://picsum.photos/seed/music/64",
              serverName: "Music & Vibes",
              onlineCount: 2150,
              memberCount: 8930,
              inviteLink: "https://discord.gg/musicvibes",
            },
            {
              iconUrl: "https://picsum.photos/seed/memes/64",
              serverName: "Meme Central",
              onlineCount: 4588,
              memberCount: 15200,
              inviteLink: "https://discord.gg/memecentral",
            },
            {
              iconUrl: "https://picsum.photos/seed/study/64",
              serverName: "Study Hall Lo-fi",
              onlineCount: 152,
              memberCount: 850,
              inviteLink: "https://discord.gg/studyhall",
            },
            {
              iconUrl: "https://picsum.photos/seed/tech/64",
              serverName: "PC Builders Hub",
              onlineCount: 987,
              memberCount: 4321,
              inviteLink: "https://discord.gg/pcbuilders",
            },
          ].map((server, index) => {
            return <DiscordServerCard key={index} {...server} />;
          })}
        </ContainerSection>
      </div>
      {/* <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <AdditionalContacts />
        <ContactForm />
      </div> */}
    </div>
  );
}
