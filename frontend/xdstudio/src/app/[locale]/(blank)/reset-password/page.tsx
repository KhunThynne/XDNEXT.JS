import { redirect } from "@navigation";
import { ResetPasswordForm, RestFormProps } from "./ResetPassword.form";

export default async function ResetPasswordPage({
  params,
  searchParams,
}: {
  searchParams: Promise<RestFormProps>;
  params: Promise<{ locale: string }>;
}) {
  const serchFormReset = await searchParams;
  const { locale } = await params;
  if (!serchFormReset.email || !serchFormReset.token) {
    redirect({ href: "/", locale });
  }
  return (
    <div className="grow place-content-center">
      <section className="mx-auto max-w-screen-sm">
        <ResetPasswordForm {...serchFormReset} />
      </section>
    </div>
  );
}
