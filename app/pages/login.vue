<script setup lang="ts">
import useAuthStore from '~/stores/auth'
const auth= useAuthStore()
const router= useRouter()

function handleLogin(){
  auth.login()
  router.push('/dashboard')
}

</script>

<template>
  <div>
    <h1 class="text-lg font-bold text-center">Login</h1>
    <form @submit.prevent="handleLogin" class="flex flex-col gap-3">
        <input class="border-2 border-gray-300 rounded-md p-2 w-[300px] h-[40px]" type="text" placeholder="Email" />
        <input class="border-2 border-gray-300 rounded-md p-2 w-[300px] h-[40px]" type="password" placeholder="Password" />
        <button class="bg-blue-500 text-white p-2 rounded-md w-[300px] h-[40px]" type="submit">Login</button>
    </form>
  </div>
</template>