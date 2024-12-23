export interface Task {
  task: string;
  time: string;
  done: boolean;
  disabled?: boolean; // Added for disabling tasks
}

export const dailyTasks: Record<string, Task[]> = {
  Monday: [
    { time: "07:00", task: "Wake 1up & morning routine", done: false },
    { time: "07:30", task: "Korean Practice (30 minutes)", done: false },
    {
      time: "08:00",
      task: "Front-End Development Study (1 hour)",
      done: false,
    },
    { time: "09:00", task: "Work on Personal Projects (2 hours)", done: false },
    { time: "11:00", task: "Break & Prayer (Dhuhr)", done: false },
    { time: "12:00", task: "University Application (1 hour)", done: false },
    { time: "13:00", task: "Lunch & Prayer (Asr)", done: false },
    { time: "14:00", task: "Game Development (1 hour)", done: false },
    { time: "15:00", task: "Korean Practice (30 minutes)", done: false },
    { time: "16:00", task: "Free Time / Exercise (1 hour)", done: false },
    { time: "18:00", task: "Dinner & Prayer (Maghrib)", done: false },
    { time: "19:00", task: "Korean Practice (30 minutes)", done: false },
    {
      time: "20:00",
      task: "Reflection & Plan Tomorrow (30 minutes)",
      done: false,
    },
    { time: "21:00", task: "Relax & Free Time", done: false },
    { time: "22:00", task: "Prayer (Isha)", done: false },
  ],
  Tuesday: [
    { time: "07:00", task: "Morning 2prayer & meditation", done: false },
    { time: "07:30", task: "Study JavaScript (1 hour)", done: false },
    { time: "08:30", task: "Korean Practice (30 minutes)", done: false },
    { time: "09:00", task: "Work on freelance project", done: false },
    { time: "12:00", task: "Lunch & Prayer (Dhuhr)", done: false },
    { time: "13:00", task: "Reading (30 minutes)", done: false },
    { time: "15:00", task: "Afternoon walk", done: false },
    { time: "17:00", task: "Work on personal project (1 hour)", done: false },
    { time: "18:00", task: "Dinner & Prayer (Maghrib)", done: false },
    { time: "20:00", task: "Relax & unwind", done: false },
    { time: "21:00", task: "Prayer (Isha)", done: false },
  ],
  Wednesday: [
    { time: "07:00", task: "Wake3 up & morning routine", done: false },
    { time: "07:30", task: "Korean Practice (30 minutes)", done: false },
    { time: "08:00", task: "Review React concepts (1 hour)", done: false },
    {
      time: "09:00",
      task: "Work on Game Development (1.5 hours)",
      done: false,
    },
    { time: "11:00", task: "Break & Prayer (Dhuhr)", done: false },
    { time: "12:00", task: "Frontend Project (1 hour)", done: false },
    { time: "13:00", task: "Lunch & Prayer (Asr)", done: false },
    { time: "14:00", task: "Study Next.js (1 hour)", done: false },
    { time: "15:00", task: "Korean Practice (30 minutes)", done: false },
    { time: "16:00", task: "Free Time / Exercise (1 hour)", done: false },
    { time: "18:00", task: "Dinner & Prayer (Maghrib)", done: false },
    { time: "19:00", task: "Work on personal website (1 hour)", done: false },
    { time: "20:00", task: "Relax & Free Time", done: false },
    { time: "22:00", task: "Prayer (Isha)", done: false },
  ],
  Thursday: [
    { time: "07:00", task: "Wake4 up & morning routine", done: false },
    { time: "07:30", task: "Korean Practice (30 minutes)", done: false },
    { time: "08:00", task: "Learn Tailwind CSS (1 hour)", done: false },
    { time: "09:00", task: "Improve game logic (1.5 hours)", done: false },
    { time: "11:00", task: "Break & Prayer (Dhuhr)", done: false },
    { time: "12:00", task: "Work on UI Design (1 hour)", done: false },
    { time: "13:00", task: "Lunch & Prayer (Asr)", done: false },
    {
      time: "14:00",
      task: "Study TypeScript advanced features (1 hour)",
      done: false,
    },
    { time: "15:00", task: "Korean Practice (30 minutes)", done: false },
    { time: "16:00", task: "Free Time / Exercise (1 hour)", done: false },
    { time: "18:00", task: "Dinner & Prayer (Maghrib)", done: false },
    { time: "19:00", task: "Work on documentation (1 hour)", done: false },
    { time: "20:00", task: "Plan next week’s goals", done: false },
    { time: "22:00", task: "Prayer (Isha)", done: false },
  ],
  Friday: [
    { time: "07:00", task: "Wake 5up & morning routine", done: false },
    { time: "07:30", task: "Korean Practice (30 minutes)", done: false },
    { time: "08:00", task: "Debug Next.js app (1 hour)", done: false },
    { time: "09:00", task: "Study game algorithms (1.5 hours)", done: false },
    { time: "11:00", task: "Break & Prayer (Jumu'ah)", done: false },
    { time: "12:30", task: "Lunch & personal reading", done: false },
    { time: "14:00", task: "Write blog post about React", done: false },
    { time: "15:00", task: "Korean Practice (30 minutes)", done: false },
    { time: "16:00", task: "Explore new frameworks", done: false },
    { time: "18:00", task: "Dinner & Prayer (Maghrib)", done: false },
    { time: "19:00", task: "Online coding challenges", done: false },
    { time: "20:00", task: "Relax & entertainment", done: false },
    { time: "22:00", task: "Prayer (Isha)", done: false },
  ],
  Saturday: [
    { time: "07:00", task: "Wake6 up & morning routine", done: false },
    { time: "07:30", task: "Korean Practice (30 minutes)", done: false },
    { time: "08:00", task: "Experiment with animations", done: false },
    {
      time: "09:00",
      task: "Study advanced React patterns (1.5 hours)",
      done: false,
    },
    { time: "11:00", task: "Break & Prayer (Dhuhr)", done: false },
    { time: "12:00", task: "Collaborate with teammates", done: false },
    { time: "13:00", task: "Lunch & Prayer (Asr)", done: false },
    { time: "14:00", task: "Game Development (2 hours)", done: false },
    { time: "16:00", task: "Free Time / Exercise (1 hour)", done: false },
    { time: "18:00", task: "Dinner & Prayer (Maghrib)", done: false },
    { time: "19:00", task: "Weekend review & notes", done: false },
    { time: "20:00", task: "Relax & family time", done: false },
    { time: "22:00", task: "Prayer (Isha)", done: false },
  ],
  Sunday: [
    { time: "07:00", task: "Wake7 up & morning routine", done: false },
    { time: "07:30", task: "Korean Practice (30 minutes)", done: false },
    { time: "08:00", task: "Learn about AI tools", done: false },
    { time: "09:00", task: "Explore Tailwind CSS utilities", done: false },
    { time: "11:00", task: "Break & Prayer (Dhuhr)", done: false },
    { time: "12:00", task: "Build a small project (1 hour)", done: false },
    { time: "13:00", task: "Lunch & Prayer (Asr)", done: false },
    { time: "14:00", task: "Prepare for next week", done: false },
    { time: "15:00", task: "Korean Practice (30 minutes)", done: false },
    { time: "16:00", task: "Free Time / Exercise (1 hour)", done: false },
    { time: "18:00", task: "Dinner & Prayer (Maghrib)", done: false },
    { time: "19:00", task: "Reflect & refine skills", done: false },
    { time: "20:00", task: "Relax & unwind", done: false },
    { time: "22:00", task: "Prayer (Isha)", done: false },
  ],
};
