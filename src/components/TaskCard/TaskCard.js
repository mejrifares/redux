import React from 'react'
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../JS/Actions/actions";

import EditTodo from '../EditTodo/EditTodo'
import './TaskCard.css'

const TaskCard = ({ todo }) => {
    const dispatch = useDispatch();
  
    return (
      <li className="todo-card">
        <span
          style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
          className="todo-text"
          onClick={() => dispatch(completeTodo(todo.id))}
        >
          {todo.text}
        </span>
        <i
          className="fas fa-trash-alt"
          onClick={() => dispatch(deleteTodo(todo.id))}
        ></i>
        <EditTodo todo={todo} />
      </li>
    );
  };
  
  export default TaskCard;
