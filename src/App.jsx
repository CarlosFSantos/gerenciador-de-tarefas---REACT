import { useEffect, useState } from "react";
import AddTask from "./componets/AddTask";
import Tasks from "./componets/Tasks";
import Title from "./componets/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  /*
  // API so sera usada a primeira vez que o usuario interagir
  useEffect(() => {
    // Chamar API
    const fetchTasks = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        { method: "GET" }
      );
      // Pegar os dados que ela retorna
      const data = await response.json();
      // Armazenar/Persistir esses dados no State
      setTasks(data);
    };
    fetchTasks();
  }, []); */

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
        <Title>Gerenciador de Tarefas</Title>
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
