import React, { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import styled, { keyframes } from "styled-components";
import { useSpring, animated } from "react-spring";

function TodoList(props) {
  
  //////////////////////////////////////////////////// VARIABLES //////////////////////////////////////////////////////
  const [animation] = useState(props.animation);
  const [todos, setTodos] = useState([]);
  const LOCAL_STORAGE_KEY = "Estiam-Todolist";
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  //////////////////////////////// ANIMATION NO CLASS //////////////////////////////////////////////
  const rotate = keyframes`from { transform: rotate(0deg);}to {transform: rotate(360deg);}`; 
  const InfiniteRoll = styled.div`
    animation: ${rotate} ${(time) => time.time}s linear infinite;
  `; 
  //////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////// ANIMATION LIBRARY ////////////////
  const styles = useSpring({
    loop: true, 
    to: [
      { opacity: 1, color: "#ffaaee" }, 
      { opacity: 0, color: "rgb(14,26,19)" }, 
    ], 
    from: { opacity: 0, color: "red" }, 
  }); 
  //////////////////////////////////////////////////////

  //////////////////////////////////////////////////// HOOKS //////////////////////////////////////////////////////

  // Load data from localstorage into todoList
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  // Save data to localstorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  //////////////////////////////////////////////////// FUNCTIONS //////////////////////////////////////////////////////

  /*
   * Add function
   * @param {string} todo
   * @returns {void}
   */
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  /*
   * Update function
   * @param {number} id
   * @param {string} newValue
   * @returns {void}
   */
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
    setEdit({
      id: null,
      value: "",
    });
  };

  /*
   * Remove function
   * @param {number} id
   * @ return {void}
   * */

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  /*
   * Complete function
   * @param {number} id
   * @ return {void}
   * */
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  /*
   * Gen number function
   * @ return Number
   * */
  const genNumber = () => {
    return Math.floor(Math.random() * 100) / 100;
  };

  //////////////////////////////////////////////////// RENDER //////////////////////////////////////////////////////
  return (
    <>
      <div className="todo-context">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {/* ANIMATION NO CLASS */}
          {animation === "no-class" &&
            Array.from(Array(30).keys()).map(() => {
              return (
                <InfiniteRoll time={genNumber().toString()}>
                  <p style={{ fontSize: "2em" }}>MY TODO LIST</p>
                </InfiniteRoll>
              );
            })}
        </div>
        {/* END ANIMATION NO CLASS */}

        <div>
          <h1>Voici les tâches que j'ai à faire aujourd'hui</h1>
          <TodoInput onSubmit={addTodo} />
          <div className="container-todo">
            {edit.id ? (
              <TodoInput
                className="todo-input"
                edit={edit}
                onSubmit={(value) => updateTodo(edit.id, value)}
              />
            ) : (
              todos.map((todo, index) => (
                // ANIMATION CLASS
                <div
                  className={
                    props.animation === "class"
                      ? "todo-item slide"
                      : "todo-item"
                  }
                  key={index}
                  // END ANIMATION CLASS
                >
                  {/* ANIMATION LIBRARY */}
                  <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {props.animation === "library" ? (
                      <animated.div style={styles}>{todo.text}</animated.div>
                    ) : (
                      todo.text
                    )}
                  </div>
                  {/* END ANIMATION LIBRARY */}
                  <div>
                    <button
                      className="btn-delete"
                      onClick={() => removeTodo(todo.id)}
                    >
                      {" "}
                      Supprimer{" "}
                    </button>
                    <button
                      className="btn-edit"
                      onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    >
                      {" "}
                      Editer
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {/* ANIMATION NO CLASS */}
          {animation === "no-class" &&
            Array.from(Array(30).keys()).map((i) => (
              <InfiniteRoll time={genNumber().toString()}>
                <p style={{ fontSize: "2em" }}>MY TODO LIST</p>
              </InfiniteRoll>
            ))}
          {/* END ANIMATION NO CLASS */}
        </div>
      </div>
    </>
  );
}

export default TodoList;
