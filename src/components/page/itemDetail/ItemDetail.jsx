import { useContext, useEffect, useState } from "react";
import CounterContainer from "../../common/counter/CounterContainer";
import { products } from "../../../productsMock";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
// import Swal from 'sweetalert2';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CardMedia } from "@mui/material";


const ItemDetail = () => {

  const { addToCart, getQuantityById } = useContext(CartContext)

 

  const [producto, setProducto] = useState({});

  const { id } = useParams()
  const navigate = useNavigate()

  const totalQuantity = getQuantityById(id)


  useEffect(() => {
    let productoSeleccionado = products.find((elemento) => elemento.id === +id);
    const tarea = new Promise((res, rej) => {
      res(productoSeleccionado)
    });
    tarea.then(res => setProducto(res))

  }, [id]);

  const onAdd = (cantidad) => {
    let productCart = { ...producto, quantity: cantidad }
    addToCart(productCart)
    //Alerta
    // Swal.fire({
    //   showConfirmButton: false,
    //   title: 'Su producto fue agregado al carrito',
    //   showClass: {
    //     popup: 'animate__animated animate__fadeInDown'
    //   },
    //   hideClass: {
    //     popup: 'animate__animated animate__fadeOutUp'
    //   },
    //   icon: 'success',
    //   timer: 1500,
    // })
    toast.success("Producto agregado exitosamente", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
  };


  return (
    <div>
      
      <h2>{producto.title}</h2>
      <CardMedia
      sx={{maxWidth:345}}
        component="img"
        alt=""
        height="auto"
        image={producto.img}
      />
      <h4>{producto.price}</h4>

      <CounterContainer stock={producto.stock} onAdd={onAdd} initial={totalQuantity} />
      <ToastContainer />
    </div>
  );
};

export default ItemDetail;
