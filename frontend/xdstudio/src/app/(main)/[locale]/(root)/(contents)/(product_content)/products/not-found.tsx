"use client";
import { ArrowLeft, PackageX } from "lucide-react";

import { EmptyComponent } from "@/shared/components/EmptyComponent";
import { Button } from "@/shared/libs/shadcn/ui/button";
import { useRouter } from "@navigation";

export default function NotFoundProductsPage() {
  const router = useRouter();
  return (
    <EmptyComponent
      title="Product Not Found"
      description={`We couldn't find the product you're looking for. It might have been removed,
              renamed, or didn't exist in the first place.`}
      icon={<PackageX className="text-muted-foreground size-6" />}
      breadcrumb={{
        pathNames: ["products"],
      }}
      button={{ hidden: true }}
    >
      <Button variant="default" onClick={() => router.back()}>
        <ArrowLeft className="mr-2 size-4" />
        Back
      </Button>
    </EmptyComponent>
  );
}
