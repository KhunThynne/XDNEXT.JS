import Content from "@/shared/components/ui/Content";

export default function LayoutProducts({ children }: WithChildren) {
  return (
    <Content
      classNames={{
        outsite: "grow  relative grid  bg-secondary-foreground/5 ",
        content: "container mx-auto py-5 flex flex-col gap-4",
      }}
    >
      <section className="grow">{children}</section>
    </Content>
  );
}
