import { Avatar, AvatarFallback, AvatarImage } from "@/libs/shadcn/ui/avatar";
import { Button } from "@/libs/shadcn/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/libs/shadcn/ui/popover";

import _ from "lodash";
import { LogOut, Plus, PlusCircle, PlusSquareIcon, User } from "lucide-react";
import type { User as UserType } from "next-auth";
import { signOut } from "next-auth/react";
import { getInitials } from "../utils/getInitials";
import { useMemo } from "react";
import { Badge } from "@/libs/shadcn/ui/badge";
import { useFormatter } from "next-intl";
import { Link, usePathname } from "@navigation";
import { Separator } from "@/libs/shadcn/ui/separator";
import PointDiamon from "@/shared/components/PointDiamod";
import Point from "@/shared/components/ui/Point";
import { env } from "@/env";

export function AccountPopover(user: Partial<UserType>) {
  const avatarUsername = useMemo(
    () => getInitials(user.username as string),
    [user.username]
  );
  const format = useFormatter();
  const pathname = usePathname();
  if (_.isEmpty(user)) return null;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="open-user-popover">
          <User />
        </Button>
      </PopoverTrigger>

      <PopoverContent align="end" className="w-xs space-y-2">
        <div className="relative flex items-center gap-3">
          <div>
            <Avatar className="mx-auto size-10">
              <AvatarImage src={user?.image ?? ""} />
              <AvatarFallback>{avatarUsername}</AvatarFallback>
            </Avatar>

            <Badge variant="outline" className="mx-auto w-full text-[8px]">
              {user.role}
            </Badge>
          </div>

          <div className="group/user grow overflow-hidden">
            <h4 className="truncate text-lg font-semibold capitalize">
              <Link href={`/account/${user.id}`} className="hover:underline">
                {user.username}
              </Link>
            </h4>
            <Separator className="mt-1 mb-2 group-hover/user:border-primary/30" />

            <p className="truncate text-muted-foreground">{user.email}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <section className="flex items-center text-xs font-bold capitalize">
            <Button
              variant={"ghost"}
              size={"icon"}
              className="cursor-pointer opacity-50 hover:opacity-100"
              asChild
            >
              <Link href={`/account/${user?.id}/payment`}>
                <PlusCircle className="size-4!" />
              </Link>
            </Button>
            <Badge
              variant="secondary"
              className="mx-1 max-w-20 rounded-full px-2 font-mono tabular-nums"
            >
              <PointDiamon />
              <span className="w-full truncate text-[0.65rem]">
                <Point pointId={user.point?.id} />
              </span>
            </Badge>
          </section>
          <div>
            <Button
              className=""
              variant="ghost"
              onClick={() => signOut({ callbackUrl: env.NEXT_PUBLIC_SITE_URL })}
            >
              <small className="text-xs">Logout</small>

              <LogOut />
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
