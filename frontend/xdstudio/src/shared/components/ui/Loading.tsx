import clsx from "clsx";

export const LoadingDots = () => {
  return (
    <div className="flex space-x-3">
      <div className="bg-primary animate-duration-1000 h-3 w-3 animate-bounce rounded-full"></div>
      <div className="bg-primary/80 animate-duration-1000 animate-delay-200 h-3 w-3 animate-bounce rounded-full"></div>
      <div className="bg-primary/60 animate-duration-1000 animate-delay-400 h-3 w-3 animate-bounce rounded-full"></div>
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
        <div className="relative">
          <div className="border-primary/20 border-t-primary h-20 w-20 animate-spin rounded-full border-4"></div>
          <div className="border-r-accent animate-reverse animate-duration-700 absolute inset-2 h-16 w-16 animate-spin rounded-full border-4 border-transparent"></div>
          <div className="border-b-primary/60 animate-duration-500 absolute inset-4 h-12 w-12 animate-spin rounded-full border-2 border-transparent"></div>
        </div>

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
