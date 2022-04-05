import React, { useState }from "react";
import "./PageFramework.css";
import TodoList from "../../Components/TodoList/Todolist";

function PageFramework() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <h2>Page Framework</h2>
      <TodoList />
      <button onClick={() => setChecked(!checked)}>Fade</button>
    </div>
  );
}

export default PageFramework;
