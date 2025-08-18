import EmblaCarousel from "@/libs/embla-carousel/EmblaCarousel";
import { Maybe, Tag } from "@/libs/graphql/generates/graphql";
import { Badge } from "@/libs/shadcn/ui/badge";
import clsx from "clsx";
import _ from "lodash";

export const ProductTag = ({
  tags,
  classNames,
}: { tags: Maybe<Tag[]> | undefined } & GlobalPropsClassNames<"view">) => {
  if (_.isEmpty(tags)) return null;
  return (
    <EmblaCarousel
      className="h-5"
      classNames={{
        container: "gap-1.5 ",
        view: clsx(`px-5`, classNames?.view),
      }}
    >
      {tags?.map((tag) => {
        return (
          <Badge key={tag.id} variant={"outline"} className="select-none">
            {tag.name}
          </Badge>
        );
      })}
    </EmblaCarousel>
  );
};
