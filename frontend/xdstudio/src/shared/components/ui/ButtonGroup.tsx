import clsx from "clsx";

export default function ButtonGroup({
  className,
  children,
}: WithlDefaultProps) {
  return (
    <section className={clsx(`flex justify-end gap-3`, className)}>
      {children}
    </section>
  );
}
