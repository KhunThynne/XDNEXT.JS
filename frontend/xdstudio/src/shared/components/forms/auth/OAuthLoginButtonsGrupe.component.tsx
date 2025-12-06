import { signIn } from "next-auth/react";
import { Button } from "@/libs/shadcn/ui/button";
import clsx from "clsx";
import Image from "next/image";

const providers = [
  { id: "discord", label: "Discord", disable: false },
  { id: "google", label: "Google", disable: true },
  { id: "facebook", label: "Facebook", disable: true },
];

export function OAuthLoginButtonsGrupe({
  callbackUrl = "/",
  className,
}: {
  callbackUrl?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        `mx-auto max-w-full place-items-center space-y-5`,
        className
      )}
    >
      <p className="text-xs text-secondary-foreground">or signin with</p>
      <div className={clsx("flex flex-wrap justify-center gap-10 gap-y-4")}>
        {providers.map(({ id, label, disable }) => (
          <Button
            key={id}
            size={"icon"}
            variant="outline"
            type="button"
            disabled={disable}
            onClick={() =>
              signIn(id, {
                redirectTo: callbackUrl,
                callbackUrl,
              })
            }
            className="relative hover:brightness-125"
          >
            <Image
              src={`/icons/${id}.icon.svg`}
              alt={`${label} logo`}
              width={60}
              height={60}
              className="aspect-square"
              loading="lazy"
              draggable={false}
            />
            <span className="sr-only">Login with {label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
