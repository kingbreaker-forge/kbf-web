import type { Data } from "./+data";
import { useData } from "vike-react/useData";
import { TodoList } from "./TodoList.js";

export const metadata = {
  "description": "A simple to-do list application built with Vike and React.",
  "title": "To-do List App"
}

export default function Page() {
  const data = useData<Data>();
  return (
    <>
      <h1>To-do List</h1>
      <TodoList initialTodoItems={data.todo} />
    </>
  );
}
