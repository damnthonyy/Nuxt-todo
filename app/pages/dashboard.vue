<script setup lang="ts">
    definePageMeta({
        middleware:['auth']
    })
</script>

<template>
    <h1 class="text-2xl font-bold text-center">dashboard</h1>
    <TodoItem/>
  
</template>