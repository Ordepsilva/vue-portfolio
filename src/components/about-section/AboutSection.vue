<script setup lang="ts">
import { Code, Palette, Zap } from 'lucide-vue-next';
import Card from '../ui/card/Card.vue';

const skills = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Expert in React, Svelte, TypeScript, and modern JavaScript frameworks',
    color: 'text-code-green',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating beautiful, intuitive interfaces with attention to detail',
    color: 'text-code-blue',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing applications for speed, accessibility, and user experience',
    color: 'text-code-purple',
  },
];
</script>

<template>
  <section id="about" class="py-20">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
          <span class="text-glow">About Me</span>
        </h2>
        <p class="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Passionate frontend developer with 4.5 years of experience crafting digital experiences
        </p>

        <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div class="space-y-6">
            <div class="glass-effect rounded-lg p-6">
              <h3 class="text-xl font-semibold mb-4 font-mono text-primary">const developer = {</h3>
              <div class="space-y-2 font-mono text-sm pl-4">
                <div>
                  <span class="text-code-blue">name:</span>
                  <span class="text-code-orange">"Pedro Silva"</span>,
                </div>
                <div>
                  <span class="text-code-blue">role:</span>
                  <span class="text-code-orange">"Frontend Developer"</span>,
                </div>
                <div>
                  <span class="text-code-blue">experience:</span>
                  <span class="text-code-green">"4.5 years"</span>,
                </div>
                <div>
                  <span class="text-code-blue">passion:</span>
                  <span class="text-code-orange">"Building amazing UIs"</span>,
                </div>
                <div>
                  <span class="text-code-blue">specialties:</span> [
                  <div class="pl-4">
                    <div><span class="text-code-orange">"React"</span>,</div>
                    <div><span class="text-code-orange">"Svelte"</span>,</div>
                    <div><span class="text-code-orange">"Vue"</span>,</div>
                    <div><span class="text-code-orange">"TypeScript"</span></div>
                  </div>
                  ]
                </div>
              </div>
              <p class="font-mono text-primary mt-4">};</p>
            </div>
          </div>

          <div class="space-y-4">
            <p class="text-lg leading-relaxed text-muted-foreground">
              I'm a frontend developer with a passion for creating beautiful, performant web
              applications. With 4.5 years of experience, I've specialized in React and Svelte
              ecosystems, building everything from complex dashboards to interactive user
              interfaces.
            </p>
            <p class="text-lg leading-relaxed text-muted-foreground">
              I believe in writing clean, maintainable code and staying up-to-date with the latest
              web technologies. When I'm not coding, you'll find me exploring new frameworks,
              contributing to open source, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>

        <!-- Skills Grid -->
        <div class="grid md:grid-cols-3 gap-6">
          <Card
            v-for="(skill, index) in skills"
            :key="index"
            class="p-6 glass-effect border-border hover:border-primary/50 transition-all duration-300 hover:animate-glow-pulse"
          >
            <div class="text-center">
              <div class="mb-4 inline-block">
                <component :is="skill.icon" class="w-12 h-12" :class="skill.color" />
              </div>
              <h3 class="text-xl font-semibold mb-3">{{ skill.title }}</h3>
              <p class="text-muted-foreground">{{ skill.description }}</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>
