import { Button } from "@/libs/shadcn/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/libs/shadcn/ui/card";
import { Link } from "@navigation";
import clsx from "clsx";
import { Circle, Users, ArrowRight, Image } from "lucide-react"; // Import icons from Lucide
import { useFormatter } from "next-intl";

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
  const formater = useFormatter();
  return (
    <Card className="min-h-62 bg-discord-bg relative w-full max-w-md place-content-end gap-3 overflow-hidden">
      <CardHeader
        className={clsx(
          "h-18 border-discord-secondary absolute left-0 top-0 flex w-full flex-row items-center gap-4 border-b bg-gradient-to-b from-transparent to-[#a7a6a6]"
        )}
      >
        <div></div>
      </CardHeader>
      <CardContent className="z-0 space-y-1">
        {iconUrl ? (
          <img
            src={iconUrl}
            alt={`${serverName} Icon`}
            className="size-17 border-discord-secondary rounded-2xl border-2 object-cover shadow"
          />
        ) : (
          <Image className="size-15" />
        )}
        <div className="min-w-0 flex-1 text-zinc-400">
          <CardTitle
            className="text-md text-primary truncate font-semibold"
            title={serverName}
          >
            {serverName}
          </CardTitle>
          {/* Member Status */}
          <div className="flex flex-wrap items-center gap-2.5 text-sm">
            <div className="flex items-center gap-1">
              <Circle className="size-2.5 fill-green-700 text-green-700" />
              <span>{formater.number(onlineCount)} Online</span>
            </div>
            <div className="flex items-center gap-1">
              <Circle className="size-2.5 fill-gray-400 text-gray-400" />
              <span>{formater.number(memberCount)} Members</span>
            </div>
          </div>
          <p className="text-sm">Ets. Nov 2022</p>
        </div>
      </CardContent>
      <CardAction className="w-full px-4">
        <Button
          className="hover:bg-discord w-full bg-green-700 text-white hover:brightness-75"
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
      </CardAction>
    </Card>
  );
};
