import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <Provider store={store}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-987070 mb-8 text-center">
          Shopping
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <ProductList />
          </div>
          <div>
            <Cart />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
