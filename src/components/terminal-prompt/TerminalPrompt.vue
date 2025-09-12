<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue'

const displayText = ref('')
const currentLine = ref(0)

const terminalLines = [
  '> whoami',
  'Pedro Silva, Frontend Developer',
  '> experience --years',
  '4.5 years of crafting digital experiences',
  '> skills --list',
  'React • Svelte • TypeScript • Modern Web',
]

const displayLines = computed(() => displayText.value.split('\n'))

function typeLine(line: string, callback: () => void) {
  let charIndex = 0
  const interval = setInterval(() => {
    if (charIndex < line.length) {
      displayText.value += line[charIndex]
      charIndex++
    } else {
      clearInterval(interval)
      setTimeout(() => {
        displayText.value += '\n'
        callback()
      }, 500)
    }
  }, 50)
}

watch(currentLine, (newVal) => {
  if (newVal < terminalLines.length) {
    typeLine(terminalLines[newVal], () => {
      currentLine.value++
    })
  }
})

onMounted(() => {
  typeLine(terminalLines[0], () => {
    currentLine.value++
  })
})
</script>
<template>
  <div class="terminal-glow rounded-lg p-6 mb-8 text-left max-w-2xl mx-auto">
    <div class="flex items-center gap-2 mb-4">
      <div class="w-3 h-3 rounded-full bg-red-500"></div>
      <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div class="w-3 h-3 rounded-full bg-green-500"></div>
      <span class="font-mono text-sm text-muted-foreground ml-2">terminal</span>
    </div>
    <div class="flex flex-col gap-4 font-mono text-sm text-foreground whitespace-pre-wrap">
      <template v-for="(line, id) in displayLines" :key="id">
        <span v-if="line.startsWith('>')" class="text-primary">&gt;{{ line.slice(1) }}</span>
        <span v-else>{{ line }}</span>
      </template>
      <span class="animate-pulse">_</span>
    </div>
  </div>
</template>
