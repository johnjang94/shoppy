import React from "react";
import CartItem from "src/components/cart-items";

// icons
import { AiOutlinePlusCircle } from "react-icons/ai";
import { LiaEqualsSolid } from "react-icons/lia";
import PriceCard from "src/components/price-card";
import useCart from "src/hooks/useCart";

export default function Cart() {
  const {
    cartQuery: { isLoading, data: products },
  } = useCart();
  const SHIPPING = 3.5;

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );
  return (
    <section>
      <p>My Cart</p>
      {!hasProducts && <p>The cart is empty!</p>}
      {hasProducts && (
        <>
          <ul>
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
          </ul>
          <div className="flex justify-between items-center">
            <PriceCard text="product price" price={totalPrice} />
            <AiOutlinePlusCircle className="shrink-0" />
            <PriceCard text="delivery fee" price={SHIPPING} />
            <LiaEqualsSolid className="shrink-0" />
            <PriceCard text="total" price={totalPrice + SHIPPING} />
          </div>
        </>
      )}
    </section>
  );
}
