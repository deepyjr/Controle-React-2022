import React, { useState }from "react";
import "./PageFramework.css";
import TodoList from "../../Components/TodoList/Todolist";
import Fade from '@mui/material/Fade';

function PageFramework() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <h2>Page Framework</h2>
      <TodoList />
      <Fade in={checked}><p>J'apparais et je disparais</p></Fade>
      <button onClick={() => setChecked(!checked)}>Fade</button>
    </div>
  );
}

export default PageFramework;
