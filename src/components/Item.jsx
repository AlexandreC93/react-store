import { useState } from "react";

export default function Item({ name, price }) {
  let [quantity, setQuantity] = useState(1);
  let [hide, setHide] = useState(false);

  const handleQuantity = (value) => {
    console.log(quantity);
    if (value === "-" && quantity !== 1) {
      setQuantity(quantity - 1);
    }
    if (value === "+" && quantity !== 9) {
      setQuantity(quantity + 1);
    }
  };

  const handleItem = () => {
    setHide(true);
  };

  return (
    <>
      {!hide && (
        <div className="item">
          <h4 className="item-name">{name}</h4>

          <span className="item-quantity"> {quantity}</span>
          <span className="item-price">{price * quantity}</span>

          <button className="increment" onClick={() => handleQuantity("+")}>
            INCREMENT
          </button>

          <button className="decrement" onClick={() => handleQuantity("-")}>
            DECREMENT
          </button>

          <button className="delete" onClick={() => handleItem()}>
            DELETE
          </button>
        </div>
      )}
    </>
  );
}
