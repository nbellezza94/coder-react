import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

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
    <div>
      <h1>Carritoooo</h1>

      {cart.map((elemento) => {
        return (
          <div key={elemento.id} style={{border: "2px solid black"}}>
            <h4>{elemento.title}</h4>
            <h5>{elemento.price}</h5>
            <h5>{elemento.quantity}</h5>
            <button onClick={()=>deleteById(elemento.id)}>eliminar</button>
          </div>
        );
      })}

     { 
     cart.length > 0 && <button onClick={limpiar}>Limpiar carrito</button>
     }
     <h2>Total: {total} </h2>
     <Link to ={"/checkout"}>Comprar</Link>
    </div>
  );
};

export default CartContainer;