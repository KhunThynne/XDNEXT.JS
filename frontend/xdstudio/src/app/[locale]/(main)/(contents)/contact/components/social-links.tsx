import { Button } from "@/libs/shadcn/ui/button";
import {
  MessageCircle,
  Facebook,
  Music,
  Linkedin,
  User,
  Instagram,
  ExternalLink,
} from "lucide-react";

interface SocialLinksProps {
  contacts: {
    discord?: string;
    facebook?: string;
    tiktok?: string;
    linkedin?: string;
    personalFacebook?: string;
    instagram?: string;
  };
}

export function SocialLinks({ contacts }: SocialLinksProps) {
  const socialPlatforms = [
    {
      key: "discord",
      icon: MessageCircle,
      label: "Discord",
      value: contacts.discord,
      color: "hover:text-[#5865F2]",
    },
    {
      key: "facebook",
      icon: Facebook,
      label: "Facebook Page",
      value: contacts.facebook,
      color: "hover:text-[#1877F2]",
    },
    {
      key: "tiktok",
      icon: Music,
      label: "TikTok",
      value: contacts.tiktok,
      color: "hover:text-[#000000]",
    },
    {
      key: "linkedin",
      icon: Linkedin,
      label: "LinkedIn",
      value: contacts.linkedin,
      color: "hover:text-[#0A66C2]",
    },
    {
      key: "personalFacebook",
      icon: User,
      label: "Personal Facebook",
      value: contacts.personalFacebook,
      color: "hover:text-[#1877F2]",
    },
    {
      key: "instagram",
      icon: Instagram,
      label: "Instagram",
      value: contacts.instagram,
      color: "hover:text-[#E4405F]",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {socialPlatforms.map((platform) => {
        if (!platform.value) return null;

        const Icon = platform.icon;
        const isUrl = platform.value.startsWith("http");

        return (
          <Button
            key={platform.key}
            variant="outline"
            size="sm"
            className={`transition-colors duration-200 ${platform.color}`}
            asChild={isUrl}
          >
            {isUrl ? (
              <a
                href={platform.value}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <Icon className="h-4 w-4" />
                <ExternalLink className="h-3 w-3" />
              </a>
            ) : (
              <span className="flex items-center gap-1">
                <Icon className="h-4 w-4" />
                <span className="text-xs">{platform.value}</span>
              </span>
            )}
          </Button>
        );
      })}
    </div>
  );
}
