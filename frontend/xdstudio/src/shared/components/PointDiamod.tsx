import clsx from "clsx";
import { Diamond } from "lucide-react";
export default function PointDiamon({ className }: WithClassName) {
  return (
    <Diamond
      className={clsx(
        `inline-block`,
        "animate-pulse self-center text-xd duration-500",
        `size-4`,
        `fill-blue-500`,
        className
      )}
    />
  );
}
