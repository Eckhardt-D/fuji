<script lang="ts" setup>
import { type Todos } from '~/server/api/todos.get';
const title = useState('title', () => '')

const { data, pending } = await useLazyAsyncData(async (ctx) => {
  return $fetch('/api/todos');
})

const addTodo = async () => {
  await $fetch('/api/todos', {
    method: 'POST',
    body: {
      title: title.value
    }
  });
  title.value = '';
  data.value = await $fetch('/api/todos');
}

const deleteTodo = async (todo: Todos[0]) => {
  await $fetch('/api/todos', {
    method: 'DELETE',
    body: {
      id: todo.id
    }
  })
  title.value = '';
  data.value = await $fetch('/api/todos');
}
</script>

<template>
  <div>
    <form @submit.prevent>
      <input v-model="title" placeholder="Clean House" type="text">
      <button @click="addTodo">Add Todo</button>
    </form>

    <ul v-if="!pending">
      <li v-for="todo in data">{{ todo.title }} <button @click="deleteTodo(todo)">delete</button></li>
    </ul>
  </div>
</template>
