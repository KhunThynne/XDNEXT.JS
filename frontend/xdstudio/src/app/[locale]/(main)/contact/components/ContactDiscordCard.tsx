import { Button } from "@/libs/shadcn/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/libs/shadcn/ui/card";
import ContentCard from "@/shared/components/ui/cards/ContentCard";
import { Link } from "@navigation";

interface ContactDiscordCardProps {
  inviteLink?: string; // ลิงก์ invite ไปยัง Discord server
  description?: string;
}

export const ContactDiscordCard = ({
  inviteLink = "https://discord.gg/24m55m6ZWK",
  description = "เข้าร่วมกลุ่ม Discord ของเราเพื่อพูดคุย แลกเปลี่ยนข้อมูล และติดตามข่าวสารล่าสุด",
}: ContactDiscordCardProps) => {
  return (
    <ContentCard description={description}>
      <Button
        asChild
        // Added padding and larger text for the button
      >
        <Link target="_blank" href={inviteLink} rel="noopener noreferrer">
          Click to Join!
        </Link>
      </Button>
    </ContentCard>
  );
};
