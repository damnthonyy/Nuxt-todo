<script setup lang="ts">
const {newTodo,todos,addTodo,deleteTodo,toggleTodo}=useTodos()

// fetch todos
async function fetchTodos(){
    todos.value = await $fetch('api/todos')
}

onMounted(fetchTodos);

const NewTodo= ref<string>('')

const handleAdd= async()=>{
    if(NewTodo.value.trim()){
        await addTodo(NewTodo.value)
        NewTodo.value=''
    }
}

</script>


<template>
    <div class="flex justify-center mt-10">
            <div class="flex gap-2">
                <input type="text" v-model="newTodo" @keyup.enter="handleAdd" class="border-2 w-[350px] h-[40px] rounded-md p-2"/>
                <button @click="handleAdd" class="bg-blue-500 text-white p-2 rounded-md cursor-pointer w-[100px]">Save</button>
            </div>
    </div>
    <div class="flex justify-center mt-10">
        <ul>
            <li v-for="todo in todos" :key="todo.id" class="flex gap-2">
                <span>{{todo.title}}</span>
                <button @click="deleteTodo(todo.id)" class="bg-red-500 text-white p-2 rounded-md cursor-pointer w-[100px]">Delete</button>
                <input type="checkbox" :checked="todo.completed" @change="toggleTodo(todo.id)"/>
            </li>
        </ul>
    </div>
</template>




