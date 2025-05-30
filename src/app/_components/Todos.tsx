import React from "react";
import prisma from "@/db/db";
import Todo from "./Todo";

export default async function Todos() {
  const todos = await prisma.todo.findMany();

  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          checked={todo.checked}
        />
      ))}
    </ul>
  );
}
