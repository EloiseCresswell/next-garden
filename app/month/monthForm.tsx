// components/MonthForm.tsx
"use client";
import { useState } from "react";

interface Task {
  _id: string;
  title: string;
  description?: string;
  month: string;
}

export default function MonthForm() {
  const [monthTasks, setMonthTasks] = useState<Task>();

  const onFormSubmit = async (formData: FormData) => {
    const chosenMonth = formData.get("month")?.toString() || "January";
    console.log("chosen", chosenMonth);
    const res = await fetch(`/api/month?month=${chosenMonth}`);
    console.log("res", res);
    const posts = await res.json();
    setMonthTasks(posts);
    console.log(monthTasks);
  };

  return (
    <div>
      <form action={onFormSubmit}>
        <select id="month" name="month">
          <option value="january">January</option>
          <option value="febraury">Feb</option>
          <option value="march">March</option>
          <option value="april">April</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
