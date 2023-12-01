import React from "react";

function Navbar() {
  // const { googleAuth } = AuthProvider();
  return (
    <div
      className={` flex items-center justify-between w-full drop-shadow-lg mt-5 text-[20px] bg-slate-50/25 p-5 rounded-lg`}
    >
      <a to={"/"}>
        <h1>To Do</h1>
      </a>
      <ul className=" hidden sm:flex justify-between items-center  gap-4  select-none">
        <li>Home </li>
        <li>To do</li>
        <li>Let's connect </li>
      </ul>
      <button>Login</button>
    </div>
  );
}

export default Navbar;
