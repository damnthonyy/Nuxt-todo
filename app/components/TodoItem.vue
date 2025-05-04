<template>
    <div class="flex justify-center mt-10">
        <div class="flex gap-2">
            <input type="text" v-model="newTodo" @keyup.enter="saveTodo" class="border-2 w-[350px] h-[40px] rounded-md p-2"/>
            <button type="button" @click="saveTodo" class="bg-blue-500 text-white p-2 rounded-md cursor-pointer w-[100px]">Save</button>
            <button type="button" @click="deleteTodo" class="bg-red-500 text-white p-2 rounded-md cursor-pointer w-[100px]">Delete</button>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Definir TodoItem

interface TodoItem{
    id?: number;
    title?: string;
    completed?: boolean;
}


const props = defineProps<TodoItem>()

// Definir newTodo
const newTodo = ref<string>('');

// Callbacks Save, Delete,

function saveTodo(): void {
    // code
    console.log(newTodo.value);
}

function deleteTodo(): void {
    //code 
    console.log(`${newTodo.value} deleted`);
}

</script>


