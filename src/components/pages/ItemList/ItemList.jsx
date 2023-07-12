
import "./ItemList.css"

export const ItemList = ( {saludo, mostrarSaludo} ) => {

    return (
        <div>
            <h2> {saludo} </h2>
            <button onClick={mostrarSaludo}>Mostrar saludo</button>
        </div>
    )
}
