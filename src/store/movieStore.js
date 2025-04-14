import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "../plugins/axios";

export const useMovieStore = defineStore('movieStore', () => {
    const movies = ref([]);
    const favorites = ref(JSON.parse(localStorage.getItem('favorites') || '[]'));
    const loading = ref(false);

    const searchMovies = (searchQuery) => {
        loading.value = true;
        axios.get('', {
            params: {
                s: searchQuery
            }
        }).then(({data}) => {
            const {Search} = data;
            movies.value = Search;
            loading.value = false;
        }).finally(() => {
            loading.value = false;
        })
    }

    const markAsFavourite = (movie) => {
        if (!favorites.value.some(f => f.imdbID === movie.imdbID)) {
            favorites.value.push(movie)
            persistFavorites()
          }
    }

    const removeFavorite = (movie) => {
        favorites.value = favorites.value.filter(f => f.imdbID !== movie.imdbID)
        persistFavorites()
    }

    const isFavorite = (movie) => {
        return favorites.value.some(f => f.imdbID === movie.imdbID)
    }

    const persistFavorites = () => {
        localStorage.setItem('favorites', JSON.stringify(favorites.value))
      }

    return {
        movies,
        favorites,
        loading,
        isFavorite,
        markAsFavourite,
        removeFavorite,
        searchMovies
    }
});