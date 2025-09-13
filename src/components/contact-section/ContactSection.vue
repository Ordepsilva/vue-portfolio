<script setup lang="ts">
import { ref } from 'vue';
import Input from '../ui/input/Input.vue';
import Textarea from '../ui/textarea/Textarea.vue';
import Button from '../ui/button/Button.vue';
import Card from '../ui/card/Card.vue';
import { Mail, Send, LinkedinIcon, GithubIcon } from 'lucide-vue-next';
import { useEmail } from '@/composables/useEmail';
import { useToast } from '@/composables/useToast';

const formData = ref({
  name: '',
  email: '',
  message: '',
});

const { sendEmail } = useEmail();
const { showSuccess, showError } = useToast();

async function handleSubmit(e: Event) {
  e.preventDefault();
  try {
    await sendEmail(formData.value);
    showSuccess("Message sent!\nThanks for reaching out. I'll get back to you soon!");
    formData.value = { name: '', email: '', message: '' };
  } catch (err) {
    showError('Failed to send message. Please try again later.');
    console.error(err);
  }
}

const socialLinks = [
  {
    icon: GithubIcon,
    label: 'GitHub',
    href: 'https://github.com/ordepsilva',
    color: 'hover:text-code-green',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pedro-silva-120b71184/',
    color: 'hover:text-code-blue',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:pedro-manuel16@hotmail.com',
    color: 'hover:text-code-orange',
  },
];
</script>

<template>
  <section id="contact" class="py-20">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
          <span class="text-glow">Let's Connect</span>
        </h2>
        <p class="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or just want to chat about frontend development? I'd love to hear
          from you!
        </p>

        <div class="grid md:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <Card class="p-6 glass-effect border-border">
            <h3 class="text-xl font-semibold mb-6">Send me a message</h3>
            <form @submit="handleSubmit" class="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  v-model="formData.name"
                  required
                  class="bg-muted border-border focus:border-primary"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  v-model="formData.email"
                  required
                  class="bg-muted border-border focus:border-primary"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell me about your project or just say hi!"
                  rows="5"
                  v-model="formData.message"
                  required
                  class="bg-muted border-border focus:border-primary resize-none"
                />
              </div>
              <Button type="submit" class="w-full bg-gradient-primary hover:animate-glow-pulse">
                <Send class="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          <div class="space-y-8">
            <Card class="p-6 glass-effect border-border">
              <h3 class="text-xl font-semibold mb-6">Get in touch</h3>
              <div class="space-y-4">
                <div class="flex items-center space-x-3">
                  <Mail class="w-5 h-5 text-primary" />
                  <span>pedro-manuel16@hotmail.com</span>
                </div>
                <div class="font-mono text-sm text-muted-foreground bg-muted p-4 rounded-lg">
                  <div class="text-code-blue">const</div>
                  <div class="ml-2">
                    <span class="text-code-orange">availability</span> =
                    <span class="text-code-green">"Open to opportunities"</span>;
                  </div>
                  <div class="ml-2">
                    <span class="text-code-orange">responseTime</span> =
                    <span class="text-code-green">"24-48 hours"</span>;
                  </div>
                  <div class="ml-2">
                    <span class="text-code-orange">currentFocus</span> =
                    <span class="text-code-green">"Frontend Excellence"</span>;
                  </div>
                </div>
              </div>
            </Card>

            <Card class="p-6 glass-effect border-border">
              <h3 class="text-xl font-semibold mb-6">Socials</h3>
              <div class="grid grid-cols-2 gap-4">
                <a
                  v-for="(link, index) in socialLinks"
                  :key="index"
                  :href="link.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  :class="`flex items-center space-x-3 hover:scale-110 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-all duration-300 ${link.color}`"
                >
                  <component :is="link.icon" class="w-5 h-5" />
                  <span class="text-sm font-medium">{{ link.label }}</span>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
