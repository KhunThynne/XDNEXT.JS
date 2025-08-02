import { Button, ButtonStateProps } from "@/libs/shadcn/ui/button";
import clsx from "clsx";

export const MenuButton = ({
  state,
  className,
  ...props
}: ButtonStateProps<boolean>) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={clsx("border-secondary border", className)}
      {...props}
    >
      <div className="relative size-4">
        <span
          className={clsx(
            "bg-primary absolute left-0 block h-0.5 w-4 transition-all duration-100",
            {
              "top-1": !state,
              "top-[0.4rem] rotate-[-45deg]": state,
            }
          )}
        />
        <span
          className={clsx(
            "bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100",
            {
              "top-2.5": !state,
              "top-[0.4rem] rotate-[45deg]": state,
            }
          )}
        />
      </div>
    </Button>
  );
};
