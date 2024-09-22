import { useState } from "react";
import ItemsContainer from "./components/ItemsContainer";
import AddItemsContainer from "./components/addItemsContainer";
import "./App.css";

function App() {
  const [tarefas, setTarefa] = useState(["Lavar Roupa", "Ir ao mercado"]);

  const removerTarefa = (item) => {
    const newList = [...tarefas];
    const itemIndex = newList.indexOf(item);
    newList.splice(itemIndex, 1);
    setTarefa(newList);
    localStorage.setItem("tarefas", JSON.stringify(newList));
  };

  const adicionarTarefa = (item) => {
    // const newList = [...tarefas];
    // newList.push(item);
    // setTarefa(newList);

    setTarefa([...tarefas, item]);
  };

  return (
    <div>
      <h1>Minha Lista de Tarefas do dia</h1>
      <AddItemsContainer adicionarTarefa={adicionarTarefa} />
      <ItemsContainer taskList={tarefas} removerTarefa={removerTarefa} />
    </div>
  );
}

export default App;
