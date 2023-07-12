// import { useEffect, useState } from "react"
import { ItemList } from "./ItemList";
import { products } from "../../../productsMock";

export const itemListContainer = () => {

  // const [items, setItems] = useState([]);
  const tarea = new Promise((resolve, reject) => {
    resolve(products)
  });

  tarea
  .then((respuesta) => console.log(respuesta))
  .catch((error) => console.log(error))

  // useEffect(() => {
  //   console.log("Pedimos datos a la API")
  // }, []);

  return <ItemList />;
}
