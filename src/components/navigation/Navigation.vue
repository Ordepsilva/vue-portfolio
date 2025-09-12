<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Button from '../ui/button/Button.vue'

const isScrolled = ref(false)
const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <nav
    :class="[
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'glass-effect' : 'bg-transparent',
    ]"
  >
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="font-mono text-lg font-bold text-glow">&lt;webdev/&gt;</div>

        <div class="hidden md:flex space-x-8">
          <Button
            v-for="item in navItems"
            :key="item.id"
            variant="ghost"
            @click="scrollToSection(item.id)"
            class="text-muted-foreground hover:text-primary transition-colors"
          >
            {{ item.label }}
          </Button>
        </div>

        <Button
          @click="scrollToSection('contact')"
          class="bg-gradient-primary hover:animate-glow-pulse"
        >
          Get In Touch
        </Button>
      </div>
    </div>
  </nav>
</template>
