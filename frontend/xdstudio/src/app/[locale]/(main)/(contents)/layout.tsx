import Content from "@/shared/components/ui/Content";

export default function LayoutProducts({ children }: WithChildren) {
  return (
    <Content
      classNames={{
        outsite: "grow grid bg-accent/40 relative",
        content: "container mx-auto  flex flex-col gap-4",
      }}
    >
      <div className="flex grow flex-col gap-y-4 pb-10">{children}</div>
    </Content>
  );
}
