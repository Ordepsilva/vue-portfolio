<script setup lang="ts">
import FooterSection from '@/components/footer-section/FooterSection.vue';
import Navigation from '@/components/navigation/Navigation.vue';
import { Toaster } from '@/components/ui/sonner';
import 'vue-sonner/style.css';
</script>

<template>
  <div class="min-h-screen flex flex-col bg-background">
    <Navigation />
    <main class="flex-1">
      <RouterView />
      <Toaster />
    </main>
    <FooterSection />
  </div>
</template>
