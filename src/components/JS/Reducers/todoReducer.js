import {ADD_TODO , EDIT_TODO , COMPLETE_TODO , DELETE_TODO} from '../ActionsTypes/actionsTypes'


const initialState = {
  taskList: [
    {
      text: "My First Todo",
      id: 0,
      isDone: false,
    },
    {
      text: "My Second Todo",
      id: 1,
      isDone: false,
    },
    {
      text: "My Third Todo",
      id: 2,
      isDone: false,
    },
  ],
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        taskList: [...state.taskList, payload],
      };

    case EDIT_TODO:
      return {
        ...state,
        taskList: state.taskList.map((todo) => {

          if (todo.id === payload.id) {
            return { ...todo, text: payload.text };
          } else {
            return todo;
          }
        }),
      };

    case COMPLETE_TODO:
      return {
        ...state,

        taskList: state.taskList.map((todo) =>
          todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };

    case DELETE_TODO:
      return {
        ...state,
        taskList: state.taskList.filter((todo) => todo.id !== payload),
      };
    default:
      return state;
  }
};

export default todoReducer;