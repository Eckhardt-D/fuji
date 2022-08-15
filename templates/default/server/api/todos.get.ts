import { client } from "~/server/database";
import e, { $infer } from "~/dbschema/edgeql-js";

const selectTodos = e.select(e.Todo, () => ({
  id: true,
  title: true,
  done: true,
}));

export type Todos = $infer<typeof selectTodos>;

export default defineEventHandler<Todos>(async () => {
  const todos = await selectTodos.run(client);
  return todos;
});
