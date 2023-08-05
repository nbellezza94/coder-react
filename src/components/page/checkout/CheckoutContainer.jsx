import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, serverTimestamp, updateDoc, doc } from "firebase/firestore";
import "./CheckoutContainer.css"
import Swal from "sweetalert2";

const CheckoutContainer = () => {

  const [orderId, setOrderId] = useState("")

  const { cart, getTotalPrice } = useContext(CartContext)

  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  let total = getTotalPrice()

  const handleSubmit = (evento) => {
    evento.preventDefault();
    let order = {
      buyer: data,
      items: cart,
      total,
      date: serverTimestamp()
    }
    // crear orden en firebase
    const orderCollection = collection(db, "orders")
    addDoc(orderCollection, order).then(res => setOrderId(res.id))
    //modificar stock en firebase

    cart.forEach((product) => {
      updateDoc(doc(db, "products", product.id),
        { stock: product.stock - product.quantity, })
    })

  };

  const handleChange = (evento) => {
    setData({ ...data, [evento.target.name]: evento.target.value });
  };


  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {orderId ? (
        <div>
          {Swal.fire({
            title: 'Muchas gracias por su compra!',
            text: `Su número de pedido es: ${orderId}`,
            confirmButtonText: 'OK',
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = '/';
            }
          })};
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="checkout-form">
          <input
            type="text"
            placeholder="Ingrese su nombre"
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Ingrese su telefono"
            name="phone"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Ingrese su e-mail"
            name="email"
            onChange={handleChange}
          />
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default CheckoutContainer;
