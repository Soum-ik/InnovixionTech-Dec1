import { TfiWrite } from "react-icons/tfi";
import { FaRegCircle } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import React, { useState, useEffect } from "react";
import styles from "../style/style";
// import TaskAdd from "./TaskAdd";

function Todo() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  function addList() {
    if (text.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, text]);
      setText(""); // Clear input after adding task
    }
  }

  function clearList() {
    setTasks([]);
  }
  console.log(text);
  return (
    <div className={`${styles.marginX}`}>
      <div className={`${styles.paddingY} ${styles.flexCenter}`}>
        <div className="  min-w-[500px] border p-5 bg-slate-100/25 rounded-md">
          {/* input tag */}
          <div className="border rounded-md flex items-center group bg-slate-200/50 justify-center w-full px-3 py-3 gap-2">
            <TfiWrite size={30} />
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className=" outline-none rounded-md bg-slate-200/50 px-3 py-2 w-full"
            />
            <IoMdAddCircleOutline onClick={addList} size={33} />
          </div>
          <div className="mt-3 flex items-center justify-between text-[14px] cursor-pointer font-medium">
            <p onClick={clearList}>Complete All Tasks</p>
            <p onClick={clearList}>Clear all task</p>
          </div>

          {/* className=" hover:bg-yellow-500 rounded-full" */}

          {/*dynamic section   */}
          <div className=" mt-4">
            <div className="flex items-center justify-between">
              <p className="flex items-center justify-center">
                <FaRegCircle className="mr-4" />
                {text}
              </p>
              <div className="flex gap-3">
                <FaRegCircle
                  className="rounded-full active:bg-green-700"
                  color="green"
                />
                <FaRegCircle
                  className="rounded-full active:bg-yellow-700"
                  color="yellow"
                />
                <FaRegCircle
                  className="rounded-full active:bg-red-700"
                  color="red"
                />
              </div>
            </div>
          </div>

          {/* instuction section */}
          <div className="flex items-center justify-between text-[14px] mt-5">
            <h1>
              {tasks.length} task{tasks.length !== 1 ? "s" : ""} left
            </h1>
            <div className="flex items-center justify-center gap-4">
              <h1>All | Incomplete | Complete</h1>
              <div className="flex gap-1">
                <FaRegCircle color="green" />
                <FaRegCircle color="red" />
                <FaRegCircle color="yellow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
