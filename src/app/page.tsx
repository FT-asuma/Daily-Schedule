"use client";
import { useState, useEffect, useRef } from "react";
import { dailyTasks, Task } from "@/constant/dailyRoutine";
import { getPrayerTimes } from "@/utils/getPrayerTimes";
import { IPrayerTimes } from "@/interface";

const Home = () => {
  // Get today's date to set default day
  const today = new Date().toLocaleString("en-US", { weekday: "long" });

  const [selectedDay, setSelectedDay] = useState<string>(today);
  const [tasks, setTasks] = useState<Task[]>(dailyTasks[selectedDay]);
  const [prayerTimes, setPrayerTimes] = useState<IPrayerTimes | null>(null);
  const [currentTime, setCurrentTime] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<string>(() =>
    new Date().toDateString()
  );

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // console.log(tasks, dailyTasks[selectedDay])

  const prevTasksRef = useRef<Task[]>(tasks); // Reference to hold the previous tasks

  // Fetch Prayer Times for a specific day
  const fetchPrayerTimes = async () => {
    const timings = await getPrayerTimes(timeZone.split("/")[1]); // Fetch timings dynamically
    setPrayerTimes(timings);
  };

  useEffect(() => {
    // Fetch prayer times on component mount
    if (timeZone.length) fetchPrayerTimes();

    // Set up a daily timer to refresh prayer times at midnight
    const now = new Date();
    const millisUntilMidnight =
      new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime() -
      now.getTime();

    const midnightTimer = setTimeout(() => {
      setCurrentDate(new Date().toDateString()); // Trigger day change
    }, millisUntilMidnight);

    return () => clearTimeout(midnightTimer); // Cleanup timer
  }, []);

  useEffect(() => {
    // Fetch updated prayer times whenever the day changes
    fetchPrayerTimes();
  }, [currentDate]);

  // Handle Day Change
  const handleDayChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const day = event.target.value;
    setSelectedDay(day);
    console.log(day);
    markYesterdayTasksUndone(); // Reset yesterday's tasks

    // Fetch updated prayer times for the new day
    await fetchPrayerTimes();
  };

  // Handle Task Done/Undone Toggle
  const toggleTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  useEffect(() => {
    setTasks(dailyTasks[selectedDay]);
  }, [selectedDay]);

  // Check tasks based on current time
  useEffect(() => {
    const checkTasks = () => {
      const current = new Date();
      const date = current.getDate().toString().padStart(2, "0"); // Ensures two digits
      const month = (current.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
      const year = current.getFullYear();
      const today = current.getDay(); // Index of today's day (0-6)

      // Correct date format for comparison
      const dateMonthYear = `${date}-${month}-${year}`;
      setCurrentTime(dateMonthYear);
      // Get time in HH:MM format
      const hours = current.getHours().toString().padStart(2, "0");
      const minutes = current.getMinutes().toString().padStart(2, "0");
      const time = `${hours}:${minutes}`;

      const updatedTasks = tasks.map((task) => {
        const taskTime = task.time;

        // Compare task time and mark as disabled if the time has passed

        // Compare today with selectedDay
        console.log(today === Object.keys(dailyTasks).indexOf(selectedDay) + 1);
        if (today > Object.keys(dailyTasks).indexOf(selectedDay) + 1) {
          return { ...task, done: task.done, disabled: true };
        }

        if (today === Object.keys(dailyTasks).indexOf(selectedDay) + 1) {
          if (Number(hours) > Number(taskTime.split(":")[0])) {
            return { ...task, done: task.done, disabled: true };
          }
        }

        return task;
      });

      // Update tasks only if there is a change
      if (
        JSON.stringify(updatedTasks) !== JSON.stringify(prevTasksRef.current)
      ) {
        setTasks(updatedTasks);
        prevTasksRef.current = updatedTasks;
      }
    };

    if (selectedDay) {
      checkTasks();
      console.log("Selected day changed, tasks checked");
    }
  }, [selectedDay, tasks, dailyTasks]); // Ensure tasks and dailyTasks are also tracked

  useEffect(() => {
    const today = new Date().getDay();
  }, [selectedDay]);

  // Mark tasks of the previous day as undone
  const markYesterdayTasksUndone = () => {
    const updatedTasks = tasks.map((task) => ({
      ...task,
      done: false,
      disabled: false,
    }));
    setTasks(updatedTasks);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-semibold text-center text-blue-600 mb-6">
        My Daily Schedule
      </h1>

      {/* Prayer Times Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-center text-blue-600">
          {currentTime} Prayer Times (Tashkent)
        </h2>
        <br />
        {prayerTimes ? (
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(prayerTimes).map(([prayer, time]) => (
              <div
                key={prayer}
                className="flex justify-between p-3 bg-white rounded-lg shadow-md"
              >
                <span className="font-medium text-gray-700">{prayer}</span>
                <span className="text-gray-500">{time}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Loading prayer times...</p>
        )}
      </div>

      {/* Day Selector */}
      <div className="flex justify-center mb-6">
        <label htmlFor="days" className="mr-2 font-medium text-lg">
          Select Day:{" "}
        </label>
        <select
          id="days"
          onChange={handleDayChange}
          value={selectedDay}
          className="px-4 py-2 border rounded-md shadow-md bg-white"
        >
          {Object.keys(dailyTasks).map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>

      {/* Task List */}
      <ul className="space-y-4">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex justify-between items-center p-3 rounded-lg shadow-md ${
              task.done ? "bg-green-100" : "bg-white"
            } ${task.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <span
              className={`flex-1 text-lg ${
                task.done ? "line-through text-gray-500" : ""
              }`}
            >
              {task.time} - {task.task}
            </span>
            <button
              onClick={() => toggleTask(index)}
              disabled={task.disabled} // Disable button for past tasks
              className={`px-4 py-2 rounded-lg text-white ${
                task.done
                  ? "bg-green-500"
                  : task.disabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {task.done ? "Done" : "Undone"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
