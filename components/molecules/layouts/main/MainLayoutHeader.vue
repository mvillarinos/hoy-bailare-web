<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

const { isMobile } = useTailwindSize()
const pages = ref<NavigationMenuItem[]>([
  [
    {
      label: 'Quienes somos',
      icon: 'i-lucide-book-open',
      to: '/quienessomos',
      children: [
        {
          label: 'Murga',
          description: 'Hoy Bailaré es la murga más alegre de la ciudad.',
          icon: 'i-lucide-house',
          to: '/quienessomos#murga',
        },
        {
          label: 'Organización',
          description: 'La Organización Barrial es nuestra herramienta fundamental.',
          icon: 'i-lucide-cloud-download',
          to: '/quienessomos#organizacion',
        },
        {
          label: 'Barrio',
          icon: 'i-lucide-smile',
          description: 'Con los pies en la tierra.',
          to: '/quienessomos#barrio',
        },
      ],
    },
    {
      label: 'Sumate',
      icon: 'i-lucide-database',
      to: '/sumate',
    },
    {
      label: 'Actividades',
      icon: 'i-lucide-box',
      to: '/actividades',
      children: [
        {
          label: 'Próximas',
          icon: 'i-lucide-file-text',
          description: 'Lo que se viene.',
          to: '/actividades#proximas',
        },
        {
          label: 'Histórico',
          icon: 'i-lucide-file-text',
          description: 'Lo que se hizo.',
          to: '/actividades#historico',
        },
      ],
    },
  ],
  [
    {
      icon: 'i-simple-icons-instagram',
      to: 'https://www.instagram.com/organizacionbarrialhoybailare/',
      target: '_blank',
    },
  ],
])
</script>

<template>
  <nav class="relative flex justify-between items-center top-0 h-18 px-4 gap-4 bg-primary">
    <ULink to="/">
      <NuxtImg
        src="/logo.jpg"
        sizes="52px"
        class="rounded-lg"
      />
    </ULink>
    <UPopover
      v-if="isMobile"
      :content="{
        align: 'end',
      }"
    >
      <UButton icon="i-lucide-menu" size="xl" color="neutral" />
      <template #content>
        <UNavigationMenu
          :items="pages"
          orientation="vertical"
          highlight
        />
      </template>
    </UPopover>
    <UNavigationMenu
      v-else
      :items="pages"
      highlight
      color="secondary"
      :ui="{
        root: 'w-full bg-transparent',
        childList: 'bg-white',
      }"
    />
  </nav>
</template>
