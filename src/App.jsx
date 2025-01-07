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
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Matematica",
      description:
        "Estudar programação para se tornar um programador full stack",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Ingles",
      description:
        "Estudar programação para se tornar um programador full stack",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // Preciso atualizar essa task
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      // Nao preciso
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskID) {
    const newTasks = tasks.filter((task) => task.id != taskID);
    setTasks(newTasks);
  }

  function onAddTask(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center gap-3">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-300 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTask={onAddTask} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}
export default App;
