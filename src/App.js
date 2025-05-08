import React, { useState } from 'react';
import './App.css';
import { TableFuction } from './components/TableFuction';
import AddTodoItem from './components/AddTodoItem';

function App() {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Brush Teeth", rowAssigned: "Mkhatshwa" },

    { rowNumber: 2, rowDescription: "Take shower", rowAssigned: "Ndwandwe" },

    { rowNumber: 3, rowDescription: "Drink Coffee", rowAssigned: "Nxumalo" },
  ]);

  const addTodo = (theDescription, theAssigned, isAdd) => {
    let theRowNumber = 1;

    if (todos.length > 0) {
      theRowNumber = todos[todos.length - 1].rowNumber + 1;
    }

    const newTodo = {
      rowNumber: theRowNumber,
      rowDescription: theDescription,
      rowAssigned: theAssigned
    };

    setTodos(existingTodos => [...existingTodos, newTodo]);
    setShowAddTodoForm(isAdd);

  };

  const deleteTodo = (deleteItem) => {
    let updatedTodo = todos.filter(value => {
      return value.rowNumber !== deleteItem;
    });

    setTodos(updatedTodo);
  }

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TableFuction todoList={todos} deleteTodo={deleteTodo} />

          <button className="btn btn-primary" onClick={() => setShowAddTodoForm(!showAddTodoForm)} >
            {showAddTodoForm ? "Close New Todo" : "Add New Todo"}
          </button>

          {showAddTodoForm && <AddTodoItem addTodo={addTodo} showAddTodoForm={showAddTodoForm} />}
        </div>
      </div>
    </div>
  );
}

export default App;
