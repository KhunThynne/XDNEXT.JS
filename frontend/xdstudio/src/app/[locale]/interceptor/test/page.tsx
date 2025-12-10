import Link from "next/link";

export default async function Page({
  params,
}: PageProps<"/[locale]/interceptor/test">) {
  const { locale } = await params;
  return (
    <>
      <Link href={`/${locale}/interceptor/menu`}>test</Link>
    </>
  );
}
