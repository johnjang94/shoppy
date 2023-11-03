import React from "react";
import Card from "src/components/shopping-card";
import useProducts from "src/hooks/useProducts";

export default function ShoppingPage() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {products &&
          products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
      </ul>
    </div>
  );
}
