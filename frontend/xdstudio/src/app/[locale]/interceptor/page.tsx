import { Link } from "@navigation";

export default async function Page({
  params,
}: PageProps<"/[locale]/interceptor/test">) {
  const { locale } = await params;
  return (
    <>
      <Link href={"/login"}>test</Link>
    </>
  );
}
