  import { useState } from "react";

function ListaDeTarefas() {
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefas] = useState('');

    const adicionarTarefa = () => {
        if(novaTarefa.trim()  !== '') {
            setTarefas([...tarefas, novaTarefa]);
            setNovaTarefas('');
        }
    };

    const  removerTarefa = (index) => {
        const novasTarefas = [...tarefas];
        novasTarefas.splice(index, 1)
        setTarefas(novasTarefas)
    }


    return(

        <div>
            <h2>Lista de Tarefas</h2>
            <input type="text" value={novaTarefa} onChange={(e) => setNovaTarefas(e.target.value)}
            placeholder="Digite uma tarefa"/>
            <button  onClick={adicionarTarefa}>Adicionar</button>
            <ol>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>
                        {tarefa}{''}
                        <button onClick={() => removerTarefa(index)}>Remover</button>
                    </li>
                    ))}
            </ol>
        </div>
    )
}

export  default ListaDeTarefas;

