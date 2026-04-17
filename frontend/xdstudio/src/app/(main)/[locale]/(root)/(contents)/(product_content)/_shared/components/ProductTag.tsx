import EmblaCarousel from "@/shared/libs/embla-carousel/EmblaCarousel";
import { Badge } from "@/shared/libs/shadcn/ui/badge";
import type { Product } from "@/payload-types";
import clsx from "clsx";
import _ from "lodash";

export const ProductTag = ({
  tags,
  classNames,
}: { tags: Product["tags"] | undefined } & WithClassNames<"view">) => {
  if (_.isEmpty(tags)) return null;
  return (
    <EmblaCarousel
      classNames={{
        container: "gap-1.5 ",
        view: clsx(classNames?.view),
      }}
    >
      {tags?.map((tag) => {
        if (typeof tag !== "string") {
          return (
            <Badge key={tag.id} variant={"outline"} className="select-none">
              {tag.name}
            </Badge>
          );
        }
      })}
    </EmblaCarousel>
  );
};

