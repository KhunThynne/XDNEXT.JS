"use client"
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Page() {
  const testx = "";

  useEffect(() => {
    toast("Event has been created.");
  }, []);

  const [test, setTest] = useState();

  return (
    <div className="grid text-2xl min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20"></div>
  );
}
