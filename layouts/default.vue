<template>
  <div class="min-h-screen flex flex-col">
    <UHeader class="border-b border-gray-200 dark:border-gray-800">
      <template #left>
        <NuxtLink to="/" class="font-bold text-xl">My Portfolio</NuxtLink>
      </template>
      <template #right>
        <UHorizontalNavigation>
          <ULink to="/" active-class="text-primary-500 dark:text-primary-400" inactive-class="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400">
            Home
          </ULink>
          <ULink to="/about" active-class="text-primary-500 dark:text-primary-400" inactive-class="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400">
            About
          </ULink>
          <ULink to="/projects" active-class="text-primary-500 dark:text-primary-400" inactive-class="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400">
            Projects
          </ULink>
          <ULink to="/contact" active-class="text-primary-500 dark:text-primary-400" inactive-class="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400">
            Contact
          </ULink>
          <LanguageSelector />
        </UHorizontalNavigation>
        <UButton
          color="gray"
          variant="ghost"
          icon="i-heroicons-moon-20-solid"
          @click="toggleDark"
          v-if="!isDark"
        />
        <UButton
          color="gray"
          variant="ghost"
          icon="i-heroicons-sun-20-solid"
          @click="toggleDark"
          v-else
        />
      </template>
    </UHeader>

    <main class="flex-grow">
      <slot />
    </main>

    <UFooter class="border-t border-gray-200 dark:border-gray-800">
      <template #left>
        <div class="text-sm text-gray-600 dark:text-gray-400">
          © {{ new Date().getFullYear() }} My Portfolio
        </div>
      </template>
      <template #right>
        <div class="flex space-x-4">
          <UButton
            color="gray"
            variant="ghost"
            icon="i-simple-icons-github"
            to="https://github.com/yourusername"
            target="_blank"
          />
          <UButton
            color="gray"
            variant="ghost"
            icon="i-simple-icons-linkedin"
            to="https://linkedin.com/in/yourusername"
            target="_blank"
          />
          <UButton
            color="gray"
            variant="ghost"
            icon="i-simple-icons-twitter"
            to="https://twitter.com/yourusername"
            target="_blank"
          />
        </div>
      </template>
    </UFooter>
  </div>
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
const toggleDark = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>