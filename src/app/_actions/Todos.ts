"use server";

import prisma from "@/db/db";

export async function createTodo(formData: FormData) {
  const title = formData.get("title") as string;

  await prisma.todo.create({
    data: {
      title,
    },
  });
}
