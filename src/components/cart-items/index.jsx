import React from "react";

// icons
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";
import useCart from "src/hooks/useCart";

export default function CartItem({
  product,
  product: { id, image, title, option, quantity, price },
  uid,
}) {
  const { addOrUpdateItem, removeItems } = useCart();
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 });
  };
  const handlePlus = () =>
    addOrUpdateItem.mutate({ ...product, quantity: quantity + 1 });

  const handleDelete = () =>
    removeItems.mutate({ ...product, product: product.id });
  return (
    <li className="flex py-2 items-center justify-between">
      <div className="flex items-center gap-5">
        <img src={image} alt={title} width={200} className="rounded-lg" />
        <div className="basis-96">
          <p className="font-semibold">{title}</p>
          <p>{option}</p>
          <p>${price}</p>
        </div>
      </div>
      <div className="flex justify-between items-center gap-2">
        <AiOutlineMinusCircle
          onClick={handleMinus}
          className="hover:scale-105 cursor-pointer"
        />
        <span>{quantity}</span>
        <AiOutlinePlusCircle
          onClick={handlePlus}
          className="hover:scale-105 cursor-pointer"
        />
        <RiDeleteBin6Fill
          onClick={handleDelete}
          className="hover:scale-105 cursor-pointer"
        />
      </div>
    </li>
  );
}
