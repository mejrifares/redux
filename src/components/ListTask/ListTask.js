import React from 'react'
import { useSelector } from "react-redux"
import TaskCard from '../TaskCard/TaskCard';

const ListTask = ({done, unDone}) => {
    const taskList = useSelector((state) => state.taskList);

    return (
        <div>
             {done === unDone
        ? taskList.map((todo) => (
            <ul className="todo-list">
              <TaskCard todo={todo} />
            </ul>
          ))
        : done
        ? taskList
            .filter((todo) => todo.isDone)
            .map((todo) => (
              <ul className="todo-list">
                <TaskCard todo={todo} />
              </ul>
            ))
        : taskList
            .filter((todo) => todo.isDone === false)
            .map((todo) => (
              <ul className="todo-list">
                <TaskCard todo={todo} />
              </ul>
            ))}
        </div>
    )
}

export default ListTask
