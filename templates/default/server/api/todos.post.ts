import {client} from '~/server/database';
import e, {$infer} from '~/dbschema/edgeql-js';


const addTodo = e.params({title: e.str}, (params) => {
  return e.insert(e.Todo, {
    title: params.title,
  })
})

type AddTodo = $infer<typeof addTodo>;

export default defineEventHandler<AddTodo>(async (event) => {
  const { title } = await useBody(event);
  const added = await addTodo.run(client, {
    title,
  })
  return added;
})