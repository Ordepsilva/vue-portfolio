<script setup lang="ts">
import { Code, Palette, Zap } from 'lucide-vue-next';
import Card from '../ui/card/Card.vue';

const skills = [
  {
    icon: Code,
    title: 'Software Development',
    description: 'Knowledge in React, Svelte, Vue, and TypeScript',
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
         Software Engineer with 5+ years of experience crafting high-quality digital products, with a strong focus on frontend engineering.
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
                  <span class="text-code-orange">"Software Developer - Frontend Focus"</span>,
                </div>
                <div>
                  <span class="text-code-blue">experience:</span>
                  <span class="text-code-green">"5+ years"</span>,
                </div>
                <div>
                  <span class="text-code-blue">passion:</span>
                  <span class="text-code-orange">"Building amazing UIs and experiences"</span>,
                </div>
                <div>
                  <span class="text-code-blue">specialties:</span> [
                  <div class="pl-4">
                    <div><span class="text-code-orange">"React"</span>,</div>
                    <div><span class="text-code-orange">"Svelte"</span>,</div>
                    <div><span class="text-code-orange">"Vue"</span>,</div>
                    <div><span class="text-code-orange">"TypeScript"</span></div>
                    <div><span class="text-code-orange">"Go"</span></div>
                  </div>
                  ]
                </div>
              </div>
              <p class="font-mono text-primary mt-4">};</p>
            </div>
          </div>

          <div class="space-y-4">
            <p class="text-lg leading-relaxed text-muted-foreground">
              I spend my days building web apps that (hopefully) don’t break. By night, I trade side
              projects for family time — because life’s best UI is the people around me.
            </p>
            <p class="text-lg leading-relaxed text-muted-foreground">
              Great code should feel effortless to the user, just like great moments should feel
              effortless in life.
            </p>
          </div>
        </div>
        <div class="glass-effect rounded-lg p-6 flex flex-col gap-4 mt-6 mb-16">
          <div class="flex gap-4">
            <div>
              <h4 class="text-lg font-semibold mb-1 text-code-blue">Fun Fact</h4>
              <p class="text-muted-foreground">
                I was always a dog lover and never liked cats... until I got a cat. Now I'm
                officially a cat convert!
              </p>
            </div>
            <span class="text-3xl">🐾</span>
          </div>
          <div class="flex flex-col">
            <h4 class="text-lg font-semibold mb-4 text-code-purple">Meet Mel 🐱</h4>

            <div class="flex flex-col md:flex-row items-center md:items-start gap-8 mb-4">
              <img src="/mel-1.jpg" alt="Mel 1" class="w-36 h-36 object-cover" />
              <img src="/mel-2.jpg" alt="Mel 2" class="w-36 h-36 object-cover" />
              <img src="/mel-3.jpg" alt="Mel 3" class="w-36 h-36 object-cover" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
