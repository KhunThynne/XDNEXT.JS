import { Button } from "@/shared/libs/shadcn/ui/button";
import { usePathname } from "@navigation";
import { Users } from "lucide-react";

import { useSearchParams } from "next/navigation";
import login from "../utils/signIn";

export const SignButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const pathname = usePathname();

  return (
    <Button
      variant="ghost"
      size="icon"
      disabled={!!callbackUrl}
      aria-label="sign-button"
      onClick={async () => {
        const fullPath = `${window.location.origin}${pathname}`;
        await login("", { redirectTo: fullPath, callbackUrl: fullPath });
      }}
    >
      <Users />
    </Button>
  );
};
