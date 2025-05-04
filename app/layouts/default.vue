<template>
    <div class="flex flex-col min-h-screen">
        <NavBar/>
        <main class="flex-1">
            <slot/>
        </main>
        <Footer/>
    </div>
</template>

<script setup lang="ts">
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
</script>