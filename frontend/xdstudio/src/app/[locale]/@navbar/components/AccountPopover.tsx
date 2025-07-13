import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/shadcn/avatar";
import { Button } from "@/shared/components/shadcn/button";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/components/shadcn/popover";

import _ from "lodash";
import { LogOut, User } from "lucide-react";
import { User as UserType } from "next-auth";
import { signOut } from "next-auth/react";
import { getInitials } from "../utils/getInitials";
import { useMemo } from "react";
import { Role } from "@/libs/graphql/generates/graphql";
import { Badge } from "@/shared/components/shadcn/badge";
import { useFormatter } from "next-intl";
import { usePathname } from "@navigation";

export function AccountPopover(user: Partial<UserType>) {
  const avatarUsername = useMemo(
    () => getInitials(user.username),
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

      <PopoverContent align="end" alignOffset={-30} className="w-xs relative">
        <div className="flex items-center gap-3">
          <div>
            <Avatar className="mx-auto size-10">
              <AvatarImage src={user?.image ?? ""} />
              <AvatarFallback>{avatarUsername}</AvatarFallback>
            </Avatar>

            <Badge variant="outline" className="mx-auto w-full text-[8px]">
              {user.role}
            </Badge>
          </div>

          <div className="grow overflow-hidden">
            <h4 className="truncate text-lg font-semibold capitalize">
              {user.username}
            </h4>
            <hr className="mb-2 mt-1" />
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
