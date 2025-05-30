"use client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { deleteTodo, toggleTodo } from "../_actions/Todos";
import { TiDeleteOutline } from "react-icons/ti";

export function TodoCheckbox({
  id,
  checked,
}: {
  id: string;
  checked: boolean;
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  return (
    <input
      type="checkbox"
      disabled={isPending}
      onChange={() => {
        startTransition(async () => {
          await toggleTodo(id, !checked);
          router.refresh();
        });
      }}
      checked={checked}
    />
  );
}

export function TodoDeleteBtn({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <button
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await deleteTodo(id);
          router.refresh();
        });
      }}
    >
      <TiDeleteOutline />
    </button>
  );
}
