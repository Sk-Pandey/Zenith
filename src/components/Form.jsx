import React from "react";

const Form = ({ task, setTask, addTask, editId }) => {
  return (
    <div className="bg-[#1a1a24] border border-white/5 rounded-2xl p-5 shadow-xl">
      <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-violet-400 mb-3">
        {editId ? "✦ Editing task" : "✦ New task "}
      </p>
      <div className="flex gap-2.5">
        <input
          type="text"
          className="flex-1 bg-[#0f0f13] border border-white/10 text-white placeholder-slate-600 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-all"
          placeholder="What needs to get done?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTask();
          }}
        />
        <button
          onClick={addTask}
          className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
            editId
              ? "bg-amber-500/90 hover:bg-amber-400 text-black"
              : "bg-gradient-to-br from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white shadow-lg shadow-violet-900/40"
          }`}
        >
          {editId ? "Update" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default Form;
