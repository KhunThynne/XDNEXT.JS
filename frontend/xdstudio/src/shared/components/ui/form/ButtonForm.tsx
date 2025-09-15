import { useFormState } from "react-hook-form";
import { Loader2 } from "lucide-react"; // icon loader
import clsx from "clsx";
import { Button } from "@/libs/shadcn/ui/button";

export const ButtonForm = (props: React.ComponentProps<typeof Button>) => {
  const { children, className, ...buttonProps } = props;
  const { isSubmitting } = useFormState();

  return (
    <Button
      {...buttonProps}
      className={clsx(className, "cursor-pointer")}
      disabled={isSubmitting || buttonProps.disabled}
    >
      {(buttonProps.type === "submit" || !buttonProps.type) && isSubmitting && (
        <Loader2 className="size-4 animate-spin" />
      )}
      {children}
    </Button>
  );
};
