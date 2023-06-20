import { useState } from "react";
import {Navbar} from "../src/components/layout/Navbar";
import { ItemList } from "./components/pages/ItemList/ItemList";

function App() {

  const [saludo , setSaludo] = useState("")

  const mostrarSaludo = ()=>{
    setSaludo("Bienvenido a la tienda")
  }



  return (
    <div>
      <Navbar />
      <ItemList saludo={saludo} mostrarSaludo={mostrarSaludo} />
    </div>
  )
}

export default App
