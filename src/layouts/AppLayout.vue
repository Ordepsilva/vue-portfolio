<script setup lang="ts">
import Navigation from '@/components/navigation/Navigation.vue';
import { Toaster } from '@/components/ui/sonner';
import 'vue-sonner/style.css';
</script>

<template>
  <div class="min-h-screen flex flex-col bg-background">
    <footer className="border-t border-border bg-card/50">
      <Navigation />
      <main class="flex-1">
        <RouterView />
        <Toaster />
      </main>

      <div className="container mx-auto px-6 py-8">
        <div className="text-center">
          <p className="text-muted-foreground font-mono text-sm">
            Built with ❤️ using Vue, Vite & TypeScript
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            © 2025 Pedro Silva. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
