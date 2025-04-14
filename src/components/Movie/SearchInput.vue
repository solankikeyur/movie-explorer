<template>
  <div class="flex items-center gap-2 mb-6">
    <input
      type="text"
      v-model="model"
      :disabled="loading"
      placeholder="Search for movies..."
      class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      :class="{ 'bg-gray-200': loading }"
    />
    <button
      class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      :class="{ 'cursor-not-allowed opacity-50': loading }"
      @click="$emit('search')"
      type="button"
      :disabled="loading"
    >
      Search
    </button>
  </div>
</template>
<script setup>
const model = defineModel()
const {loading} = defineProps({
    loading: Boolean
})
defineEmits(['search'])
</script>