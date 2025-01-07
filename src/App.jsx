import { useState } from "react";
import AddTask from "./componets/AddTask";
import Tasks from "./componets/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description:
        "Estudar programação para se tornar um programador full stack",
      iscompleted: false,
    },
    {
      id: 1,
      title: "Estudar Matematica",
      description:
        "Estudar programação para se tornar um programador full stack",
      iscompleted: false,
    },
    {
      id: 1,
      title: "Estudar Ingles",
      description:
        "Estudar programação para se tornar um programador full stack",
      iscompleted: false,
    },
  ]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-300 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}
export default App;
