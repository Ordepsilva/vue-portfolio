<script setup lang="ts">
import Button from '../ui/button/Button.vue';
import Card from '../ui/card/Card.vue';
import { ExternalLink, Github } from 'lucide-vue-next';

const projects = [
  {
    title: 'Bloqit Pokedex',
    description:
      'Full-featured Pokedex application built with Vue3 and TypeScript. Features real-time data fetching, responsive design, offline mode and a beautiful UI.',
    tech: ['Vue3', 'Vite', 'TypeScript', 'Tailwind CSS', 'Pinia', 'PWA'],
    image: '/public/bloqitpokedex.png',
    github: 'https://github.com/Ordepsilva/bloq.it.fe.challenge',
    demo: 'https://bloqitpokedex.netlify.app/',
  },
  {
    title: 'Ambiuus Website',
    description:
      'Modern website for Ambiuus, a barber shop. Features online booking, service showcase, responsive design, and a stylish, professional look.',
    tech: ['React', 'Typescript', 'Next.js', 'Tailwind CSS'],
    image: '/public/ambiuus-web.png',
    github: 'https://github.com/Ordepsilva/AmbiuusWebsite',
    demo: 'https://ambiuus.netlify.app/',
  },
  {
    title: 'Boon Ai',
    description:
      'Boon.ai is an AI-powered go-to-market platform that equips sales and marketing teams with intelligent agents to automate prospecting, market research, and customer engagement. It leverages real-time buyer signals and intent data to help teams identify opportunities faster, personalize outreach, and scale growth more efficiently.',
    tech: [
      'React',
      'TypeScript',
      'CSS Animations',
      '.Net Core',
      'MongoDB',
      'Extensions for Chrome',
      'CI/CD',
    ],
    image: '/public/boon.png',
    github: '',
    demo: 'https://www.boon.ai/',
  },
  {
    title: 'My Portfolio',
    description:
      'My personal portfolio website showcasing my projects, experience, and skills, built with Vue 3 and Tailwind CSS.',
    tech: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Vite'],
    image: '/public/portfolio.png',
    github: 'https://github.com/Ordepsilva/vue-portfolio',
    demo: '',
  },
  {
    title: 'Simdle Workshop',
    description:
      'Simdle Workshop is a garage management platform with features like warehouse and stock management, process digitalization, and customer prioritization. I built this with a team, and it was my first released project with actual customers.',
    tech: ['Svelte', 'Golang', 'MongoDB', 'TypeScript', 'CSS'],
    image: '/public/simdle-workshop.png',
    github: '',
    demo: 'https://automotive.simdle.lu/en/workshop',
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
                  <a v-if="project.github" :href="project.github" target="_blank">
                    <Button size="sm" variant="outline" class="border-primary text-primary">
                      <Github class="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </a>
                  <a v-if="project.demo" :href="project.demo" target="_blank">
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
          <a href="https://github.com/ordepsilva" target="_blank">
            <Button
              variant="outline"
              class="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Github class="w-4 h-4 mr-2" />
              View All Projects on GitHub
            </Button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
