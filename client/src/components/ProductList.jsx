import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import products from "../data/products.json";

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-F1E5D1 p-4 rounded-lg shadow">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-fet mb-4 rounded"
          />
          <h3 className="text-987070 text-lg font-semibold">{product.name}</h3>
          <p className="text-C39898">${product.price.toFixed(2)}</p>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="mt-2 bg-DBB5B5 text-987070 px-4 py-2 rounded hover:bg-C39898 transition-colors"
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
