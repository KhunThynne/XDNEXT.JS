"use client";

import { Button } from "@/libs/shadcn/ui/button";
import { LoadingDots } from "@/shared/components/ui/Loading";
import { useRouter } from "@navigation";
import { ArrowLeft } from "lucide-react";
import type { Session } from "next-auth";

export const BackScreen = ({ session }: { session: Session | null }) => {
  const router = useRouter();
  if (!session) return <LoadingDots />;
  return (
    <Button
      onClick={() => router.push(`/account/${session.user.id}`)}
      className="mx-auto size-full opacity-80"
      variant={"ghost"}
    >
      <ArrowLeft className="size-6" />
    </Button>
  );
};
