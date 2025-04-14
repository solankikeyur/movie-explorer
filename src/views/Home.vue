<script setup>
import { ref } from 'vue';
import { useMovieStore } from '../store/movieStore';
import { storeToRefs } from 'pinia';
import Loader from "../components/Shared/Loader.vue";
import MovieItem from '../components/Movie/MovieItem.vue';
import SearchInput from '../components/Movie/SearchInput.vue';

const search = ref("");
const movieStore = useMovieStore();
const {movies, loading} = storeToRefs(movieStore);

const handleSearch = () => {
    if(search.value) {
        movieStore.searchMovies(search.value);
    }
}

const handleToggleFavorite = (movie) => {
  if(movieStore.isFavorite(movie)) {
    movieStore.removeFavorite(movie);
  } else {
    movieStore.markAsFavourite(movie);
  }
}

</script>
<template>
    <div class="p-4 max-w-6xl mx-auto">
      <!-- Search Bar -->
      <SearchInput :loading="loading" v-model="search" @search="handleSearch" ></SearchInput>
      
      <Loader v-if="loading"></Loader>
      <!-- Movie Grid -->
      <div v-if="!loading && movies.length > 0" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <MovieItem v-for="movie in movies" :key="movie.imdbID" :movie="movie" :isFavorite="movieStore.isFavorite(movie)" @toggleFavorite="handleToggleFavorite"></MovieItem>
      </div>
    </div>
  </template>