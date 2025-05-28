import Form from "next/form";
import { createTodo } from "../_actions/Todos";

function TodosForm() {
  return (
    <div>
      <Form
        className="flex gap-2 items-center align-center"
        action={createTodo}
      >
        <input className="text-black" type="text" id="title" name="title" />
        <button className="border rounded-md p-2" type="submit">
          Add Todo
        </button>
      </Form>
    </div>
  );
}

export default TodosForm;
