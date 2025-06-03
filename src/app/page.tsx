import Form from "next/form";
import prisma from "@/db/db";
import TodosForm from "./_components/TodosForm";
import Todos from "./_components/Todos";

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <TodosForm />
      <Todos />
    </div>
  );
}
