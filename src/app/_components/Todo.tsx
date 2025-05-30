import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { TodoCheckbox } from "./TodoActions";

type TodoProps = {
  id: string;
  title: string;
  checked: boolean;
};

export default function Todo({ id, title, checked }: TodoProps) {
  return (
    <li>
      <h3>{title}</h3>
      <TodoCheckbox id={id} checked={checked} />
      <button>
        <TiDeleteOutline />
      </button>
    </li>
  );
}
