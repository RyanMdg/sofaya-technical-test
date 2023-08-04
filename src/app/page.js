"use client";
import React, { useState, useRef } from "react";

export default function tecnicaltest() {
  // * Vanish
  const [isVisible, setIsVisible] = useState(true);

  // * TIMER
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });
  const intervalRef = useRef(null);

  // *Add Task
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // *Submit Form
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [showResult, setShowResult] = useState(false);

  // * Vanish
  const handleButton = () => {
    setIsVisible((showAgain) => !showAgain);
  };

  // * TIMER
  const startTimer = () => {
    intervalRef.current = setInterval(updateTime, 1000);
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTime({ minutes: 0, seconds: 0 });
  };

  const updateTime = () => {
    if (time.seconds === 59) {
      setTime((prevTime) => ({
        minutes: prevTime.minutes + 1,
        seconds: 0,
      }));
    } else {
      setTime((prevTime) => ({
        ...prevTime,
        seconds: prevTime.seconds + 1,
      }));
    }
  };

  // * ADDING TASK
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  // *Submit Form
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowResult(true);
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
          <span className=" text-xl">{time.minutes} mins </span>
          <span className=" text-xl">{time.seconds} secs</span>
          <div className="button2">
            <button
              onClick={startTimer}
              className=" duration-200 hover:bg-gray-600 bg-[#008000] p-2 rounded-md text-black"
            >
              Start
            </button>
            <button
              onClick={pauseTimer}
              className=" duration-200 hover:bg-gray-600 bg-[#FF0000] p-2 rounded-md text-black"
            >
              Stop
            </button>

            <button
              onClick={resetTimer}
              className=" duration-200 hover:bg-gray-600 bg-[#FFFF00] p-2 rounded-md text-black"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Challenge 3: Todo App */}
        <div className=" pt-10 ">
          <h1 className=" font-bold text-5xl pb-10">3. Add to a list</h1>
          <input
            className=" text-black"
            value={newTask}
            onChange={handleInputChange}
          />
          <button
            onClick={handleAddTask}
            className=" text-sm rounded-sm border border-gray-500 bg-white px-2 text-black py-[.1rem]"
          >
            Add Task
          </button>
          <div className="pt-4 text-2xl">
            {tasks.map((task, index) => (
              <div key={index}>{task}</div>
            ))}
          </div>
        </div>

        {/* Challenge 4: Submit a form */}
        <div className="pt-10">
          <h1 className="font-bold text-5xl pb-10">4. Submit a form</h1>
          <form onSubmit={handleSubmit}>
            <div className="pb-3">
              <label htmlFor="userName">
                Username:
                <input
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className=" text-black"
                />
              </label>
            </div>
            <br />
            <div className="pb-3">
              <label htmlFor="fullName">
                FullName:
                <input
                  className=" text-black"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </label>
            </div>
            <br />
            <div className="pb-3">
              <label htmlFor="age">
                Age:
                <input
                  className=" text-black"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </label>
            </div>
            <br />
            <button
              className="text-sm rounded-sm border border-gray-500 bg-white px-2 text-black"
              type="submit"
            >
              Submit
            </button>
            {showResult && (
              <div className="result">
                <h4 className="font-bold text-xl pb-1 pt-5">
                  Request Sent to DB with below request data
                </h4>
                <ul>
                  <li>UserName: {userName}</li>
                  <li>FullName: {fullName}</li>
                  <li>Age: {age}</li>
                </ul>
              </div>
            )}
          </form>
        </div>
      </header>
    </div>
  );
}
