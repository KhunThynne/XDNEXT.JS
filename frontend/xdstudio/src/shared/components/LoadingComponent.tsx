import clsx from "clsx";

export const LoadingDots = ({
  className,
  size = 3,
}: WithClassName & { size?: number }) => {
  return (
    <div className={clsx("flex space-x-3", className)}>
      <div
        className={clsx(
          "animate-duration-1000 bg-primary h-3 w-3 animate-bounce rounded-full",
          size && `size-${size}!`
        )}
      ></div>
      
      <div
        className={clsx(
          "animate-duration-1000 animate-delay-200 bg-primary/80 h-3 w-3 animate-bounce rounded-full",
          size && `size-${size}!`
        )}
      ></div>
      <div
        className={clsx(
          "animate-duration-1000 animate-delay-400 bg-primary/60 h-3 w-3 animate-bounce rounded-full",
          size && `size-${size}!`
        )}
      ></div>
    </div>
  );
};

export const LoadingSpinner = ({ className }: WithClassName) => {
  return (
    <div
      className={clsx(
        "relative flex size-20 items-center justify-center",
        className
      )}
    >
      <div className="border-primary/20 border-t-primary absolute h-full w-full animate-spin rounded-full border-4"></div>
      <div className="border-r-accent animate-reverse animation-duration-[700ms] absolute h-[80%] w-[80%] animate-spin rounded-full border-4 border-transparent"></div>
      <div className="border-b-primary/60 animation-duration-[500ms] absolute h-[50%] w-[50%] animate-spin rounded-full border-2 border-transparent"></div>
    </div>
  );
};
export default function Loading({
  children,
  description = "Plaese watting",
  loading = "Loading...",
  className,
}: {
  loading?: string;
  description?: string;
} & Partial<WithChildren> &
  WithClassName) {
  return (
    <div
      className={clsx(
        "bg-accent/40 absolute inset-0 z-30 flex size-full items-center justify-center",
        className
      )}
    >
      <div className="flex flex-col items-center space-y-8">
        {/* Enhanced Animated Spinner */}
        <LoadingSpinner />

        {/* Loading Text with Better Typography */}
        <div className="space-y-3 text-center">
          <h2 className="text-foreground animate-pulse text-2xl font-bold">
            {loading}
          </h2>
          <p className="text-muted-foreground font-medium">{description}</p>
        </div>
        {children}
        {/* Enhanced Progress Dots */}
        <LoadingDots />
      </div>
    </div>
  );
}
