import Content from "@/shared/components/Content";

export default function LayoutBlank({ children }: WithChildren) {
  return (
    <Content
      classNames={{
        content: "container mx-auto  flex flex-col gap-4",
      }}
    >
      {children}
    </Content>
  );
}
