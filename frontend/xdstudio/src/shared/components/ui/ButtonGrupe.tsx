import clsx from "clsx";

export default function ButtonGrupe({
  className,
  children,
}: WithlDefaultProps) {
  return (
    <section className={clsx(`flex justify-end gap-3`, className)}>
      {children}
    </section>
  );
}
