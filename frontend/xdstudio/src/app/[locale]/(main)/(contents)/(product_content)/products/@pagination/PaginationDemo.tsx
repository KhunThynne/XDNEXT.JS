"use client";

import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/libs/shadcn/ui/pagination";
import { useEffect, useMemo } from "react";
import { SelectForm } from "@/shared/components/ui/form/SelectForm";
import { Form } from "@/libs/shadcn/ui/form";
import { InputForm } from "@/shared/components/ui/form/InputForm";
import { Separator } from "@/libs/shadcn/ui/separator";
import { Slash, SlashIcon } from "lucide-react";
import { Button } from "@/libs/shadcn/ui/button";
import { revalidateClient } from "../shared/revalidateClient";

interface Props {
  totalPages: number;
}

interface FormValues {
  currentPage: number;
}
const getVisiblePages = (totalPages: number, currentPage: number) => {
  const delta = 1;
  const range: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - delta && i <= currentPage + delta)
    ) {
      range.push(i);
    }
  }
  return range;
};

export function PaginationDemo({ totalPages }: Props) {
  const router = useRouter();
  const method = useForm<FormValues & Props>({
    defaultValues: { currentPage: 1, totalPages },
  });
  const { control, setValue, watch } = method;
  const currentPage = Number(watch("currentPage"));
  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setValue("currentPage", page); // update form state
    router.push(`?page=${page}`);
  };
  const visiblePages = useMemo(
    () => getVisiblePages(totalPages, currentPage),
    [currentPage, totalPages]
  );
  useEffect(() => {
    watch("currentPage");
  }, [watch]);

  let lastPage = 0;

  return (
    <Form {...method}>
      <Button
        onClick={() => {
          revalidateClient("product-pagination");
        }}
      >
        Reload
      </Button>
      <Pagination className="md:justify-end">
        <PaginationContent>
          {/* Previous */}
          <PaginationItem>
            <PaginationPrevious
              className="data-[active=false]:opacity-50"
              isActive={currentPage > 1}
              href={`?page=${currentPage - 1}`}
              onClick={(e) => {
                e.preventDefault();
                goToPage(currentPage - 1);
              }}
            />
          </PaginationItem>
          {/* Desktop */}
          <section className="contents max-md:hidden">
            {visiblePages.map((page) => {
              const showEllipsis = page - lastPage > 1;
              const elements = [];

              if (showEllipsis) {
                elements.push(
                  <PaginationItem key={`ellipsis-${page}`}>
                    <PaginationEllipsis />
                  </PaginationItem>
                );
              }

              elements.push(
                <PaginationItem key={page}>
                  <Controller
                    name="currentPage"
                    control={control}
                    render={() => (
                      <PaginationLink
                        href={`?page=${page}`}
                        isActive={page === currentPage}
                        onClick={(e) => {
                          e.preventDefault();
                          goToPage(page);
                        }}
                      >
                        {page}
                      </PaginationLink>
                    )}
                  />
                </PaginationItem>
              );

              lastPage = page;
              return elements;
            })}
          </section>

          <section className="content md:hidden">
            <PaginationItem className="flex gap-1">
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
          </section>
          {/* Next */}
          <PaginationItem>
            <PaginationNext
              className="data-[active=false]:opacity-50"
              isActive={currentPage < totalPages}
              href={`?page=${currentPage + 1}`}
              onClick={(e) => {
                e.preventDefault();
                goToPage(currentPage + 1);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </Form>
  );
}
