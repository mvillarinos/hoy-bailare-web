export function useTailwindSize() {
  const breakpoints = useBreakpoints({
    'xs': 0,
    'sm': 640,
    'md': 768,
    'lg': 1024,
    'xl': 1280,
    '2xl': 1536,
  })
  const twSize = computed(() => breakpoints.active().value)
  const greater = (size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl') => computed(() => breakpoints.greater(size).value)
  const smaller = (size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl') => computed(() => breakpoints.smaller(size).value)
  const isMobile = computed(() => smaller('md').value)
  return { twSize, greater, smaller, isMobile }
}

/* Example usage:
const { twSize, greater, isMobile } = useTailwindSize()

console.log('twSize', twSize.value)
watch(twSize, (_twSize) => {
  console.log('twSize', _twSize)
})

console.log('greater(md)', greater('md').value)
watch(greater('md'), (_greaterMd) => {
  console.log('greater(md)', _greaterMd)
})

<template>
  <div v-if="isMobile"> mobile </div>
</template>
*/
