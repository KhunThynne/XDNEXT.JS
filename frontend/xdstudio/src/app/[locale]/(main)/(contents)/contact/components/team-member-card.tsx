import { Card, CardContent } from "@/libs/shadcn/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/libs/shadcn/ui/avatar";
import { SocialLinks } from "./social-links";
import clsx from "clsx";

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

export function TeamMemberCard({
  member,
  className,
}: TeamMemberCardProps & WithClassName) {
  return (
    <Card
      className={clsx(
        "transition-shadow duration-300 hover:shadow-lg max-sm:max-w-full",
        className
      )}
    >
      <CardContent className="flex justify-between max-sm:gap-5 text-center sm:flex-col">
        <section className="space-y-3 lg:contents">
          <Avatar className="mx-auto size-20">
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
          <p className="text-muted-foreground order-2 leading-4 max-sm:text-sm md:pb-3">
            {member.role}
          </p>
        </section>

        <section className="max-md:space-y-3 lg:contents">
          <h3 className={clsx("text-card-foreground order-0 font-black")}>
            {member.name}
          </h3>

          <div className="order-last">
            <SocialLinks contacts={member.contacts} />
          </div>
        </section>
      </CardContent>
    </Card>
  );
}
