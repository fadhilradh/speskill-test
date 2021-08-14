import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const onAdd = (item) => {
    const exist = products.find((x) => x.id === item.product.code);
    if (exist) {
      setProducts(
        products.map((x) =>
          x.id === item.product.code
            ? { ...exist, quantity: item.quantity + 1 }
            : x
        )
      );
    } else {
      setProducts([...products]);
    }
  };

  function getAllData() {
    const myHeaders = new Headers({
      "Content-Type": "application/json",
      Authorization: "Bearer o7Ytbt9XQLI3PgtebJfKSXKEf0XHU74Y",
    });

    return fetch("https://spe-academy.spesolution.net/api/recruitment", {
      method: "GET",
      headers: myHeaders,
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Something went wrong on api server!");
        }
      })
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  useEffect(() => {
    getAllData();
    console.log(products);
  }, []);

  return (
    <div className="App">
      <Header />
      <Content onAdd={onAdd} products={products} />
    </div>
  );
}

export default App;
