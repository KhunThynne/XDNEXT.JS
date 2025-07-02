import clsx from "clsx";

export default function Content({
  classNames,
  children,
}: Omit<NextPropsClassNames<"content" | "outsite">, "className">) {
  return (
    <div className={classNames?.outsite}>
      <div
        className={clsx(
          "absolute inset-0 -z-20",
          "[mask-image:linear-gradient(to_bottom,white,transparent)]",
          // Light mode
          "bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] opacity-60",
          // Dark mode
          "dark:bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]",
          "bg-[size:40px_40px]"
        )}
      />
      <div className={classNames?.content}>{children}</div>
    </div>
  );
}
