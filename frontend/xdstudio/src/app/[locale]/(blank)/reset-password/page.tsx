import { ResetPasswordForm, RestFormProps } from "./ResetPassword.form";
import { execute } from "@/libs/graphql/execute";
import { ValidateUserPasswordResetTokenDocument } from "@/libs/graphql/generates/graphql";
import { notFound } from "next/navigation";

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<RestFormProps>;
  params: Promise<{ locale: string }>;
}) {
  const serchFormReset = await searchParams;
  if (!serchFormReset.email || !serchFormReset.token) {
    notFound();
  }
  try {
    const validateToken = await execute(
      ValidateUserPasswordResetTokenDocument,
      {
        ...serchFormReset,
      }
    );

    const error = validateToken.data.validateUserPasswordResetToken;

    if (error?.code) {
      throw new Error(error.message);
    }
    return (
      <div className="grow place-content-center">
        <section className="mx-auto max-w-screen-sm">
          <ResetPasswordForm {...serchFormReset} />
        </section>
      </div>
    );
  } catch (err) {
    // Handle error safely
    const message = err instanceof Error ? err.message : String(err);
    throw new Error(message);
  }
}
