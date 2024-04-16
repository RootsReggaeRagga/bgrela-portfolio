<script setup>
const color = useColorMode()

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
const themeColor = computed(() => {
  return color.value
})
</script>

<template>
  <div class="cursor-pointer transition-all fade h-100 flex items-center justify-between">
    <Button class="bg-icon-box" @click="toggleDark">
      
      <ion-icon :name="themeColor === 'dark' ? 'sunny-outline' : 'moon-outline'" size=""/>
    </Button>
  </div>
  
</template>