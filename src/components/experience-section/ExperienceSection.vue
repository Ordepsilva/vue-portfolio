<script setup lang="ts">
import { CalendarDays, MapPin } from 'lucide-vue-next';
import Card from '../ui/card/Card.vue';

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Aptivio (New York, USA)',
    location: 'Porto - Full Remote',
    period: '2023 - current',
    description:
      'Co-led the development of a new React application from scratch, delivering a modular, scalable architecture integrated with AI-powered agents and designed for production-level stability.',
    achievements: [
      'Created a complete design system and reusable component library, utilizing Storybook for component isolation and documentation, and Vitest for robust test coverage across all UI elements',
      'Built and maintained Google Chrome Extensions, implementing key features through HTML injection and real-time API interactions',
      'Took ownership of integration pipelines, ensuring smooth and secure communication between external platforms and internal services',
      'Led the development of custom bots for Microsoft Teams and Slack, covering both backend logic (.NET/Azure Functions) and frontend presentation layers',
      'Contributed backend features in .NET and Azure Functions to support API integration and frontend functionality',
      'Designed and maintained CI/CD pipelines for bot applications using GitHub Actions, automating PR validation, testing (Vitest), and deployment flows',
      'Collaborated in an agile team environment to ship high-quality, scalable solutions, participating in code reviews and architecture discussions',
    ],
    tech: [
      'React',
      'TypeScript',
      '.NET',
      'Azure Functions',
      'Chrome Extensions',
      'Microsoft Teams Toolkit',
      'Slack API',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Losch Digital Lab',
    location: 'Porto',
    period: '2021 - 2023',
    description:
      'Developed a nationwide vehicle customization tool for Luxembourg, migrating the frontend from Sapper/JavaScript to SvelteKit + TypeScript. Built reusable UI components, integrated with Golang and MongoDB APIs, and mentored junior developers.',
    achievements: [
      'Developed a nationwide vehicle customization tool adopted across Luxembourg',
      'Implemented responsive user interfaces and animations based on UI/UX designs',
      'Migrated the application from Sapper/JavaScript to SvelteKit + TypeScript',
      'Built and maintained a reusable frontend component library',
      'Integrated frontend with Golang and MongoDB APIs for real-time features',
      'Mentored junior developers and participated in code reviews',
      'Contributed to agile planning, estimation, and cross-functional collaboration',
    ],
    tech: ['Golang', 'MongoDB', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Svelte + Kit'],
  },
];
</script>

<template>
  <section id="experience" class="py-20">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
          <span class="text-glow">Experience</span>
        </h2>
        <p class="text-center text-muted-foreground mb-12">My professional journey</p>

        <div class="relative">
          <div class="absolute left-8 top-0 bottom-0 w-px bg-border"></div>

          <div class="space-y-12">
            <div
              v-for="(exp, index) in experiences"
              :key="index"
              class="relative flex items-start gap-8"
            >
              <div
                class="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center animate-glow-pulse"
              >
                <div class="w-3 h-3 bg-primary-foreground rounded-full"></div>
              </div>

              <Card
                class="flex-1 p-6 glass-effect border-border hover:border-primary/50 transition-all duration-300"
              >
                <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 class="text-xl font-semibold text-primary">{{ exp.title }}</h3>
                    <p class="text-lg font-medium">{{ exp.company }}</p>
                  </div>
                  <div class="flex flex-col md:items-end gap-2 mt-2 md:mt-0">
                    <div class="flex items-center text-muted-foreground text-sm">
                      <CalendarDays class="w-4 h-4 mr-2" />
                      {{ exp.period }}
                    </div>
                    <div class="flex items-center text-muted-foreground text-sm">
                      <MapPin class="w-4 h-4 mr-2" />
                      {{ exp.location }}
                    </div>
                  </div>
                </div>

                <p class="text-muted-foreground mb-4 leading-relaxed">
                  {{ exp.description }}
                </p>

                <div class="mb-4">
                  <h4 class="font-semibold mb-2 text-sm">Key Achievements:</h4>
                  <ul class="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                    <li v-for="(achievement, achIndex) in exp.achievements" :key="achIndex">
                      {{ achievement }}
                    </li>
                  </ul>
                </div>

                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="(tech, techIndex) in exp.tech"
                    :key="techIndex"
                    class="px-3 py-1 text-xs font-mono bg-muted rounded-full text-accent"
                  >
                    {{ tech }}
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
