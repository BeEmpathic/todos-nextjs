import Form from "next/form";
import prisma from "@/db/db";
import TodosForm from "./_components/TodosForm";
import Todos from "./_components/Todos";

export default async function Home() {
  return (
    <div>
      <TodosForm />
      <Todos />
    </div>
  );
}
