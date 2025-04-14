<template>
  <div
    class="bg-white shadow rounded overflow-hidden relative group"
  >
    <img
      :src="movie.Poster"
      alt="Movie Poster"
      class="w-full h-[300px] object-cover"
    />
    <div class="p-2">
      <h3 class="text-sm font-semibold truncate">{{ movie.Title }}</h3>
    </div>

    <!-- Heart Icon -->
    <button
      class="absolute top-2 right-2 text-white bg-black/50 hover:bg-red-500 rounded-full p-1 transition"
      @click="$emit('toggleFavorite', movie)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        class="w-5 h-5"
        :class="{'text-red-500' : isFavorite}"
      >
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2
                6.5 3.5 5 5.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46
                5.99 14.96 5 16.5 5 18.5 5 20 6.5 20
                8.5c0 3.78-3.4 6.86-8.55
                11.54L12 21.35z"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
const {movie, isFavorite} = defineProps({
    movie: Object,
    isFavorite: Boolean
})
defineEmits([
  "toggleFavorite"
])
</script>
