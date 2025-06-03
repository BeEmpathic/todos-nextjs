"use server";

import prisma from "@/db/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const addTodoSchema = z.object({
  title: z.string().min(1),
});

export async function createTodo(prevState: unknown, formData: FormData) {
  const result = addTodoSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (result.success === false) {
    console.error(result.error);
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  await prisma.todo.create({
    data: {
      title: data.title,
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
