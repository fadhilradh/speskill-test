import Header from "./components/Header";
import Content from "./components/Content";
import { useEffect, useState } from "react";
import { getAllData } from "./lib/getAllData";

function App() {
  const [products, setProducts] = useState([]);

  const addItem = (selectedItem) => {
    const targetProduct = products.find(
      (target) => target.product.code === selectedItem.product.code
    );
    setProducts(
      products.map((product) =>
        product.product.code === selectedItem.product.code
          ? {
              ...targetProduct,
              quantity: selectedItem.quantity + 1,
            }
          : product
      )
    );
  };

  const decreaseItem = (selectedItem) => {
    const targetProduct = products.find(
      (target) => target.product.code === selectedItem.product.code
    );
    setProducts(
      products.map((product) =>
        product.product.code === selectedItem.product.code
          ? {
              ...targetProduct,
              quantity: selectedItem.quantity - 1,
            }
          : product
      )
    );
  };
  useEffect(() => {
    getAllData(setProducts);
  }, []);

  return (
    <div className="App">
      <Header />
      <Content
        products={products}
        setProducts={setProducts}
        addItem={addItem}
        decreaseItem={decreaseItem}
      />
    </div>
  );
}

export default App;
