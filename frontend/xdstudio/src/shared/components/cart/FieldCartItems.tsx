import type { CartItem } from "@/shared/libs/graphql/generates/graphql";
import { Link } from "@navigation";
import { ImageOff, Trash } from "lucide-react";
import Image from "next/image";
import CreditIcon from "../CreditIcon";
import { Button } from "@/shared/libs/shadcn/ui/button";
import { useFormContext, useFormState } from "react-hook-form";
import { useFormatter } from "next-intl";
import { useMemo } from "react";
import clsx from "clsx";
import _ from "lodash";
import {
  withFieldGroup,
  withForm,
} from "@/shared/hooks/useAppForm";

type CartItemsGroupProps = {
  test: string;
  userId?: string;
};

export const FieldCartItems = withForm({
  // props: { test: "", userId: "" } as CartItemsGroupProps,
  render: ({ form }) => {
    return <></>;
  },
});
