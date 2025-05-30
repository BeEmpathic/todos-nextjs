import React from "react";

import { TodoCheckbox, TodoDeleteBtn } from "./TodoActions";

type TodoProps = {
  id: string;
  title: string;
  checked: boolean;
};

export default function Todo({ id, title, checked }: TodoProps) {
  return (
    <li className="flex">
      <h3>{title}</h3>
      <TodoCheckbox id={id} checked={checked} />
      <TodoDeleteBtn id={id} />
    </li>
  );
}
