import { useContext, useEffect, useState } from "react";
import CounterContainer from "../../common/counter/CounterContainer";
// import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
// import Swal from 'sweetalert2';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore"
import "./ItemDetail.css"

const ItemDetail = () => {

  const { addToCart, getQuantityById } = useContext(CartContext)



  const [producto, setProducto] = useState({});

  const { id } = useParams()
  // const navigate = useNavigate()

  const totalQuantity = getQuantityById(id)


  useEffect(() => {
    // let productoSeleccionado = products.find((elemento) => elemento.id === +id);
    // const tarea = new Promise((res, rej) => {
    //   res(productoSeleccionado)
    // });
    // tarea.then(res => setProducto(res))
    let productsCollection = collection(db, "products")
    let productRef = doc(productsCollection, id)
    getDoc(productRef).then(res => {
      setProducto({ ...res.data(), id: res.id })
    })

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
      <div className="item-detail-container"> {/* Aplicar estilos al contenedor */}
        <div className="item-detail-box"> {/* Aplicar estilos al recuadro */}
          <h2>{producto.title}</h2>
          <img width={"30%"} src={producto.img} alt="" />
          <h4>${producto.price}</h4>
  
          {(typeof totalQuantity === "undefined" || producto.stock > totalQuantity) &&
            producto.stock > 0 && (
              <CounterContainer
                stock={producto.stock}
                onAdd={onAdd}
                initial={totalQuantity}
              />
            )}
  
          {producto.stock === 0 && <h2>No hay stock</h2>}
  
          {typeof totalQuantity !== "undefined" &&
            totalQuantity === producto.stock && (
              <h2>tenes las maximas cantidades en el carrito</h2>
            )}
        </div>
  
        <ToastContainer />
      </div>
    );
  };

export default ItemDetail;
