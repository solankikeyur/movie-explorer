<script setup>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
</script>
<template>
    <div class="min-h-screen flex flex-col">
        <Navbar></Navbar>
        <div class="flex-grow">
            <slot />
        </div>
        <Footer></Footer>
    </div>
</template>