import React from "react";
import Form from "./components/Form";
import Search from "./components/Search";
import Tasks from "./components/Tasks";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const addTask = () => {
    if (editId) {
      setTaskList(
        taskList.map((item) => (item.id === editId ? { ...item, task } : item)),
      );
      setTask("");
      setEditId(null);
      return;
    }

    if (task.trim()) {
      setTaskList((prev) => [...prev, { id: uuidv4(), task, done: false }]);
      setTask("");
    }
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const edit = (task) => {
    setEditId(task.id);
    setTask(task.task);
  };

  const toggleDone = (id) => {
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  };

  const doneCount = taskList.filter((t) => t.done).length;
  const totalCount = taskList.length;

  return (
    <div className="min-h-screen bg-[#0f0f13] flex items-start justify-center px-3 sm:px-4 py-8 sm:py-14">
      <div className="w-full max-w-md sm:max-w-lg flex flex-col gap-5">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1 mb-4">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse inline-block"></span>
            <span className="text-violet-300 text-xs font-semibold tracking-widest uppercase">
              Zenith
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              Focus
            </span>{" "}
            Board
          </h1>

          <p className="text-slate-500 text-sm mt-2">
            Clear mind. Sharp execution.
          </p>

          {totalCount > 0 && (
            <div className="mt-5 px-1">
              <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                <span>
                  {doneCount} of {totalCount} completed
                </span>
                <span>{Math.round((doneCount / totalCount) * 100)}%</span>
              </div>

              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full transition-all duration-500"
                  style={{ width: `${(doneCount / totalCount) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>

        <Form task={task} setTask={setTask} addTask={addTask} editId={editId} />

        <Search search={search} setSearch={setSearch} />

        <Tasks
          taskList={taskList}
          setTaskList={setTaskList}
          search={search}
          deleteTask={deleteTask}
          edit={edit}
          toggleDone={toggleDone}
        />
      </div>
    </div>
  );
};

export default App;
