import { execute } from "@/libs/graphql/execute";
import {
  SendUserPasswordResetTokenDocument,
  User,
} from "@/libs/graphql/generates/graphql";
import { useMutation } from "@tanstack/react-query";

export const useAuthDocument = () => {
  const sendTokenResetMutation = useMutation({
    mutationFn: async (email: User["email"]) => {
      if (email) {
        const res = await execute(SendUserPasswordResetTokenDocument, {
          email: email,
        });
        return res;
      }
      throw new Error("Not found this email")
    },
  });

  return { sendTokenResetMutation };
};
