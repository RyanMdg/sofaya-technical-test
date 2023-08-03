"use client";
import React, { useState, useRef } from "react";

export default function tecnicaltest() {
  const [isVisible, setIsVisible] = useState(true);

  // * TIMER

  const handleButton = () => {
    setIsVisible((showAgain) => !showAgain);
  };

  return (
    <div className="   h-screen text-center text-white">
      <header className="bg-[#282C34]">
        {/* Challenge 1: Make the paragraph button vanish on click */}
        <div className=" pt-10 ">
          {isVisible && (
            <h1 className=" font-bold text-5xl pb-10">1. Make this vanish</h1>
          )}
          <button
            onClick={handleButton}
            className=" text-sm rounded-sm border border-gray-500 bg-white px-2 text-black"
          >
            Click me!
          </button>
        </div>

        {/* Challenge 2: Make this timer work */}
        <div className=" pt-10 ">
          <h1 className=" font-bold text-5xl pb-10">2. Create a Basic Timer</h1>
          <span> mins </span>
          <span> secs</span>
          <div className="button2">
            <button className=" bg-[#008000] p-2 rounded-md text-black">
              Start
            </button>
            <button className=" bg-[#FF0000] p-2 rounded-md text-black">
              Stop
            </button>
            <button className=" bg-[#FFFF00] p-2 rounded-md text-black">
              Reset
            </button>
          </div>
        </div>

        {/* Challenge 3: Todo App */}
        <div className=" pt-10 ">
          <h1 className=" font-bold text-5xl pb-10">3. Add to a list</h1>
          <input />
          <button>Add Task</button>
        </div>

        {/* Challenge 4: Submit a form */}
        <div className=" pt-10 ">
          <h1 className=" font-bold text-5xl pb-10">4. Submit a form</h1>
          <form>
            <div>
              <label htmlFor="userName">
                Username:
                <input />
              </label>
            </div>
            <br />
            <div>
              <label htmlFor="fullName">
                FullName:
                <input />
              </label>
            </div>
            <br />
            <div>
              <label htmlFor="age">
                Age:
                <input />
              </label>
            </div>
            <br />
            <button>Submit</button>
            <h4>Request Sent to DB with below request data</h4>
            <ul>
              <li>UserName: </li>
              <li>FullName: </li>
              <li>Age: </li>
            </ul>
          </form>
        </div>
      </header>
    </div>
  );
}
