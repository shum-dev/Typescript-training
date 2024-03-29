import { Todo, TodosAction, ActionTypes } from '../actions';

export const todosReducer = (state: Todo[] = [], action: TodosAction) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo: Todo): boolean => todo.id !== action.payload);
    default:
      return state;
  }
};
