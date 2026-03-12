<template>
  <div>
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-3xl font-bold mb-4 fade-in text-primary">
            Mes Projets
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-400 mb-8 fade-in delay-100">
            Une collection de mes travaux et projets personnels
          </p>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="mt-8 sm:mt-10">
          <h3
            class="font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl font-normal mb-4">
            Rechercher des projets par titre ou filtrer par catégorie
          </h3>
          <div class="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-2">
            <div class="flex justify-between gap-2">
              <span
                class="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer">
                <UIcon name="i-heroicons-magnifying-glass" data-feather="search"
                  class="text-ternary-dark dark:text-ternary-light" />
              </span><input v-model="search"
                class="font-general-medium pl-3 pr-1 sm:px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                id="name" name="name" type="search" required placeholder="Rechercher des projets..."
                aria-label="Name" />
            </div>
            <ProjectsFilter @change="selectedProject = $event" />
          </div>
        </div>

        <div class="max-w-6xl mx-auto mt-8">
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(project, index) in filteredProjects" :key="index" class="project-card fade-in"
              :class="`delay-${(index % 3) * 100}`">
              <UCard class="h-full flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <template #header>
                  <div class="overflow-hidden">
                    <img :src="project.image" :alt="project.title"
                      class="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110" />
                  </div>
                </template>
                <div class="flex-grow">
                  <h3 class="text-xl font-semibold mb-2">
                    {{ project.title }}
                  </h3>
                  <p class="text-gray-600 dark:text-gray-400 mb-4">
                    {{ project.description }}
                  </p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <UBadge v-for="tech in project.technologies" :key="tech" color="primary" variant="soft">
                      {{ tech }}
                    </UBadge>
                  </div>
                  <span class="
                font-general-medium
                text-lg text-ternary-dark
                dark:text-ternary-light
              ">{{ project.category }}</span>
                </div>
                <template #footer>
                  <div class="flex justify-between">
                    <UButton v-if="project.demo" :to="project.demo" target="_blank" color="blue">
                      Démo
                    </UButton>
                    <UButton v-if="project.github" :to="project.github" target="_blank" color="gray" variant="ghost">
                      <UIcon name="i-simple-icons-github" class="mr-1" /> GitHub
                    </UButton>
                  </div>
                </template>
              </UCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const search = ref("");
const selectedProject = ref("");

const projects = [
  
  {
    title: "Calculatrice scientifique demo",
    description:
      "Une plateforme (demo) de calculatrice scientifique qui permet de réaliser des opérations mathématiques de base.",
    image: "assets/my_calculator.png",
    technologies: ["HTML", "tailwinds css", "JavaScript (TypeScript)"],
    demo: "https://mycalculator-beta.vercel.app/",
    github: "https://github.com/chiracmichoagan/mycalculator",
  },
  {
    title: "flamework CRUD app-vuejs (demo)",
    description:
      "Une plateforme (demo) de gestion de tâches (CRUD) qui permet de créer, lire, mettre à jour et supprimer des tâches.",
    image: "assets/framework-vue.png",
    technologies: [
      "HTML",
      "tailwinds css",
      "vuesjs",
      "JavaScript (TypeScript) websocket",
    ],
    demo: "https://my-vue-crud-framework.vercel.app/",
    github: "https://github.com/chiracmichoagan/my-vue-crud-framework.git",
  },
  {
    title: "Un site web de gestion de nottes",
    description:
      "Une plateforme  de gestion de notes (CRUD) qui permet d'ajouter, lire, mettre à jour , supprimer et enregistrement des notes via stockage local.",
    image: "assets/gestion_de_notes.png",
    technologies: [
      "HTML",
      "tailwinds css",
      "vuesjs",
      "(TypeScript)",
    ],
    demo: "https://gestion-notes-woad.vercel.app/",
    github: "https://github.com/chiracmichoagan/Gestion-notes.git",
  },
  {
    title: "Digital Clock",
    description:
      "📅 Horloge numérique — affiche la date , les jours, les heures, les minutes et les secondes en temps réel",
    image: "assets/digital-clock.png",
    technologies: [
      "CSS",
      "vuesjs",
    ],
    demo: "https://digital-clock-two-blush.vercel.app/",
    github: "https://github.com/chiracmichoagan/Digital-Clock.git",
  },
  {
    title: "🎲 Dice Roller",
    description:
      "🎲 Dice Roller — générer des nombres aléatoires avec l'interface utilisateur",
    image: "assets/diceRoller.png",
    technologies: [
      "tailwinds css",
      "vuesjs",
      "game-icons",
      "vite"
    ],
    demo: "https://dice-roller-topaz-zeta.vercel.app/",
    github: "https://github.com/chiracmichoagan/dice-roller.git",
  },
  {
    title: "📋 Application Quiz",
    description:
      "📋 Application Quiz — questions à choix multiples avec suivi des scores",
    image: "assets/ApplicationQuiz.png",
    technologies: [
      "tailwinds css",
      "SCSS OU SASS",
      "vuesjs",
      "nodes",
      "vite"
    ],
    demo: "https://web-quizz-three.vercel.app/",
    github: "https://github.com/chiracmichoagan/web-quizz.git",
  },
  {
    title: "🎶🎵 App web Music",
    description:
      "📋 Application web de music Demo",
    image: "assets/app-music.png",
    technologies: [
      "tailwinds css",
      "vuesjs",
      "vite"
    ],
    demo: "https://app-music-build-avec-vue-js.vercel.app/",
    github: "https://github.com/chiracmichoagan/app-music-build-avec-vue.js.git",
  },
];

const filteredProjects = computed(() => {
  if (!selectedProject.value) return filterProjectsBySearch.value;
  return filterProjectsBySearch.value.filter((item) => {
    const category =
      item.category?.charAt(0).toUpperCase() + item.category?.slice(1);
    return category.includes(selectedProject.value);
  });
});

const filterProjectsBySearch = computed(() => {
  if (!search.value) return projects;

  const searchTerm = search.value.toLowerCase();
  return projects.filter((project) => {
    return (
      project.title.toLowerCase().includes(searchTerm) ||
      project.description.toLowerCase().includes(searchTerm) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm)
      )
    );
  });
});

const filteredProjectsByCategory = computed(() => {
  if (!selectedProject.value) return projects;
  return projects.filter((item) => {
    const category =
      item.category?.charAt(0).toUpperCase() + item.category?.slice(1);
    return category.includes(selectedProject.value);
  });
});

onMounted(() => {
  if (process.client) {
    import("gsap").then(({ gsap }) => {
      gsap.from(".fade-in", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });
    });
  }
});
</script>

<style>
.project-card {
  transition: transform 0.3s ease-in-out;
}

.project-card:hover {
  transform: translateY(-5px);
}

.fade-in,
.UButton,
.UBadge {
  transition: all 0.3s ease-in-out;
}

.overflow-hidden {
  overflow: hidden;
}

.UInput {
  transition: all 0.3s ease;
}

.UInput:focus-within {
  transform: scale(1.02);
}

.UBadge:hover {
  transform: scale(1.1);
}

.UButton {
  position: relative;
  overflow: hidden;
}

.UButton::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.UButton:hover::after {
  transform: translateX(0);
}
</style>
