import "../App.css";
import icon from "../img/icon.png";

export default function Header({ itemLength }) {
  return (
    <div id="header">
      <div className="title-cont">
        <img src={icon} alt="" className="icon" />
        <h2 className="title">Welcome to the store</h2>
      </div>
      <div className="item-cont">
        <h4>Number of articles</h4>
        <span className="item-length">{itemLength}</span>
      </div>
    </div>
  );
}
