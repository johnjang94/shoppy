import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addOrUpdateCart, getCart, removeFromCart } from "src/api/firebase";
import { useAuthContext } from "src/components/context";

export default function useCart() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();

  const cartQuery = useQuery(["carts", uid || ""], () => getCart(uid), {
    enabled: !!uid,
  });
  const addOrUpdateItem = useMutation(
    (product) => addOrUpdateCart(uid, product),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["carts", uid]);
      },
    }
  );
  const removeItems = useMutation((id) => removeFromCart(uid, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["carts", uid]);
    },
  });
  return { cartQuery, addOrUpdateItem, removeItems };
}
