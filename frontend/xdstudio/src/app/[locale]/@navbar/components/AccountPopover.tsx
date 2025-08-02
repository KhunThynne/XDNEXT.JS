import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/libs/shadcn/ui/avatar";
import { Button } from "@/libs/shadcn/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/libs/shadcn/ui/popover";

import _ from "lodash";
import { LogOut, User } from "lucide-react";
import { User as UserType } from "next-auth";
import { signOut } from "next-auth/react";
import { getInitials } from "../utils/getInitials";
import { useMemo } from "react";
import { Badge } from "@/libs/shadcn/ui/badge";
import { useFormatter } from "next-intl";
import { Link, usePathname } from "@navigation";
import { Separator } from "@/libs/shadcn/ui/separator";

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
        <Button variant="ghost" size="icon">
          <User />
        </Button>
      </PopoverTrigger>

      <PopoverContent align="end" className="w-xs">
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
            <Separator className="group-hover/user:border-primary/30 mb-2 mt-1" />

            <p className="text-muted-foreground truncate">{user.email}</p>
          </div>
        </div>

        <div className="mt-2">
          <p>{user.provider}</p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <small className="text-xs font-bold capitalize">
              <span>point :</span>
              <Badge
                variant="secondary"
                className="max-w-18 mx-1 rounded-full px-1 font-mono text-[10px] tabular-nums"
              >
                <span className="w-full truncate">{format.number(1000)}</span>
              </Badge>
            </small>
          </div>
          <div>
            <Button
              className=""
              variant="ghost"
              onClick={() => signOut({ callbackUrl: pathname })}
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
