"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { toast } from "sonner";

export default function Page() {
  useEffect(() => {
    toast("Event has been created.");
  }, []);

  return (
    <div className="container mx-auto space-y-3">
      <Button variant="outline" className="bg-red-300">
        TEST
      </Button>
      <Input />
    </div>
  );
}
