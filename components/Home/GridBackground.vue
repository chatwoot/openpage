<template>
  <img alt="Background" class="counter-gradient-bg" src="/gradient.png" />
</template>

<style scoped>
.counter-gradient-bg {
  @apply pointer-events-none 
          fixed 
          w-[calc(100%-6rem)] 
          max-w-screen-2xl 
          object-contain 
          transform 
          scale-[8.5]
          md:scale-[5.5]
          lg:scale-[1.5]
          top-[620px] 
          md:top-[714px] 
          lg:top-[384px] 
          right-[-73px] 
          rotate-[147deg]
          md:rotate-[330deg]
          lg:rotate-[347deg];
}
</style>
