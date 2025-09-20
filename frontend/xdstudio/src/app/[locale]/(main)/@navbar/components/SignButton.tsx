import { Button } from "@/libs/shadcn/ui/button";
import { usePathname } from "@navigation";
import { Users } from "lucide-react";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export const SignButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const pathname = usePathname();
  return (
    <Button
      variant="ghost"
      size="icon"
      disabled={!!callbackUrl}
      onClick={() => signIn(``)}
    >
      <Users />
    </Button>
  );
};
