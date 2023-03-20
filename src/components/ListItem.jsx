import { useState } from "react";
import "./listItem.css"

function ListItem({tarefa, removerTarefa}) {

    const [finalizado, setFinalizado] = useState(tarefa.finalizado)

    function finalizarTarefa(evento){
        evento.preventDefault()

        // se estiver falso vai se tornar verdadeiro e se verdadeiro vai ficar falso
        setFinalizado(!finalizado)
    }

    function handleRemoverTarefa(evento){
        evento.preventDefault()

        // vai chamar o método remover tarefa que está sendo passado como prop no app.jsx
        removerTarefa(tarefa)
    }

    return ( 
        <li key={tarefa.id} className={finalizado ? 'list-item finalizado' : 'list-item'}>
            {tarefa.texto}
            <button className="list-item-button" onClick={finalizarTarefa}>finalizar</button>
            <button className="list-item-button" onClick={handleRemoverTarefa}>remover</button>
        </li>
     );
}

export default ListItem;