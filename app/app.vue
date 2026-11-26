<template>
  <!-- Debut Header -->
  <header class="container p-4 bg-[#FFFCF5] dark:bg-gray-800 shadow-2xl sticky top-0 z-50">
    <div class="container mx-auto flex justify-around items-center">

      <NuxtLink to="/" class="text-xl font-bold flex items-center justify-center gap-2">
        <!-- drapeau Cap-Vert -->
        <img src="/assets/image_dona.png" class="w-10 h-10 rounded-full" />
      </NuxtLink>

      <!-- Menu desktop (affiché uniquement sur les écrans larges) -->
      <nav class="flex items-center space-x-6 relative">
        <div class="hidden md:flex items-center flex justify-center gap-8">
          <NuxtLink to="/"
            class="text-gray-500 hover:text-black size-16 leading-5 font-bold transition-colors flex items-center gap-2"
            active-class="!text-[#E78318] font-semibold">
            Accueil
          </NuxtLink>



          <ul class="flex space-x-6 ">
            <!-- Élément parent avec la classe 'group' -->
            <li class="relative group  space-x-6 text-gray-500">
              <button class="flex items-center size-16 leading-5 font-bold hover:text-black focus:outline-none">
                Services
                <!-- Icône flèche (optionnelle) -->
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              <!-- Sous-menu : masqué par défaut, affiché au survol du groupe -->
              <ul
                class="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-50">
                <li>
                  <NuxtLink to="/servicesdesignweb" class="block px-4 py-2 hover:bg-[#E78318] hover:text-white">Design
                    Web</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/servicesdeveloppementweb" class="block px-4 py-2 hover:bg-[#E78318] hover:text-white">
                    Développement</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/servicesmarketingseo" class="block px-4 py-2 hover:bg-[#E78318] hover:text-white">
                    Marketing SEO</NuxtLink>
                </li>
              </ul>


            </li>
          </ul>




          <NuxtLink to="/about"
            class="text-gray-500 whitespace-nowrap size-16 leading-5 font-bold hover:text-black transition-colors  flex items-center  gap-2"
            active-class="!text-[#E78318] font-semibold">
            À propos
          </NuxtLink>


          <NuxtLink to="/projects"
            class="text-gray-500 size-16 leading-5 font-bold hover:text-black transition-colors flex items-center gap-2"
            active-class="!text-[#E78318] font-semibold">
            Projets
          </NuxtLink>


          <NuxtLink to="/contact"
            class="text-gray-500 size-16 leading-5 font-bold hover:text-black transition-colors flex items-center gap-2"
            active-class="!text-[#E78318] font-semibold">
            Contacts
          </NuxtLink>



          <ul class="flex space-x-6">
            <!-- Élément parent avec la classe 'group' -->
            <li class="relative group  space-x-6 text-gray-500">
              <button class="flex items-center size-16 leading-5 font-bold hover:text-black focus:outline-none">
                Blog
                <!-- Icône flèche (optionnelle) -->
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              <!-- Sous-menu : masqué par défaut, affiché au survol du groupe -->
              <ul class="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg 
                 invisible group-hover:visible opacity-0 group-hover:opacity-100 
                 transition-all duration-300 z-50">
                <li>
                  <NuxtLink to="/" class="block px-4 py-2 hover:bg-[#E78318] hover:text-white">
                    Articles
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/tutoriels" class="block px-4 py-2 hover:bg-[#E78318] hover:text-white">
                    Tutoriels
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/actualites" class="block px-4 py-2 hover:bg-[#E78318] hover:text-white">
                    Actualités
                  </NuxtLink>
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </nav>

      <!-- boutton Mode sombre/clair -->
      <div class="flex items-center space-x-4">
        <button @click="toggleDarkMode"
          :class="{ 'p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors flex items-center justify-center': darkMode, }">
          <UIcon :name="darkMode ? 'i-heroicons-sun' : 'i-heroicons-moon'" class="text-xl" />
        </button>
      </div>


      <!-- Icône de menu (uniquement sur mobile) -->
      <div @click="toggleMenu" class="md:hidden cursor-pointer mt-2">
        <UIcon name="i-heroicons-bars-3-solid" class="w-10 h-10" />
      </div>

      <!-- 1. Backdrop plein écran derrière le menu (z-40) -->
      <div v-show="isMenuOpen" @click="isMenuOpen = false" class="fixed inset-0 z-40 bg-black/40 md:hidden"></div>

      <!-- 2. Menu mobile déroulant (affiché sur mobile) -->
      <div v-show="isMenuOpen"
        class="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md rounded-b-lg p-4 flex flex-col space-y-4 md:hidden transition-all duration-300 ease-in-out w-full">
        <!-- Bouton fermer (aligné à droite) -->
        <div class="flex justify-end md:hidden">
          <button @click="isMenuOpen = false" class="px-2 text-lg font-bold cursor-pointer">
            ✕
          </button>
        </div>

        <nav class="flex flex-col  justify-center p-4 gap-4 items-center">
          <NuxtLink to="/" @click="isMenuOpen = false"
            class="text-gray-500 hover:text-black leading-5 font-bold transition-colors flex items-center gap-2"
            active-class="!text-[#E78318] font-semibold">
            Accueil
          </NuxtLink>

          <ul class="flex space-x-6">
            <li class="relative group space-x-6 text-gray-500">
              <button class="flex items-center leading-5 font-bold hover:text-black focus:outline-none">
                Services
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              <ul
                class="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-50">
                <li>
                  <NuxtLink to="/servicesdesignweb" @click="isMenuOpen = false"
                    class="block px-4 py-2 hover:bg-[#E78318] hover:text-white">
                    Design Web
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/servicesdeveloppementweb" @click="isMenuOpen = false"
                    class="block px-4 py-2 hover:bg-[#E78318] hover:text-white">
                    Développement
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/servicesmarketingseo" @click="isMenuOpen = false"
                    class="block px-4 py-2 hover:bg-[#E78318] hover:text-white">
                    Marketing SEO
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>

          <NuxtLink to="/about" @click="isMenuOpen = false"
            class="text-gray-500 whitespace-nowrap leading-5 font-bold hover:text-black transition-colors flex items-center gap-2"
            active-class="!text-[#E78318] font-semibold">
            À propos
          </NuxtLink>

          <NuxtLink to="/projects" @click="isMenuOpen = false"
            class="text-gray-500 leading-5 font-bold hover:text-black transition-colors flex items-center gap-2"
            active-class="!text-[#E78318] font-semibold">
            Projets
          </NuxtLink>

          <NuxtLink to="/contact" @click="isMenuOpen = false"
            class="text-gray-500 leading-5 font-bold hover:text-black transition-colors flex items-center gap-2"
            active-class="!text-[#E78318] font-semibold">
            Contacts
          </NuxtLink>

          <ul class="flex space-x-6">
            <li class="relative group space-x-6 text-gray-500">
              <button class="flex items-center leading-5 font-bold hover:text-black focus:outline-none">
                Blog
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              <ul
                class="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-50">
                <li>
                  <NuxtLink to="/" @click="isMenuOpen = false"
                    class="block px-4 py-2 hover:bg-[#E78318] hover:text-white">
                    Articles
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/tutoriels" @click="isMenuOpen = false"
                    class="block px-4 py-2 hover:bg-[#E78318] hover:text-white">
                    Tutoriels
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/actualites" @click="isMenuOpen = false"
                    class="block px-4 py-2 hover:bg-[#E78318] hover:text-white">
                    Actualités
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

    </div>
  </header>
  <!-- Fin Header -->

  <!-- Debut main -->
  <main>
    <NuxtPage />
  </main>
  <!-- Fin main -->

  <!-- Debut Pied de page -->
  <footer class="bg-[#0A0A0A] border-t border-white/8">
    <div class="max-w-6xl mx-auto px-6 pt-12 pb-8">
      <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        <div>
          <p class="text-white/80 font-bold text-sm mb-3">M Chirac Dona</p>
          <p class="text-white/55 text-xs leading-relaxed mb-4">Développeur web freelance — création de sites sur-mesure
            avec HTML, CSS, JAVASCRIPT,PHP
            React, VUES.js, WordPress ... Disponible partout au Bénin en remote.</p>
          <NuxtLink to="mailto:michoaganchiracdona@gmail.com" class="text-blue-400 text-xs font-medium hover:underline">
            michoaganchiracdona@gmail.com</NuxtLink> <br>
          <NuxtLink to="tel:+2290153947916" class="text-blue-400 text-xs font-medium hover:underline">+229 01 53947916
          </NuxtLink>
        </div>



        <div>
          <p class="text-white/55 text-xs font-semibold uppercase tracking-wider mb-4">Navigation</p>
          <ul class="space-y-2">
            <li>
              <NuxtLink class="text-white/50 text-xs hover:text-white/80 transition-colors" to="/">Accueil </NuxtLink>
            </li>
            <li>
              <NuxtLink class="text-white/50 text-xs hover:text-white/80 transition-colors" to="/about">À propos
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="text-white/50 text-xs hover:text-white/80 transition-colors" to="/servicesdeveloppementweb">Services
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="text-white/50 text-xs hover:text-white/80 transition-colors" to="/projects">
                Réalisations </NuxtLink>
            </li>
            <li>
              <NuxtLink class="text-white/50 text-xs hover:text-white/80 transition-colors" to="/tarifs">Tarifs
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="text-white/50 text-xs hover:text-white/80 transition-colors" to="/contact">Contact
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <p class="text-white/55 text-xs font-semibold uppercase tracking-wider mb-4">Secteurs</p>
          <ul class="space-y-2">
            <li>
              <NuxtLink external class="text-white/50 text-xs hover:text-white/80 transition-colors" to="/projets_demo/Site_web_restaurant.html" target="_blank" rel="noopener noreferrer">
                Site web
                restaurant
              </NuxtLink>
            </li>
            <li>
              <NuxtLink external class="text-white/50 text-xs hover:text-white/80 transition-colors" to="/projets_demo/Site_web_medecin.html" target="_blank" rel="noopener noreferrer">
                Site
                web médecin
              </NuxtLink>
            </li>
            <li>
              <NuxtLink external class="text-white/50 text-xs hover:text-white/80 transition-colors"
                to="/projets_demo/Site_web_avocat.html" target="_blank" rel="noopener noreferrer">Site web
                avocat
              </NuxtLink>
            </li>
            <li>
              <NuxtLink external class="text-white/50 text-xs hover:text-white/80 transition-colors" to="/projets_demo/Site_web_mecanicien.html" target="_blank" rel="noopener noreferrer">Site web
                mécanicien
              </NuxtLink>
            </li>
            <li>
              <NuxtLink external class="text-white/50 text-xs hover:text-white/80 transition-colors" to="/projets_demo/Site_web_fleuriste.html" target="_blank" rel="noopener noreferrer">
                Site web fleuriste
              </NuxtLink>
            </li>
            <li>
              <NuxtLink external class="text-white/50 text-xs hover:text-white/80 transition-colors" to="/projets_demo/Site_web_concessionnaire.html" target="_blank" rel="noopener noreferrer">
                Site web concessionnaire
              </NuxtLink>
            </li>
            <!-- <li>
              <NuxtLink class="text-white/50 text-xs hover:text-white/80 transition-colors" to="/permis-bateaux">Permis
                bateaux </NuxtLink>
            </li> -->
          </ul>
        </div>
        <div>
          <p class="text-white/55 text-xs font-semibold uppercase tracking-wider mb-4">Guides</p>
          <ul class="space-y-2">
            <li>
              <NuxtLink class="text-white/50 text-xs hover:text-white/80 transition-colors"
                to="/guides/freelance-ou-agence-web">Freelance ou agence web ? </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <p class="text-white/55 text-xs font-semibold uppercase tracking-wider mb-4">Terminal</p>
          <button @click="toggleTerminal"
            class="p-2 hover:bg-gray-100 bg-white dark:hover:bg-gray-700 rounded-full transition-colors flex items-center"
            :class="{ 'bg-primary-100 dark:bg-primary-900': showTerminal }">
            <UIcon name="i-heroicons-command-line" class="text-xl" />
          </button>
        </div>
      </div>



      <div class="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-xs text-white/50">© 2026 MICHOAGAN Chirac Dona — Développeur Web Freelance | React, Next.js,
          WordPress | Bénin
        </p>



        <div class="flex items-center gap-6">
          <NuxtLink class="text-xs text-white/50 hover:text-white/80 transition-colors" to="/mentions-legales">Mentions
            légales </NuxtLink>
          <NuxtLink class="text-xs text-white/50 hover:text-white/80 transition-colors"
            to="/confidentialite">Confidentialité </NuxtLink>

          <NuxtLink to="https://linkedin.com/in/antoine-gueguen" target="_blank" rel="noopener noreferrer"
            class="text-white/50 hover:text-[#0066FF] transition-colors" aria-label="LinkedIn Antoine Gueguen"><svg
              class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z">
              </path>
            </svg> </NuxtLink>
          <NuxtLink to="https://github.com/chiracmichoagan" target="_blank" rel="noopener noreferrer"
            class="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
            <UIcon name="i-simple-icons-github" class="text-2xl" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
  <!-- Fin Pied de page -->

  <!-- Terminal flottant -->
  <div v-if="showTerminal" class="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 shadow-lg transition-all duration-300"
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
  <!-- Fin Terminal flottant -->

  <!-- Chat Bot Assistant -->
  <ChatBot />
  <!-- Fin Chat Bot Assistant -->
</template>

<script setup>
import { ref } from "vue";
import ChatBot from "~/components/ChatBot.vue";

const darkMode = ref(false);
const showTerminal = ref(false);
const isMenuOpen = ref(false);

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

<style scoped>
.router-link-active {
  color: var(--color-primary-500);
  font-weight: 600;
}
</style>
