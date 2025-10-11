import Content from "@/shared/components/ui/Content";

export default async function AuthenticationLayout({ children }: WithChildren) {
  return (
    <Content
      classNames={{
        outsite: "grow min-h-screen  grid  bg-accent/40 relative",
        content: "container mx-auto py-5 flex flex-col gap-4",
      }}
    >
      {children}
    </Content>
  );
}
