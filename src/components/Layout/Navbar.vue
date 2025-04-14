<script setup>
import { RouterLink } from 'vue-router';
import Logo from "../../assets/img/logo.png";

</script>

<template>
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex shrink-0 items-center">
            <img
              class="h-8 w-auto"
              :src="Logo"
              alt="Your Company"
            />
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <RouterLink
                to="/"
                activeClass="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                aria-current="page"
                >Home</RouterLink
              >
              <RouterLink
                to="/favourites"
                activeClass="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                aria-current="page"
                >Favourites</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
