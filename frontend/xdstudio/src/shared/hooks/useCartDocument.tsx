import { execute } from "@/libs/graphql/execute";
import {
  Cart,
  CreateCartItemDocument,
  GetCartDocument,
  Product,
  User,
} from "@/libs/graphql/generates/graphql";
import {
  keepPreviousData,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
const take = 10;

export const useCartInfinite = ({
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
  const invalidate = () => {
    cartQueryClient.invalidateQueries({ queryKey });
  };

  const query = useInfiniteQuery({
    queryKey,
    queryFn: async ({ pageParam = 0 }) => {
      const result = await execute(GetCartDocument, {
        where: { id: cartId },
        skip: pageParam,
        take,
      });
      return result;
    },
    enabled: !!cartId,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.data?.cart?.items?.length === take) {
        return allPages.length * take;
      }
      return undefined;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: true,
    placeholderData: keepPreviousData,
  });
  return { query, invalidate };
};

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
  const invalidate = () => {
    cartQueryClient.invalidateQueries({ queryKey });
  };
  const query = useQuery({
    queryKey: queryKey,
    refetchOnWindowFocus: true,
    queryFn: async ({ pageParam }) => {
      return await execute(GetCartDocument, {
        where: { id: cartId },
        skip: (pageParam as number) ?? 0,
        // cursor: 0,
        take: 10,
      });
    },
    staleTime: 1000 * 60 * 5,

    enabled: !!cartId,
  });

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
