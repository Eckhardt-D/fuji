import { client } from "~/server/database";
import e, { $infer } from "~/dbschema/edgeql-js";

const selectTodos = e.select(e.Todo, () => ({
  id: true,
  title: true,
  done: true,
}));

export default defineEventHandler(async () => {});
