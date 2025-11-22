import type { PointTransactionFieldFragment } from "@/libs/graphql/generates/graphql";
import { Badge } from "@/libs/shadcn/ui/badge";
import clsx from "clsx";
import _ from "lodash";
import { keyof } from "zod";

const statusMap: Record<string, { label: string; color: string }> = {
  requires_payment_method: {
    label: "Requires Payment Method",
    color: "text-yellow-600",
  },
  requires_confirmation: {
    label: "Requires Confirmation",
    color: "text-yellow-600",
  },
  requires_action: { label: "Requires Action", color: "text-orange-500" },
  processing: { label: "Processing", color: "text-blue-500" },
  requires_capture: { label: "Requires Capture", color: "text-purple-500" },
  canceled: { label: "Canceled", color: "text-destructive" },
  succeeded: { label: "Succeeded", color: "text-success" },
};

export const BadgePaymentStatus = ({
  status,
}: {
  status: NonNullable<PointTransactionFieldFragment["status"]>;
}) => {
  const { label, color } = _.get(statusMap, status!, {
    label: status,
    color: "text-muted-foreground",
  });
  return (
    <Badge variant="outline" className={clsx("max-w-full font-medium", color)}>
      <span className="truncate">{label}</span>
    </Badge>
  );
};
