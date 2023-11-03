import React from "react";
import useCart from "src/hooks/useCart";

// icons
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Status() {
  const {
    cartQuery: { data: products },
  } = useCart();
  return (
    <div className="relative">
      <AiOutlineShoppingCart className="text-xl" />
      {products && (
        <p className="w-4 h-4 text-center bg-brand text-white rounded-full font-bold absolute -top-1 -right-2 text-xs">
          {products.length}
        </p>
      )}
    </div>
  );
}
