import { ArrowLeft, PackageX } from "lucide-react";

import { EmptyComponent } from "@/shared/components/EmptyComponent";
import { Button } from "@/shared/libs/shadcn/ui/button";
import { Link } from "@navigation";

export default function NotFoundLocale() {
  return (
    <EmptyComponent
      title="Product Not Found"
      description={`We couldn't find the product you're looking for. It might have been removed,
              renamed, or didn't exist in the first place.`}
      icon={<PackageX className="text-muted-foreground size-6" />}
      breadcrumb={{
        pathNames: ["products", "unknown"],
      }}
      button={{ hidden: true }}
    >
      <Button asChild variant="default">
        <Link href="/products">
          <ArrowLeft className="mr-2 size-4" />
          Back to Products
        </Link>
      </Button>
    </EmptyComponent>
  );
}
