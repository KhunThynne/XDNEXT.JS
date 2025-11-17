import clsx from "clsx";

export const LoadingDots = ({ className }: WithClassName) => {
  return (
    <div className={clsx("flex space-x-3", className)}>
      <div className="animate-duration-1000 h-3 w-3 animate-bounce rounded-full bg-primary"></div>
      <div className="animate-duration-1000 animate-delay-200 h-3 w-3 animate-bounce rounded-full bg-primary/80"></div>
      <div className="animate-duration-1000 animate-delay-400 h-3 w-3 animate-bounce rounded-full bg-primary/60"></div>
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
        "absolute inset-0 z-30 flex size-full items-center justify-center bg-accent/40",
        className
      )}
    >
      <div className="flex flex-col items-center space-y-8">
        {/* Enhanced Animated Spinner */}
        <div className="relative">
          <div className="h-20 w-20 animate-spin rounded-full border-4 border-primary/20 border-t-primary"></div>
          <div className="animate-reverse animate-duration-700 absolute inset-2 h-16 w-16 animate-spin rounded-full border-4 border-transparent border-r-accent"></div>
          <div className="animate-duration-500 absolute inset-4 h-12 w-12 animate-spin rounded-full border-2 border-transparent border-b-primary/60"></div>
        </div>

        {/* Loading Text with Better Typography */}
        <div className="space-y-3 text-center">
          <h2 className="animate-pulse text-2xl font-bold text-foreground">
            {loading}
          </h2>
          <p className="font-medium text-muted-foreground">{description}</p>
        </div>
        {children}
        {/* Enhanced Progress Dots */}
        <LoadingDots />
      </div>
    </div>
  );
}
