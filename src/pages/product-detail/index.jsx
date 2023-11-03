import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "src/components/button";
import useCart from "src/hooks/useCart";

export default function ProductDetail() {
  const { addOrUpdateItem } = useCart();
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();
  const [success, setSuccess] = useState();
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {
    const product = { id, image, title, price, option: selected, quantity: 1 };
    addOrUpdateItem.mutate(product, {
      onSuccess: () => {
        setSuccess("Added to cart!");
        setTimeout(() => setSuccess(null), 3000);
      },
    });
  };
  return (
    <section>
      <p className="mx-7 pt-4 text-gray-700">{category}</p>
      <div className="flex flex-col md:flex-row p-4">
        <img
          src={image}
          alt={title}
          width={150}
          className="px-2 basis-4/12 mx-auto"
        />
        <div className="w-full basis-5/12 flex flex-col">
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold py-2 border-b border-gray-400">
              {title}
            </h2>
            <p className="text-2xl font-bold py-2">${price}</p>
          </div>
          <div>
            <h3 className="text-2xl pt-5">Description:</h3>
            <p className="py-4">{description}</p>
          </div>
          <div className="flex items-center">
            <p>Options:</p>
            <label className="text-brand font-bold" htmlFor="'select"></label>
            <select
              className="p-2 m-4 flex-1 border-2 border-dashed border-brand outline-none"
              id="select"
              onChange={handleSelect}
              value={selected}
            >
              {options &&
                options.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
            </select>
          </div>
          <Button text="add to cart" onClick={handleClick} />
          {success && <p className="py-2">{success}</p>}
        </div>
      </div>
    </section>
  );
}
