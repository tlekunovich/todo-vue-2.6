<template>
    <div>
        <ul>
            <TodoItem v-for="(todo, i) in todos" :key="todo.id" :todoProps="todo" :index="i" @remove-todo="removeTodo" />
        </ul>
    </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
    props: ["todos"],
    components: {
        TodoItem: TodoItem
    },

    setup: (props, { emit }) => {
        const removeTodo = id => {
            emit("remove-todo", id);
        };
        return {
            removeTodo
        };
    }
};
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
</style>
