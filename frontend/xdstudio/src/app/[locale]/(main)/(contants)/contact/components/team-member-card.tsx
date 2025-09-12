import { Card, CardContent } from "@/libs/shadcn/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/libs/shadcn/ui/avatar";
import { SocialLinks } from "./social-links";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
  contacts: {
    discord?: string;
    facebook?: string;
    tiktok?: string;
    linkedin?: string;
    personalFacebook?: string;
    instagram?: string;
  };
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="bg-card transition-shadow duration-300 hover:shadow-lg">
      <CardContent className="p-6 text-center">
        <Avatar className="mx-auto mb-4 h-20 w-20">
          <AvatarImage
            src={member.avatar || "/placeholder.svg"}
            alt={member.name}
          />
          <AvatarFallback className="text-lg font-semibold">
            {member.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>

        <h3 className="text-card-foreground mb-1 text-xl font-black">
          {member.name}
        </h3>

        <p className="text-muted-foreground mb-4">{member.role}</p>

        <SocialLinks contacts={member.contacts} />
      </CardContent>
    </Card>
  );
}
