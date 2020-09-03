import React from "react";

export default function List() {
  const [tasks, setTasks] = useState([
    { newTask: "Estudar React", owner: "Luigi", simpleId: "testeUm1010" },
  ]);

  return (
    <ul>
      {tasks.map((eachTask) => (
        <li key={eachTask.simpleId}>
          <b>{eachTask.owner}: </b>
          {eachTask.newTask}
        </li>
      ))}
    </ul>
  );
}
