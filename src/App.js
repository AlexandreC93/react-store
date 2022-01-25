import './App.css';
import { useState } from 'react'
import Header from './layouts/Header';
import Cart from './layouts/Cart';
import Form from './layouts/Form';

function App() {
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");

  const [item, setItem] = useState([
    { name: "Eggs", price: 2.5 },
    { name: "Salad", price: 1.2 },
    { name: "Water", price: 3 },
  ]);

  const handlePrice = (e) => {
    console.log(price);
    setPrice(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItem([...item, { name, price }])
    console.log(name, price);
    console.log(item, "<<<<ITEM");
  };



  return (
    <div className="App">
      <Header itemLength={item.length} />
      <Cart item={item} setItem={setItem} />
      <Form price={price}
        handleSubmit={handleSubmit}
        name={name}
        handleName={handleName}
        handlePrice={handlePrice} />
    </div>
  );
}

export default App;
