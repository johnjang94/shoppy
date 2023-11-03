import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({
  product,
  product: { id, image, title, category, price },
}) {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => {
        navigate(`/products/${id}`, { state: { product } });
      }}
      className="hover:shadow-md hover:rounded-lg p-2 overflow-hidden cursor-pointer transition-all hover:scale-105"
    >
      <img src={image} alt={title} className="rounded-xl w-full" />
      <div className="py-2 px-2 text-lg flex justify-between items-center">
        <h3 className="truncate">{title}</h3>
        <p>{`$${price}`}</p>
      </div>
      <p className="pb-2 px-2 text-gray-600">{category}</p>
    </li>
  );
}
