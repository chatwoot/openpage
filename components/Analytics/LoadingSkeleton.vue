<template>
  <div class="analytics-card flex flex-col justify-between">
    <div class="flex-between p-8">
      <div class="h-8 w-8 rounded-full shimmer"></div>
      <div class="h-8 w-8 rounded-full shimmer"></div>
    </div>
    <div class="p-8">
      <div class="w-20 h-10 shimmer mb-2 rounded"></div>
      <div class="w-12 h-2 shimmer rounded"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.shimmer {
  @apply bg-gray-300 dark:bg-gray-800 animate-pulse;
}
</style>
