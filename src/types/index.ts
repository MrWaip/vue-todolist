export type Note = {
  id: number;
  title?: string;
  todoList: Todo[];
};

export type Todo = {
  id: number;
  title?: string;
  completed: boolean;
};
