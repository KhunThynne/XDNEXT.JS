export default async function PageProduct({
  params,
}: {
  params: Promise<{ locale: string; documentId: string }>;
}) {
  const { documentId, locale } = await params;
  return (
    <div className="z-50">
      <div>sadfsad</div>
      <h1>Product ID: {documentId}</h1>
      <p>Locale: {locale}</p>
    </div>
  );
}
