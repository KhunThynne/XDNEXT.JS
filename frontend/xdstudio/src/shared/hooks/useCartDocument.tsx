import { execute } from "@/libs/graphql/execute";
import {
  Cart,
  CreateCartItemDocument,
  GetCartDocument,
  Product,
  User,
} from "@/libs/graphql/generates/graphql";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useCartDocument = ({
  cartId,
  productId,
  userId,
}: {
  cartId: Cart["id"];
  productId?: Product["id"];
  userId: User["id"];
}) => {
  const queryKey = ["cart", userId];
  const cartQueryClient = useQueryClient();

  const query = useQuery({
    queryKey: queryKey,
    refetchOnWindowFocus: true,
    queryFn: async () => {
      return await execute(GetCartDocument, { where: { id: cartId } });
    },
    staleTime: 1000 * 60 * 5,
    enabled: !!cartId,
  });
  const invalidate = () => {
    cartQueryClient.invalidateQueries({ queryKey });
  };
  const mutation = useMutation({
    mutationFn: async () => {
      const res = await execute(CreateCartItemDocument, {
        data: {
          cart: { connect: { id: cartId } },
          product: { connect: { id: productId } },
          quantity: 1,
        },
      });
      return res;
    },
    onSuccess: (data) => {
      invalidate();
      console.log("Item added to cart", data);
    },
    onError: (error) => {
      console.error("Failed to add item to cart", error);
    },
  });

  return { mutation, queryKey, invalidate, query };
};
