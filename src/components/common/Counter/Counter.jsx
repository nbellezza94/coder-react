import "./Counter.css"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

const Counter = ({ contador, sumar, restar, onAdd }) => {

  // return (
  //   <div className="counter-container">
  //     <button className="counter-button" onClick={sumar}>+</button>
  //     <span className="count">{contador}</span>
  //     <button className="counter-button" onClick={restar}>-</button>
  //     <button className="add-to-cart-button" onClick={() => onAdd(contador)}>
  //       <ShoppingCartIcon fontSize="small" /> Agregar al carrito
  //     </button>
  //   </div>
  // );

  return (
    <div className="counter-box">
      <div className="counter">
        <button className="counter-button" onClick={restar}>
          -
        </button>
        <span className="count">{contador}</span>
        <button className="counter-button" onClick={sumar}>
          +
        </button>
      </div>
      <div className="add-to-cart">
        <button className="add-to-cart-button" onClick={() => onAdd(contador)}>
          <ShoppingCartIcon fontSize="small" />
        </button>
      </div>
    </div>
  );

};

export default Counter;

