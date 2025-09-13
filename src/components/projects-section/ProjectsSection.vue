<script setup lang="ts">
import Button from '../ui/button/Button.vue';
import Card from '../ui/card/Card.vue';
import { ExternalLink, Github } from 'lucide-vue-next';

const projects = [
  {
    title: 'Bloqit Pokedex',
    description:
      'Full-featured Pokedex application built with React and TypeScript. Features real-time data fetching, responsive design, and a beautiful UI.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    github: 'https://github.com/Ordepsilva/bloq.it.fe.challenge',
    demo: 'https://bloqitpokedex.netlify.app/',
  },
  {
    title: 'Ambiuus Website',
    description:
      'Collaborative task management application with drag-and-drop functionality, built using Svelte and modern web technologies.',
    tech: ['Svelte', 'JavaScript', 'CSS3', 'LocalStorage'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    github: 'https://github.com/Ordepsilva/AmbiuusWebsite',
    demo: 'https://ambiuus.netlify.app/',
  },
  {
    title: 'Boon Ai ',
    description:
      'Beautiful weather application with location-based forecasts, animated weather icons, and responsive design.',
    tech: ['React', 'API Integration', 'CSS Animations', 'PWA'],
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
    github: '#',
    demo: 'https://www.boon.ai/',
  },
];
</script>

<template>
  <section id="projects" class="py-20">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
          <span class="text-glow">Featured Projects</span>
        </h2>
        <p class="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A showcase of my recent work and personal projects
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            v-for="(project, index) in projects"
            :key="index"
            class="group overflow-hidden glass-effect border-border hover:border-primary/50 transition-all duration-300 hover:animate-glow-pulse"
          >
            <div class="relative overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              >
                <div class="flex gap-4">
                  <a :href="project.github" target="_blank">
                    <Button size="sm" variant="outline" class="border-primary text-primary">
                      <Github class="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </a>
                  <a :href="project.demo" target="_blank">
                    <Button size="sm" class="bg-gradient-primary" target="_blank">
                      <ExternalLink class="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <div class="p-6">
              <h3 class="text-xl font-semibold mb-3">{{ project.title }}</h3>
              <p class="text-muted-foreground mb-4 text-sm leading-relaxed">
                {{ project.description }}
              </p>

              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(tech, techIndex) in project.tech"
                  :key="techIndex"
                  class="px-3 py-1 text-xs font-mono bg-muted rounded-full text-primary"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </Card>
        </div>

        <div class="text-center mt-12">
          <Button
            variant="outline"
            class="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Github class="w-4 h-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>
