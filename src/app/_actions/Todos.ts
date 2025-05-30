"use server";

import prisma from "@/db/db";
import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData) {
  const title = formData.get("title") as string;

  await prisma.todo.create({
    data: {
      title,
    },
  });

  revalidatePath("/");
}

export async function toggleTodo(id: string, checked: boolean) {
  await prisma.todo.update({
    where: { id },
    data: {
      checked,
    },
  });
}

export async function deleteTodo(id: string) {
  await prisma.todo.delete({
    where: { id },
  });
}
