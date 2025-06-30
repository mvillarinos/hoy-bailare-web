<script lang="ts" setup>
const { isMobile } = useTailwindSize()
</script>

<template>
  <nav class="relative flex justify-between items-center top-0 h-18 px-4 bg-primary">
    <NuxtImg
      src="/logo.jpg"
      sizes="52px"
      class="rounded-lg"
    />
    <div v-if="isMobile">
      menu
    </div>
  </nav>
</template>
