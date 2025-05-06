<script setup lang="ts">
const {todos,addTodo,toggleTodo,deleteTodo}=useTodos()

// fetch todos
async function fetchTodos(){
    todos.value = await $fetch('api/todos')
}

onMounted(fetchTodos);

const newTitle=ref('')

const handleAdd= async()=>{
    if(newTitle.value.trim()){
        await addTodo(newTitle.value)
        newTitle.value=''
    }

    
}

</script>


<template>
    <div class="flex justify-center mt-10">
            <div class="flex gap-2">
                <input type="text" v-model="newTitle" class="border-2 w-[350px] h-[40px] rounded-md p-2"/>
                <button @click="handleAdd" class="bg-blue-500 text-white p-2 rounded-md cursor-pointer w-[100px]">Save</button>
            </div>
    </div>
    <div class="flex justify-center mt-10">
        <ul class="list-none flex flex-col gap-2 w-[350px]">
            <li v-for="todo in todos" :key="todo.id" class="flex justify-between w-[100%] items-center gap-2">
                <span :class="todo.completed ? 'text-gray-500 decoration-dashed' : ''">{{todo.title}}</span>
                <button @click="deleteTodo(todo.id)" class="bg-red-500 text-white p-2 rounded-md cursor-pointer w-[100px]">Delete</button>
                <input type="checkbox"
                :checked="todo.completed"
                @change="toggleTodo(todo.id,todo.completed)" />
            </li>
        </ul>
    </div>
</template>




