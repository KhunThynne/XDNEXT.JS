"use client";

import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/shared/libs/shadcn/custom/pagination";
import { useMemo } from "react";

import { useAppForm } from "@/shared/hooks/useAppForm";
import { useStore } from "@tanstack/react-form";
import { getVisiblePages } from "@/shared/utils/getVisiblePages";
import { InputGroupInput } from "@/shared/libs/shadcn/ui/input-group";
import { Separator } from "@/shared/libs/shadcn/ui/separator";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useRouter } from "@navigation";
import { FieldSet } from "@/shared/libs/shadcn/ui/field";

interface Props {
  totalPages: number;
  currentPage?: number;
}

export function PaginationForm({
  totalPages,
  currentPage: currentPageProp = 1,
}: Props) {
  const router = useRouter();
  const defaultValues = { currentPage: currentPageProp, totalPages };

  const form = useAppForm({
    defaultValues,
    onSubmit: ({ value }) => {
      router.push({
        pathname: "/products",
        query: { page: value.currentPage.toString() },
      });
    },
  });
  // const handlePage = (page: number) => {};
  const currentPage = Number(
    useStore(form.store, (state) => state.values.currentPage)
  );

  const isSubmitting = useStore(form.store, (state) => state.isSubmitting);
  const visiblePages = useMemo(
    () => getVisiblePages(totalPages, currentPage),
    [currentPage, totalPages]
  );

  return (
    <form.AppForm>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="@container"
      >
        <Pagination className="@md:justify-end">
          {/* Previous */}

          <form.AppField
            name="currentPage"
            children={(field) => {
              return (
                <FieldSet className="contents">
                  <PaginationContent className="justify-between @max-md:grow gap-3">
                    <PaginationItem className="@max-3xs:hidden">
                      <PaginationButton
                        className="data-[active=false]:opacity-50"
                        title="Previous"
                        type="button"
                        onClick={() => {
                          const nextPage = Number(field.state.value) - 1;
                          if (nextPage >= 1) {
                            field.handleChange(nextPage);
                            form.handleSubmit();
                          }
                        }}
                        disabled={currentPageProp <= 1 || isSubmitting}
                      >
                        <ChevronLeftIcon />
                      </PaginationButton>
                    </PaginationItem>
                    {visiblePages.map((page, index) => {
                      if (page === 0) {
                        return (
                          <PaginationItem
                            key={`ellipsis-${index}`}
                            className="@max-md:hidden"
                          >
                            <PaginationEllipsis />
                          </PaginationItem>
                        );
                      }

                      return (
                        <PaginationItem key={page} className="@max-md:hidden">
                          <PaginationButton
                            type="button"
                            variant={"outline"}
                            size={"icon"}
                            disabled={page === currentPage}
                            onClick={() => {
                              field.handleChange(page);
                              form.handleSubmit();
                            }}
                          >
                            {page}
                          </PaginationButton>
                        </PaginationItem>
                      );
                    })}
                    <PaginationItem className="flex gap-1 @md:hidden">
                      <field.Input
                        type="number"
                        min={1}
                        className="max-w-30"
                        classNames={{ input: "text-center" }}
                        max={totalPages}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            form.handleSubmit();
                          }
                        }}
                        onInput={(e) => {
                          const target = e.currentTarget;
                          const value = Number(target.value);
                          if (value < 1) target.value = "";
                          if (value > totalPages)
                            target.value = String(totalPages);
                        }}
                        groupe
                      >
                        <Separator orientation="vertical" />

                        <label htmlFor={"total-pages"} className="sr-only">
                          Total Pages
                        </label>
                        <InputGroupInput
                          id={"total-pages"}
                          aria-label="total-pages"
                          defaultValue={totalPages}
                          disabled
                          className="text-center"
                        />
                      </field.Input>
                    </PaginationItem>
                    <PaginationItem className="@max-3xs:hidden">
                      <PaginationButton
                        className="data-[active=false]:opacity-50"
                        title="Next"
                        type="button"
                        onClick={() => {
                          const nextPage = Number(field.state.value) + 1;
                          if (nextPage <= totalPages) {
                            field.handleChange(nextPage);
                            form.handleSubmit();
                          }
                        }}
                        disabled={currentPageProp >= totalPages || isSubmitting}
                      >
                        <ChevronRightIcon className="order-last" />
                      </PaginationButton>
                    </PaginationItem>
                  </PaginationContent>
                </FieldSet>
              );
            }}
          />
        </Pagination>
      </form>
    </form.AppForm>
  );
}
