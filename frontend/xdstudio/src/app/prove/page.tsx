<<<<<<< HEAD
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { toast } from "sonner";

export default function Page() {
  const t = useTranslations();
  useEffect(() => {
    toast("Event has been created.");
  }, []);

  return (
    <div className="container mx-auto space-y-3">
      <Button variant="outline" className="bg-red-300">
        {t("success")}
      </Button>
      <Input />
=======
import Link from "next/link";

export default function PageTest() {
  return (
    <div className="h-80 border">
      <Link href={"/prove/test"}> test</Link>
>>>>>>> develop-thynne
    </div>
  );
}
