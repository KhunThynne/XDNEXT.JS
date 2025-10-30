import { execute } from "@/libs/graphql/execute";
import type { User } from "@/libs/graphql/generates/graphql";
import {
  RedeemUserPasswordResetTokenResultDocument,
  SendUserPasswordResetTokenDocument,
  ValidateUserPasswordResetTokenDocument,
} from "@/libs/graphql/generates/graphql";
import { useMutation, useQuery } from "@tanstack/react-query";
const useSendTokenResetMutation = () =>
  useMutation({
    mutationFn: async (email: User["email"]) => {
      if (email) {
        const res = await execute(SendUserPasswordResetTokenDocument, {
          email,
        });
        return res;
      }
      throw new Error("Not found this email");
    },
  });
const useRedeemUserPasswordResetTokenResultMutation = () =>
  useMutation({
    mutationFn: async ({
      email,
      password,
      token,
    }: {
      email: User["email"];
      token: string;
      password: string;
    }) => {
      if (email) {
        const res = await execute(RedeemUserPasswordResetTokenResultDocument, {
          email,
          token,
          password,
        });
        return res;
      }
      throw new Error("Not found this email");
    },
  });
type ValidateTokenPayload = { email: string; token: string };
const useValidateUserPasswordResetTokenQuery = () =>
  useQuery({
    queryKey: ["validateResetToken"],
    queryFn: async ({ queryKey }) => {
      const payload = queryKey[1] as unknown as ValidateTokenPayload;
      const { email, token } = payload;
      if (!email) throw new Error("Email not found");
      const res = await execute(ValidateUserPasswordResetTokenDocument, {
        email,
        token,
      });
      return res;
    },
    enabled: false,
  });

export const useAuthDocument = () => {
  return {
    useSendTokenResetMutation,
    useRedeemUserPasswordResetTokenResultMutation,
    useValidateUserPasswordResetTokenQuery,
  };
};
