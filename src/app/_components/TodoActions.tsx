"use client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toggleTodo } from "../_actions/Todos";

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
