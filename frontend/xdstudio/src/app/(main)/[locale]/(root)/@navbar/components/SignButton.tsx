import { Button } from "@/shared/libs/shadcn/ui/button";
import { usePathname, useRouter } from "@navigation";
import { Users } from "lucide-react";
import { useSearchParams } from "next/navigation";
import login from "../utils/signIn";

export const SignInButton = () => {
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
        await login("", { redirectTo: pathname, callbackUrl: pathname });
      }}
    >
      <Users />
    </Button>
  );
};

export const SignButton = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const pathname = usePathname();
  const router = useRouter();
  return (
    <Button
      variant="ghost"
      size="icon"
      disabled={!!callbackUrl}
      aria-label="sign-button"
      onClick={() =>
        router.push({ pathname: "/login", query: { callbackUrl: pathname } })
      }
    >
      {children}
    </Button>
  );
};
