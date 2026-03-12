<header class="p-4 bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center">
      <NuxtLink to="/" class="text-xl font-bold">DONA Portfolio</NuxtLink>

      <!-- Navigation  -->
      <nav class="flex items-center space-x-6 relative">
        <!-- Menu desktop (affiché uniquement sur les écrans larges) -->
        <div class="hidden md:flex items-center space-x-6">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="hover:text-primary-500 transition-colors flex items-center gap-2"
            active-class="text-primary-500 font-semibold"
          >
            <UIcon v-if="item.icon" :name="item.icon" class="text-lg" />
            {{ item.label }}
          </NuxtLink>
        </div>
        <!-- Icône de menu  ( uniquement sur mobile) -->
        <div @click="toggleMenu" class="md:hidden cursor-pointer mt-2">
          <UIcon name="i-heroicons-bars-3" class="text-2xl" />
        </div>

        <!-- Menu mobile déroulant -->
        <div 
          v-show="isMenuOpen" 
          class="absolute top-12 right-0 bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 flex flex-col space-y-4 md:hidden transition-all duration-300 ease-in-out z-50 w-48"
        >
          <NuxtLink 
            v-for="item in navItems" 
            :key="item.to"
            :to="item.to"
            class="hover:text-primary-500 transition-colors flex items-center gap-2"
            active-class="text-primary-500 font-semibold"
            @click="closeMenu"
          >
            <UIcon v-if="item.icon" :name="item.icon" class="text-lg" />
            {{ item.label }}
          </NuxtLink>
        </div>
      </nav>

      <div class="flex items-center space-x-4">
        <button
          @click="toggleDarkMode"
          class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors flex items-center justify-center"
        >
          <UIcon
            :name="darkMode ? 'i-heroicons-sun' : 'i-heroicons-moon'"
            class="text-xl"
          />
        </button>
        <button
          @click="toggleTerminal"
          class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors flex items-center"
          :class="{ 'bg-primary-100 dark:bg-primary-900': showTerminal }"
        >
          <UIcon name="i-heroicons-command-line" class="text-xl" />
        </button>
      </div>
    </div>
  </header>
