import { Button } from "@/libs/shadcn/ui/button";
import clsx from "clsx";
type MenuButton = React.ComponentProps<typeof Button> & {
  state?: boolean;
};
export const ButtonMenu = ({ state, className, ...props }: MenuButton) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={clsx("border border-secondary", className)}
      {...props}
    >
      <div className="relative size-4">
        <span
          className={clsx(
            "absolute left-0 block h-0.5 w-4 bg-primary transition-all duration-100",
            {
              "top-1": !state,
              "top-[0.4rem] -rotate-45": state,
            }
          )}
        />
        <span
          className={clsx(
            "absolute left-0 block h-0.5 w-4 bg-foreground transition-all duration-100",
            {
              "top-2.5": !state,
              "top-[0.4rem] rotate-45": state,
            }
          )}
        />
      </div>
    </Button>
  );
};
