import React, { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();

    // prevent empty notes
    if (title.trim() === "" && details.trim() === "") return;

    const copyTask = [...task];

    copyTask.push({ title, details });

    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const deleteNote = (idx) => {
    const copyTask = [...task];
    console.log(copyTask[idx]);
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="h-screen lg:flex bg-zinc-900 text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col lg:w-1/2 items-start gap-5 p-10"
      >
        <h1 className="text-4xl font-semibold">Add Notes</h1>

        {/* INPUT FOR HEADING */}
        <input
          type="text"
          placeholder="Enter task heading..."
          className="px-5 py-2 border-2 rounded w-full outline-none font-medium"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/* INPUT FOR DETAILS */}
        <textarea
          placeholder="Enter task details..."
          name=""
          className="px-5 py-2 border-2 rounded w-full h-20 outline-none font-medium"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        {/* ADD NOTE BUTTON */}
        <button className="bg-white active:bg-amber-300 text-zinc-900 px-5 py-2 rounded w-full outline-none font-medium">
          Add Note
        </button>
      </form>

      {/* DISPLAY RECENT NOTES */}
      <div className=" lg:w-1/2 p-10 lg:border-l-2">
        <h1 className="text-4xl font-semibold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start mt-5 gap-8 overflow-auto h-[90%]">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col justify-between items-start relative h-52 w-40 rounded-2xl bg-cover text-zinc-900 py-8 px-6 bg-[url('https://static.vecteezy.com/system/resources/previews/010/793/873/non_2x/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')]"
              >
                <div>
                  <h2 className="absolute top-5 right-1 p-1 rounded-full bg-red-600">
                    <X size={16} color="#fafafa" strokeWidth={3} />
                  </h2>
                  <h3 className="leading-tight text-2xl font-extrabold text-fuchsia-700">
                    {elem.title}
                  </h3>
                  <p className="leading-tight mt-2 text-gray-400">
                    {elem.details}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="w-full bg-red-600 text-white rounded-lg p-1 cursor-pointer active:scale-95"
                >
                  Delete
                </button>
              </div>
            );
          })}

          {/* <div className="h-52 w-40 rounded-2xl bg-white text-zinc-900"></div> */}
        </div>
      </div>
    </div>
  );
};

export default App;
