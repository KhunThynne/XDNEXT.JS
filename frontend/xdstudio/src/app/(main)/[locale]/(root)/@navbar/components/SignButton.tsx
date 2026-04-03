import { Button } from "@/libs/shadcn/ui/button";
import { usePathname } from "@navigation";
import { Users } from "lucide-react";
import { signIn } from "next-auth/react";

import { useSearchParams } from "next/navigation";
import login from "../utils/signIn";

export const SignButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const pathname = usePathname();
  // const [test, setTest] = useState("");
  // useEffect(() => {
  //   setTest(window.location.href);
  // }, [setTest]);
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
