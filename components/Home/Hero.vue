<template>
  <section class="relative">
    <div
      class="absolute inset-0 bg-gradient-to-b from-white dark:from-gray-900 to-transparent"
    ></div>
    <div class="max-w-3xl mx-auto pt-32 pb-8 px-4 sm:px-6 lg:px-8 relative">
      <div class="sm:flex sm:flex-col sm:align-center">
        <h1
          class="block tracking-tight text-5xl md:text-6xl lg:text-7xl !leading-none font-bold text-white sm:text-center"
        >
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-600"
            >Openpage</span
          >
        </h1>
      </div>
      <div class="max-w-2xl mx-auto mt-6 sm:mt-12">
        <p
          class="font-medium text-lg md:text-xl lg:text-2xl !leading-relaxed sm:text-center"
        >
          Public metrics and analytics pages for your website, product and
          startups.
        </p>
      </div>
      <div class="flex md:justify-center pt-6">
        <a
          href="https://github.com/chatwoot/openpage"
          target="_blank"
          class="flex-space-x-2 github-button"
        >
          <icon-github class="h-4 w-4" />
          <span class="font-semibold">Github</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.github-button {
  @apply px-6 py-3 rounded-lg  border border-gray-200 dark:border-gray-700 border-opacity-50 bg-gray-100 dark:bg-gray-900 bg-opacity-40 dark:bg-opacity-60 backdrop-filter backdrop-blur shadow-lg;
}
</style>
