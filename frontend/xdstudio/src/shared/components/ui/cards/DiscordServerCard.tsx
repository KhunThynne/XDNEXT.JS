import { Button } from "@/libs/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/libs/shadcn/ui/card";
import { Link } from "@navigation";
import { Circle, Users, ArrowRight, Image } from "lucide-react"; // Import icons from Lucide

// กำหนด Type ของ Props เพื่อความชัดเจน
interface DiscordServerCardProps {
  iconUrl?: string;
  serverName: string;
  onlineCount?: number;
  memberCount?: number;
  inviteLink?: string;
}

export const DiscordServerCard = ({
  iconUrl = "",
  serverName,
  onlineCount = 0,
  memberCount = 0,
  inviteLink = "",
}: DiscordServerCardProps) => {
  return (
    <Card className="border-discord-secondary bg-discord-bg w-full max-w-md">
      <CardHeader className="flex flex-row items-center gap-4 p-4">
        {iconUrl ? (
          <img
            src={iconUrl}
            alt={`${serverName} Icon`}
            className="h-14 w-14 rounded-full object-cover"
          />
        ) : (
          <Image className="size-14" />
        )}
        <div className="min-w-0 flex-1">
          <CardTitle
            className="truncate text-lg font-semibold"
            title={serverName}
          >
            {serverName}
          </CardTitle>
          {/* Member Status */}
          <div className="mt-1 flex flex-wrap items-center gap-4 text-sm text-zinc-400">
            <div className="flex items-center gap-1.5">
              <Circle className="h-2 w-2 fill-green-500 text-green-500" />
              <span>{onlineCount} Online</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="h-3 w-3" />
              <span>{memberCount} Members</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <Button
          className="bg-discord-bt hover:bg-discord w-full text-white hover:brightness-110"
          asChild
        >
          <Link
            href={inviteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            Join Server
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
