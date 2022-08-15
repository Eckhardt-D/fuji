import { client } from "~/server/database";
import e, { $infer } from "~/dbschema/edgeql-js";

const deleteTodo = e.params({id: e.uuid}, (params) => {
  return e.delete(e.Todo, todo => ({
    filter: e.op(todo.id, '=', params.id)
  }));
});

export type DeleteTodo = $infer<typeof deleteTodo>;

export default defineEventHandler<DeleteTodo>(async (event) => {
  const {id} = await useBody(event);
  const todos = await deleteTodo.run(client, {id});
  return todos;
});
