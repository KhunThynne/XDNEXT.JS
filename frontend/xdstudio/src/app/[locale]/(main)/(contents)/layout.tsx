import Content from "@/shared/components/ui/Content";

export default function LayoutProducts({ children }: WithChildren) {
  return (
    <Content
      classNames={{
        outsite: "grow min-h-screen  grid  bg-accent-foreground/10",
        content: "container mx-auto my-3 flex flex-col gap-4",
      }}
    >
      <div className="flex grow flex-col gap-y-4 pb-10">{children}</div>
    </Content>
  );
}
