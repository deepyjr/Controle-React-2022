import React, { useState, useEffect } from "react";
import TodoInput from "./TodoInput";

function TodoList() {
  //////////////////////////////////////////////////// VARIABLES //////////////////////////////////////////////////////

  const [todos, setTodos] = useState([]);
  const LOCAL_STORAGE_KEY = "Estiam-Todolist";
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

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

  //////////////////////////////////////////////////// RENDER //////////////////////////////////////////////////////
  return (
    <div className="todo-context">
      <h1>Voici les tâches que j'ai à faire aujourd'hui</h1>
      <TodoInput onSubmit={addTodo} />
      {edit.id ? (
        <TodoInput
          edit={edit}
          onSubmit={(value) => updateTodo(edit.id, value)}
        />
      ) : (
        todos.map((todo, index) => (
          <div key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
              {todo.text}
            </div>
            <div>
              <button onClick={() => removeTodo(todo.id)} />
              <button
                onClick={() => setEdit({ id: todo.id, value: todo.text })}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TodoList;
