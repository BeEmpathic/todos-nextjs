import TodosForm from "./_components/TodosForm";
import Todos from "./_components/Todos";

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <header className="text-2xl flex justify-center items-center p-5 font-bold">
        <h1>Simple Todos</h1>
      </header>
      <TodosForm />
      <Todos />
    </div>
  );
}
