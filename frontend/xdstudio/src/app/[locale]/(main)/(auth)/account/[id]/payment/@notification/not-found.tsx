import { Search } from "lucide-react";

import { Alert, AlertTitle, AlertDescription } from "@/libs/shadcn/ui/alert";

export default async function NotFoundLastTransaction() {
  return (
    <Alert className="max-w-md">
      <Search className="mt-1 size-5 text-muted-foreground" />
      <AlertTitle className="text-lg font-semibold tracking-tight text-foreground/80">
        No Recent Transactions Found
      </AlertTitle>
      <AlertDescription className="text-sm text-muted-foreground">
        We {`couldn't`} locate any payment activity for this account in the
        recent history. Please check your full payment history below.
      </AlertDescription>
    </Alert>
  );
}
