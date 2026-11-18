<template>
      <footer class="bg-[#F9F6ED] dark:bg-gray-800 shadow-md py-12 mt-auto">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <!-- Section Présentation -->
        <div class="text-center md:text-left">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            DONA Portfolio
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 max-w-xs mx-auto md:mx-0">
            Développeur Full Stack passionné par la création d'applications web modernes
          </p>
        </div>

        <!-- Section Liens rapides -->
        <div class="text-center md:text-left">
          <h4 class="font-semibold text-lg text-gray-900 dark:text-white mb-3">
            Liens rapides
          </h4>
          <div class="flex flex-col space-y-2 items-center md:items-start">
            <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to"
              class="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>

        <!-- Section Réseaux sociaux -->
        <div class="text-center md:text-left">
          <h4 class="font-semibold text-lg text-gray-900 dark:text-white mb-3">
            Réseaux sociaux
          </h4>
          <div class="flex justify-center space-x-4 md:justify-start">
            <NuxtLink to="https://github.com/chiracmichoagan" target="_blank" rel="noopener noreferrer"
              class="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
              <UIcon name="i-simple-icons-github" class="text-2xl" />
            </NuxtLink>
            <NuxtLink to="https://linkedin.com/chiracmichoagan" target="_blank" rel="noopener noreferrer"
              class="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
              <UIcon name="i-simple-icons-linkedin" class="text-2xl" />
            </NuxtLink>
            <NuxtLink to="https://x.com/@teixeira00125" target="_blank" rel="noopener noreferrer"
              class="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
              <UIcon name="i-simple-icons-twitter" class="text-2xl" />
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Copyright et Mention -->
      <div
        class="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        <p class="flex items-center justify-center gap-3">
          &copy; {{ new Date().getFullYear() }} DONA Portfolio. Tous droits réservés.
          <!-- drapeau Cap-Vert -->
          <img src="./public/assets/image_dona.png" class="w-6 h-6 rounded-full" />
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import ChatBot from "~/components/ChatBot.vue";

const darkMode = ref(false);
const showTerminal = ref(false);
const isMenuOpen = ref(false);
const navItems = [
  // { label: "Accueil", to: "/" },
  { label: "À propos", to: "/about" },
  { label: "Projets", to: "/projects" },
  { label: "Contact", to: "/contact" },
  // { label: "Blog", to: "/blog" },
];

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  document.documentElement.classList.toggle("dark", darkMode.value);
};

const toggleTerminal = () => {
  showTerminal.value = !showTerminal.value;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>