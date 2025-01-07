import { useState } from "react";

function AddTask({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        className="px-4 py-2 rounded-md border border-slate-300 outline-slate-400"
        type="text"
        placeholder="Nome da Tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        className="px-4 py-2 rounded-md border border-slate-300 outline-slate-400"
        type="text"
        placeholder="Descrição"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        className="bg-slate-400 rounded-md font-medium text-white px-4 py-2"
        onClick={() => {
          // verificar
          if (!title.trim() || !description.trim()) {
            return alert("Preencha os Dados Solicitados!!!");
          }
          onAddTask(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
