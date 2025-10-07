import { Alert, AlertDescription, AlertTitle } from "@/libs/shadcn/ui/alert";
import { Bell } from "lucide-react";

export default function Notification() {
  return (
    <div className="py-1.5">
      <Alert className="max-w-3xl">
        <Bell />
        <AlertTitle>New Update Available!</AlertTitle>
        <AlertDescription>
          Check out the latest features and improvements in your tools now.
        </AlertDescription>
      </Alert>
    </div>
  );
}
