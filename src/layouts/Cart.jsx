import Item from "../components/Item";

export default function Cart({ item, setItem }) {
  return (
    <div id="cart">
      {item.map((item) => {
        return <Item price={item.price} name={item.name} />;
      })}
    </div>
  );
}
