<template>
  <div class="p-4 max-w-6xl mx-auto">
    <h2 class="text-xl font-bold mb-4">Your Favorite Movies</h2>
    
    <!-- Movie Grid -->
    <div
    v-if="favorites.length > 0"
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
    >
      <MovieItem
        v-for="movie in favorites"
        :key="movie.imdbID"
        :movie="movie"
        :isFavorite="true"
        @toggleFavorite="handleToggleFavorite"
      ></MovieItem>
    </div>
    <div v-else class="flex justify-center items-center h-64 text-gray-500 text-lg font-medium">
      <p>No favorites found</p>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useMovieStore } from "../store/movieStore";
import MovieItem from "../components/Movie/MovieItem.vue";

const movieStore = useMovieStore();
const { favorites } = storeToRefs(movieStore);

const handleToggleFavorite = (movie) => {
  movieStore.removeFavorite(movie);
};
</script>
