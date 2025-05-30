import React from "react";
import prisma from "@/db/db";

export default async function Todos() {
  const todos = await prisma.todo.findMany();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
