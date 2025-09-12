<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import Button from '../ui/button/Button.vue'
import TerminalPrompt from '../terminal-prompt/TerminalPrompt.vue'

function scrollToProjects() {
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
}
</script>
<template>
  <section class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <div class="absolute inset-0 opacity-20">
      <div
        v-for="i in 50"
        :key="i"
        class="absolute w-1 h-1 bg-primary rounded-full animate-float"
        :style="{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 6}s`,
          animationDuration: `${6 + Math.random() * 4}s`,
        }"
      />
    </div>
    <div class="container mx-auto px-6 text-center relative z-10">
      <div class="max-w-4xl mx-auto">
        <TerminalPrompt />
        <div class="animate-slide-up">
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              @click="scrollToProjects"
              class="bg-gradient-primary hover:animate-glow-pulse text-lg px-8 py-3"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              class="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-3"
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDown class="w-6 h-6 text-primary" />
    </div>
  </section>
</template>
