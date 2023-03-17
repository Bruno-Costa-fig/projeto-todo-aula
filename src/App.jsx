import { useState } from 'react'
import './App.css'

function App() {
  const [listaDeTarefas, setListaDeTarefas] = useState([
    {id: 1, texto: "Tarefa 1", finalizado: false}
  ])

  return (
    <div className="App">
      {
        listaDeTarefas.map(tarefa => (
          <li key={tarefa.id}>{tarefa.texto}</li>
        ))
      }
    </div>
  )
}

export default App
