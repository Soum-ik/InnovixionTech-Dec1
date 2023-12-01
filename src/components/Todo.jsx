// ... (existing imports)
import { TfiWrite } from "react-icons/tfi";
import { FaAppleAlt, FaRegCircle } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import React, { useState, useEffect } from "react";
import styles from "../style/style";
// import TaskAdd from "./TaskAdd";

function Todo() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [isClick, setIsClick] = useState(false);

  function addList() {
    if (!text) {
      alert("Fill your form");
    } else {
      setItems([...items, text]);
      setText("");
    }
  }

  function deleteList(id) {
    const latestList = items.filter((item, index) => {
      return index !== id;
    });
    setItems(latestList);
  }

  function clearTask() {
    setItems([]);
  }

  function isComplete() {
    setIsClick(!isClick);
    alert("Your task task is complete");
  }

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
              placeholder="add your task"
              onChange={(e) => setText(e.target.value)}
              className=" outline-none rounded-md bg-slate-200/50 px-3 py-2 w-full"
            />
            <IoMdAddCircleOutline onClick={addList} size={33} />
          </div>
          <div className="mt-3 flex items-center justify-between text-[14px] cursor-pointer font-medium">
            <p>Complete All Tasks</p>
            <p onClick={clearTask}>Clear all task</p>
          </div>

          {/* className=" hover:bg-yellow-500 rounded-full" */}

          {/*dynamic section   */}
          <div className=" mt-4">
            {items.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-between p-2"
                >
                  <p
                    className={
                      isClick
                        ? `flex items-center justify-center line-through`
                        : `flex items-center justify-center text-red-600`
                    }
                  >
                    <FaRegCircle className="mr-4" onClick={isComplete} />

                    {item}
                  </p>
                  <div className="flex gap-3">
                    {/* <FaRegCircle
                      className="rounded-full active:bg-green-700"
                      color="green"
                    />
                    <FaRegCircle
                      className="rounded-full active:bg-yellow-700"
                      color="yellow"
                    /> */}
                    <FaRegCircle
                      className="rounded-full active:bg-red-700"
                      color="red"
                      onClick={() => deleteList(index)}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between text-[14px] mt-5">
            <h1>
              {items.length} task{items.length !== 1 ? "s" : ""} left
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
