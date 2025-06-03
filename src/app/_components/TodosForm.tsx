"use client";

import { useFormStatus } from "react-dom";
import { createTodo } from "../_actions/Todos";
import { useActionState } from "react";

function TodosForm() {
  const [error, action] = useActionState(createTodo, {});

  return (
    <div>
      <form className="flex gap-2 items-center align-center" action={action}>
        <input className="text-black" type="text" id="title" name="title" />
        <SubmitButton />
      </form>
      {error?.title && <div className="text-red-500">{error.title}</div>}
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className="border rounded-md p-2 hover:bg-white hover:text-black transition-colors"
      type="submit"
      disabled={pending}
    >
      {pending ? "Adding Todo..." : "Add Todo"}
    </button>
  );
}

export default TodosForm;
