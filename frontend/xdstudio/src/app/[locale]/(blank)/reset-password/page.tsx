import { ResetPasswordForm } from "./ResetPassword.form";

export default async function ResetPasswordPage() {
  return (
    <div className="grow place-content-center">
      <section className="mx-auto max-w-screen-sm">
        <ResetPasswordForm />
      </section>
    </div>
  );
}
