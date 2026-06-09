import React from "react";

const Tasks = ({
  taskList,
  setTaskList,
  search,
  deleteTask,
  edit,
  toggleDone,
}) => {
  const filtered = taskList.filter((task) =>
    task.task.toLowerCase().includes(search.toLowerCase()),
  );

  if (taskList.length === 0) {
    return (
      <div className="text-center py-14 flex flex-col items-center gap-3">
        <div className="w-14 h-14 rounded-2xl bg-[#1a1a24] border border-white/5 flex items-center justify-center text-2xl">
          📋
        </div>
        <p className="text-slate-600 text-sm">No tasks yet — add one above.</p>
      </div>
    );
  }

  if (filtered.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-slate-600 text-sm">No tasks match your search.</p>
      </div>
    );
  }

  return (
    <div className="max-h-72 overflow-y-auto flex flex-col gap-2.5 pr-1 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
      {filtered.map((task) => (
        <div
          key={task.id}
          className={`group flex items-center justify-between gap-3 rounded-xl px-4 py-3 border transition-all duration-300 ${
            task.done
              ? "bg-[#141418] border-white/[0.03]"
              : "bg-[#1a1a24] border-white/[0.06] hover:border-violet-500/30"
          }`}
        >
          {/* Checkbox + label */}
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => toggleDone(task.id)}
              className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                task.done
                  ? "bg-gradient-to-br from-violet-500 to-fuchsia-500 border-transparent shadow-md shadow-violet-900/40"
                  : "border-slate-600 hover:border-violet-400"
              }`}
              aria-label={task.done ? "Mark incomplete" : "Mark complete"}
            >
              {task.done && (
                <svg
                  className="w-2.5 h-2.5 text-white"
                  fill="none"
                  viewBox="0 0 10 8"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 4l3 3 5-6" />
                </svg>
              )}
            </button>

            <span
              className={`text-sm leading-snug truncate transition-all duration-300 ${
                task.done ? "line-through text-slate-600" : "text-slate-200"
              }`}
            >
              {task.task}
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {!task.done && (
              <button
                onClick={() => edit(task)}
                className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-800 text-slate-400 hover:bg-violet-600/80 hover:text-white transition-all"
              >
                Edit
              </button>
            )}
            <button
              onClick={() => deleteTask(task.id)}
              className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-800 text-slate-400 hover:bg-rose-600/80 hover:text-white transition-all"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
