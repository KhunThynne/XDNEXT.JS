import { Button } from "@/libs/shadcn/ui/button";
import { Users } from "lucide-react";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export const SignButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  return (
    <Button
      variant="ghost"
      size="icon"
      disabled={!!callbackUrl}
      onClick={() => signIn()}
    >
      <Users />
    </Button>
  );
};
