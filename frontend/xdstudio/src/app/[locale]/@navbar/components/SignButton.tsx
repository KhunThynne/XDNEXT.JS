import { useDialoguseContext } from "@/libs/dialog/DialogInstance";
import { Button } from "@/libs/shadcn/ui/button";
import { useSignDialog } from "@/shared/components/forms/auth/SignForm";
import { usePathname, useRouter } from "@navigation";
import { LogInIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

export const SignButton = () => {
  const { openDialog } = useSignDialog();
  //   const router = useRouter();
  //   const pathname = usePathname();
  //   const searchParams = useSearchParams();

  //   const callbackUrl = searchParams.get("callbackUrl") ?? "";

  //   const handleSearch = async (newValue: string) => {
  //     const params = new URLSearchParams(searchParams.toString());
  //     params.set("callbackUrl", newValue);
  //     router.push(`?${params.toString()}`);
  //   };

  return (
    <Button variant="ghost" size="icon" onClick={openDialog}>
      <LogInIcon />
    </Button>
  );
};
