import clsx from "clsx";
import { Diamond } from "lucide-react";
export default function PointDiamon({ className }: WithClassName) {
  return (
    <Diamond
      className={clsx(
        "text-xd animate-pulse self-center duration-500",
        `size-4`,
        className
      )}
    />
  );
}
