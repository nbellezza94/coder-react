import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import "./CartContainer.css"

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } = useContext(CartContext);

  let total = getTotalPrice()

  const limpiar = ()=>{
    
    Swal.fire({
      title: 'Estas seguro que quieres vaciar el carrito?',
      text: "",
      icon: 'warning',
      showDenyButton:true,
      confirmButtonColor: '#3085d6',
      denyButtonColor: '#d33',
      confirmButtonText: 'SI',
      denyButtonText: 'NO'
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart()
        Swal.fire(
          'Carrito vaciado',
          '',
          'success'
          )
      }else if (result.isDenied) {
        Swal.fire('Cambios cancelados')
      }
    })
    

  } 

  return (
    <div className="cart-container">
      <h1 className="cart-title">Carrito</h1>

      {cart.map((elemento) => {
        return (
          <div key={elemento.id} className="cart-item">
            <h4>{elemento.title}</h4>
            <h5>${elemento.price}</h5>
            <h5>{elemento.quantity}</h5>
            <button onClick={()=>deleteById(elemento.id)}>eliminar</button>
          </div>
        );
      })}

     { 
     cart.length > 0 && <button className="cart-button" onClick={limpiar}>Limpiar carrito</button>
     }
     <h2 className="cart-total">Total: {total} </h2>
     {
     cart.length > 0 && 
     <Link to ={"/checkout"} className="cart-buy-button">Comprar</Link>
     }
     
    </div>
  );
};



export default CartContainer;