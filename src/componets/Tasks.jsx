function Tasks(props) {
  console.log(props);
  return (
    <ul className="space-y-4 bg-slate-200 p-6 shadow rounded-md">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button className="bg-slate-400 w-full text-white p-2 rounded-md text-left">
            {task.title}
          </button>
          <button className="bg-slate-400 rounded-md p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
