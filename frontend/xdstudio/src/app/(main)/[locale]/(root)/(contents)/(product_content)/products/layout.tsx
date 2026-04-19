import { BreadcrumbComponent } from "@/shared/components/breadcrumb";
import { ContainerSection } from "@/shared/components/ContainerSection";
import { Fragment } from "react/jsx-runtime";
import { contentClassName } from "./shared/contentClassName";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
} from "@/shared/libs/shadcn/ui/item";

export default function LayoutProducts({
  children,
  pagination,
}: LayoutProps<"/[locale]/products">) {
  return (
    <Fragment>
      <BreadcrumbComponent />
      <Item className="absolute top-6 right-0 p-0">
        <ItemContent className="w-25">
          <ItemActions>
            <div className="grow">{pagination}</div>
          </ItemActions>
          <ItemDescription className="text-muted-foreground/40 place-self-end-safe text-xs capitalize">
            press enter
          </ItemDescription>
        </ItemContent>
      </Item>
      <ContainerSection 
        title="All Featured Products"
        description={
          "Explore our curated selection of top-selling and high-quality items. Click on any product to learn more or make a purchase."
        }
        classNames={contentClassName}
      >
        {children}
      </ContainerSection>
      <section>{pagination}</section>
    </Fragment>
  );
}
