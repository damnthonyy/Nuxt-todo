<script setup lang="ts">

</script>

<template>
    <div class="flex justify-between items-center gap-[1rem] p-[20px]">
        <h1 class="text-2xl font-bold">NavBar</h1>
        <ul class="flex gap-[1rem] items-center">
            <li class="cursor-pointer hover:text-blue-500 font-[1.2rem]">
                 <NuxtLink to="/">
                    Home
                 </NuxtLink></li>
            <li class="cursor-pointer hover:text-blue-500 font-[1.2rem]">
                <NuxtLink to="/login">
                    Login
                </NuxtLink>
            </li>
            <li class="cursor-pointer hover:text-blue-500 font-[1.2rem]">
                <NuxtLink to="/dashboard">
                    Dashboard
                </NuxtLink>
            </li>
        </ul>
    </div>
  
</template>