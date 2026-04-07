"use client";

import { useForm } from "react-hook-form";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/libs/shadcn/custom/pagination";
import { useEffect, useMemo } from "react";
import { Form } from "@/libs/shadcn/ui/form";
import { InputForm } from "@/shared/components/ui/form/InputForm";
import { SlashIcon } from "lucide-react";
import { getVisiblePages } from "../utils/getVisiblePages";
import { useAppForm } from "@/shared/hooks/useAppForm";
import { useStore } from "@tanstack/react-form";

interface Props {
  totalPages: number;
  currentPage?: number;
}

interface FormValues {
  currentPage: number;
}

export function PaginationForm({
  totalPages,
  currentPage: currentPageProp = 1,
}: Props) {
  const form = useAppForm({
    defaultValues: { currentPage: currentPageProp, totalPages },
  });
  const currentPage = Number(
    useStore(form.store, (state) => state.values.currentPage)
  );

  useEffect(() => {
    form.setFieldValue("currentPage", currentPageProp);
  }, [currentPageProp, form]);
  const visiblePages = useMemo(
    () => getVisiblePages(totalPages, currentPage),
    [currentPage, totalPages]
  );

  return (
    <form.AppForm>
      <Pagination className="md:justify-end">
        <PaginationContent>
          {/* Previous */}
          <PaginationItem>
            <PaginationPrevious
              className="data-[active=false]:opacity-50"
              isActive={currentPage > 1}
              disable={currentPage <= 1}
              href={`?page=${currentPage - 1}`}
            />
          </PaginationItem>
          {/* Desktop */}

          {visiblePages.map((page, index) => {
            if (page === 0) {
              return (
                <PaginationItem
                  key={`ellipsis-${index}`}
                  className="max-md:hidden"
                >
                  <PaginationEllipsis />
                </PaginationItem>
              );
            }

            return (
              <PaginationItem key={page} className="max-md:hidden">
                <PaginationLink
                  href={`?page=${page}`}
                  disable={page === currentPage}
                  isActive={page === currentPage}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          <PaginationItem className="flex gap-1 md:hidden">
            <form.AppField
              name="currentPage"
              children={(field) => {
                return (
                  <field.Input
                    type="number"
                    min={1}
                    max={totalPages}
                    onInput={(e) => {
                      const target = e.currentTarget;
                      const value = Number(target.value);
                      if (value < 1) target.value = "";
                      if (value > totalPages) target.value = String(totalPages);
                    }}
                    classNames={{
                      input:
                        "w-full max-w-[6ch] border text-center bg-background",
                    }}
                  />
                );
              }}
            />

            <SlashIcon className="my-auto size-4" />
            <form.AppField
              name="totalPages"
              children={(field) => {
                return (
                  <field.Input
                    disabled
                    type="number"
                    classNames={{
                      input:
                        "w-full max-w-[6ch] border text-center bg-background",
                    }}
                  />
                );
              }}
            />
          </PaginationItem>

          {/* Next */}
          <PaginationItem>
            <PaginationNext
              className="data-[active=false]:opacity-50"
              isActive={currentPage < totalPages}
              disable={currentPage >= totalPages}
              href={`?page=${currentPage + 1}`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </form.AppForm>
  );
}
