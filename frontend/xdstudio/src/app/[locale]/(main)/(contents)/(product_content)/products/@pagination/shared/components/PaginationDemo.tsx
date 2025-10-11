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

interface Props {
  totalPages: number;
  currentPage?: number;
}

interface FormValues {
  currentPage: number;
}

export function PaginationDemo({
  totalPages,
  currentPage: currentPageProp = 1,
}: Props) {
  const method = useForm<FormValues & Props>({
    defaultValues: { currentPage: currentPageProp, totalPages },
  });
  const { control, setValue, watch } = method;
  const currentPage = Number(watch("currentPage"));

  useEffect(() => {
    setValue("currentPage", currentPageProp);
  }, [currentPageProp, setValue]);
  const visiblePages = useMemo(
    () => getVisiblePages(totalPages, currentPage),
    [currentPage, totalPages]
  );
  useEffect(() => {
    watch("currentPage");
  }, [watch]);

  return (
    <Form {...method}>
      <Pagination className="md:justify-end">
        <PaginationContent>
          {/* Previous */}
          <PaginationItem>
            <PaginationPrevious
              className="data-[active=false]:opacity-50"
              isActive={currentPage > 1}
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
                  isActive={page === currentPage}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          <PaginationItem className="flex gap-1 md:hidden">
            <InputForm
              name="currentPage"
              control={control}
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
                input: "w-full max-w-[6ch] border text-center bg-background",
              }}
            />

            <SlashIcon className="my-auto size-4" />
            <InputForm
              name="totalPages"
              control={control}
              disabled
              type="number"
              classNames={{ input: "w-full max-w-[6ch] border text-center" }}
            />
          </PaginationItem>

          {/* Next */}
          <PaginationItem>
            <PaginationNext
              className="data-[active=false]:opacity-50"
              isActive={currentPage < totalPages}
              href={`?page=${currentPage + 1}`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </Form>
  );
}
