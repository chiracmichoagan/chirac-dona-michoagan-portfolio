<template>
  <ClientOnly>
    <div
      class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors flex flex-col">
      <header class="p-4 bg-white dark:bg-gray-800 shadow-2xl sticky top-0 z-50">
        <div class="container mx-auto flex justify-between items-center">
          <NuxtLink to="/" class="text-xl font-bold flex items-center justify-center gap-2">
            <!-- drapeau Cap-Vert -->
            <img src="./public/assets/image_dona.png" class="w-10 h-10 rounded-full" />
          </NuxtLink>

          <!-- Navigation  -->
          <nav class="flex items-center space-x-6 relative">
            <!-- Menu desktop (affiché uniquement sur les écrans larges) -->
            <div class="hidden md:flex items-center space-x-6">
              <NuxtLink to="/" class="hover:text-blue-600 transition-colors flex items-center gap-2"
                active-class="text-blue-600 font-semibold">
               Accueil
              </NuxtLink>
              <NuxtLink class="hover:text-blue-600 transition-colors flex items-center gap-2"
                active-class="text-blue-600 font-semibold">

              </NuxtLink>
              <NuxtLink to="/about" class="hover:text-blue-600 transition-colors flex items-center gap-2"
                active-class="text-blue-600 font-semibold">
               À propos
              </NuxtLink>
              <NuxtLink to="/projects" class="hover:text-blue-600 transition-colors flex items-center gap-2"
                active-class="text-blue-600 font-semibold">
               Projets
              </NuxtLink>
              <NuxtLink to="/contact" class="hover:text-blue-600 transition-colors flex items-center gap-2"
                active-class="text-blue-600 font-semibold">
               Contact
              </NuxtLink>
            </div>

            <!-- Icône de menu  ( uniquement sur mobile) -->
            <div @click="toggleMenu" class="md:hidden cursor-pointer mt-2">
              <UIcon name="i-heroicons-bars-3" class="text-2xl" />
            </div>

            <!-- Menu mobile déroulant -->
            <div v-show="isMenuOpen"
              class="absolute top-12 left-0 right-0 bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 flex flex-col space-y-4 md:hidden transition-all duration-300 ease-in-out z-50 w-48">
              <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to"
                class="hover:text-blue-600 transition-colors flex items-center gap-2"
                active-class="text-blue-600 font-semibold" @click="closeMenu">
                <UIcon v-if="item.icon" :name="item.icon" class="text-lg" />
                {{ item.label }}
              </NuxtLink>
            </div>
          </nav>

          <div class="flex items-center space-x-4">
            <button @click="toggleDarkMode" :class="{
              'p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors flex items-center justify-center':
                darkMode,
            }">
              <UIcon :name="darkMode ? 'i-heroicons-sun' : 'i-heroicons-moon'" class="text-xl" />
            </button>
            <button @click="toggleTerminal"
              class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors flex items-center"
              :class="{ 'bg-primary-100 dark:bg-primary-900': showTerminal }">
              <UIcon name="i-heroicons-command-line" class="text-xl" />
            </button>

            <div class="relative inline-block text-left">
              <label for="lang" class="sr-only">Choisissez votre langue</label>
              <select id="lang"
                class="block appearance-none w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white py-2 px-4 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="fr">🇫🇷 Français</option>
                <option value="en">en English</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <main class="container mx-auto p-6">
        <NuxtPage />
      </main>


      <!-- Pied de page -->
      <footer class="bg-white dark:bg-gray-800 shadow-md py-12 mt-auto">
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
                <a href="https://github.com/chiracmichoagan" target="_blank" rel="noopener noreferrer"
                  class="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                  <UIcon name="i-simple-icons-github" class="text-2xl" />
                </a>
                <a href="https://linkedin.com/chiracmichoagan" target="_blank" rel="noopener noreferrer"
                  class="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                  <UIcon name="i-simple-icons-linkedin" class="text-2xl" />
                </a>
                <a href="https://x.com/@teixeira00125" target="_blank" rel="noopener noreferrer"
                  class="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                  <UIcon name="i-simple-icons-twitter" class="text-2xl" />
                </a>
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

      <!-- Terminal flottant -->
      <div v-if="showTerminal"
        class="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 shadow-lg transition-all duration-300"
        :class="{ 'h-96': showTerminal, 'h-0': !showTerminal }">
        <div class="container mx-auto p-4 h-full">
          <div class="flex justify-between items-center mb-2">
            <h3 class="text-white font-semibold">Terminal Interactif</h3>
            <button @click="toggleTerminal" class="text-white hover:text-blue-600">
              <UIcon name="i-heroicons-x-mark" class="text-xl" />
            </button>
          </div>
          <TerminalExperience v-if="showTerminal" class="h-[calc(100%-2rem)]" />
        </div>
      </div>

      <!-- Chat Bot Assistant -->
      <ChatBot />
    </div>
  </ClientOnly>
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

<style>
.router-link-active {
  color: var(--color-primary-500);
  font-weight: 600;
}
</style>
