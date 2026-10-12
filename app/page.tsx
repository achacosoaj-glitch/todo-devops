"use client";

import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-6 shadow">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">
          My ToDo App
        </h1>

        <div className="mb-6 flex gap-2">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task..."
            className="flex-1 rounded-lg border p-3"
          />

          <button
            onClick={addTask}
            className="rounded-lg bg-blue-600 px-5 py-3 text-white"
          >
            Add
          </button>
        </div>

        <div className="space-y-3">
          {tasks.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg bg-gray-100 p-4"
            >
              <span>{item}</span>

              <button
                onClick={() => deleteTask(index)}
                className="rounded bg-red-500 px-3 py-1 text-white"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}