import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/cart/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between bg-F1E5D1 p-4 mb-4 rounded-lg">
      <div className="flex items-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover rounded mr-4"
        />
        <div>
          <h3 className="text-987070 font-semibold">{item.name}</h3>
          <p className="text-C39898">${item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center">
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) =>
            dispatch(
              updateQuantity({
                id: item.id,
                quantity: parseInt(e.target.value),
              })
            )
          }
          className="w-16 text-center border border-DBB5B5 rounded mr-2"
        />
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="bg-DBB5B5 text-987070 px-2 py-1 rounded hover:bg-C39898 transition-colors"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
