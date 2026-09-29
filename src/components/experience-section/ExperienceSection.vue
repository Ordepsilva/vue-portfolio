<script setup lang="ts">
import { CalendarDays, MapPin } from 'lucide-vue-next';
import Card from '../ui/card/Card.vue';
import { useIsMobile } from '@/composables/useIsMobile';

const isMobile = useIsMobile();

const experiences = [
  {
  title: 'Software Engineer - Frontend Focus',
  company: 'Bloq.it',
  location: 'Porto - Remote',
  period: '2025 - current',
  description:
    'Working across multiple smart locker products, with a focus on modern frontend architecture, performance, API-first development, and end-to-end feature ownership.',
  achievements: [
    'Co-developed a modern Svelte application for smart locker operations, built with TypeScript, automated testing, and a strong focus on performance and maintainability',
    'Designed and implemented the supporting Backend-for-Frontend in Go, introducing reusable modules and strongly typed API integrations generated with Hey API',
    'Helped introduce AI-assisted engineering workflows, reusable skills, improved documentation, and development patterns to increase team productivity and consistency',
    'Contribute to an existing Vue back-office platform, delivering new features and progressively migrating legacy Options API code to the Composition API',
    'Take end-to-end ownership of features, contributing to technical design, planning, task definition, sprint preparation, implementation, review, and delivery',
    'Use PostHog and Datadog to monitor product usage, application behaviour, and technical performance',
  ],
  tech: [
    'Svelte',
    'Vue',
    'TypeScript',
    'JavaScript',
    'Go',
    'Hey API',
    'PostHog',
    'Datadog',
    'Vitest',
  ],
},
{
  title: 'Software Engineer - Frontend Focus',
  company: 'Aptivio (New York, USA)',
  location: 'Porto - Remote',
  period: '2023 - 2025',
  description:
    'Co-led the development of a React application from scratch, defining a modular and scalable architecture integrated with AI-powered agents.',
  achievements: [
    'Built a reusable design system and component library supported by Storybook documentation and Vitest automated testing',
    'Developed and maintained Chrome Extensions with dynamic UI injection and real-time integrations with platforms such as LinkedIn and HubSpot',
    'Owned the development of Microsoft Teams and Slack integrations across frontend flows, bots, backend services, and external APIs',
    'Built backend services using .NET and Azure Functions to support integration workflows and application functionality',
    'Designed and maintained CI/CD pipelines for validation, testing, versioning, and deployment workflows',
  ],
  tech: [
    'React',
    'TypeScript',
    '.NET',
    'Azure Functions',
    'Chrome Extensions',
    'Microsoft Teams Toolkit',
    'Slack API',
    'Storybook',
    'Vitest',
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
                v-if="!isMobile"
                class="flex-shrink-0 size-16 bg-gradient-primary rounded-full flex items-center justify-center animate-glow-pulse"
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
