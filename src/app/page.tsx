import Form from "next/form";
import prisma from "@/db/db";
import TodosForm from "./_components/TodosForm";

export default async function Home() {
  const todos = await prisma.todo.findMany();

  return (
    <div>
      <TodosForm />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
