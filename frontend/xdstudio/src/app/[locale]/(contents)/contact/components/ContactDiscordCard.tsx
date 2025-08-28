import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/libs/shadcn/ui/card";

interface ContactDiscordCardProps {
  inviteLink?: string; // ลิงก์ invite ไปยัง Discord server
  description?: string;
}

export const ContactDiscordCard = ({
  inviteLink = "https://discord.gg/your-server",
  description = "เข้าร่วมกลุ่ม Discord ของเราเพื่อพูดคุย แลกเปลี่ยนข้อมูล และติดตามข่าวสารล่าสุด",
}: ContactDiscordCardProps) => {
  return (
    <Card className="border-purple-500 shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-xl">
      <CardHeader className="flex items-center gap-3">
        {/* <Discord className="h-6 w-6 text-purple-500" /> */}
        <h3 className="text-lg font-semibold">Join Our Discord</h3>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4 text-gray-600">
          {description}
        </CardDescription>
        <a
          href={inviteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-purple-500 px-4 py-2 font-medium text-white transition-colors hover:bg-purple-600"
        >
          Join Discord
        </a>
      </CardContent>
    </Card>
  );
};
