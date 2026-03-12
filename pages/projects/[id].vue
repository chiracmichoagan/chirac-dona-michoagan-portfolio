<template>
  <div>
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <UButton to="/projects" color="gray" variant="ghost" class="mb-6">
            <UIcon name="i-heroicons-arrow-left" class="mr-2" /> Retour aux
            projets
          </UButton>

          <div v-if="project" class="fade-in">
            <img
              :src="`http://localhost:3000/${project.image}`"
              :alt="project.title"
              class="w-full h-64 object-cover rounded-lg mb-6"
            />

            <h1 class="text-4xl font-bold mb-4">{{ project.title }}</h1>

            <div class="flex flex-wrap gap-2 mb-6">
              <UBadge
                v-for="tech in project.technologies"
                :key="tech"
                color="primary"
                variant="soft"
              >
                {{ tech }}
              </UBadge>
            </div>

            <div class="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p>{{ project.description }}</p>
              <p>{{ project.longDescription }}</p>
            </div>

            <div class="flex flex-wrap gap-4">
              <UButton
                v-if="project.demo"
                :to="project.demo"
                target="_blank"
                color="primary"
              >
                Voir la démo
              </UButton>
              <UButton
                v-if="project.github"
                :to="project.github"
                target="_blank"
                color="gray"
                variant="ghost"
              >
                <UIcon name="i-simple-icons-github" class="mr-1" /> GitHub
              </UButton>
            </div>
          </div>

          <div v-else class="text-center py-12">
            <p class="text-xl text-gray-600 dark:text-gray-400">
              Projet non trouvé
            </p>
            <UButton to="/projects" color="primary" class="mt-4">
              Voir tous les projets
            </UButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const route = useRoute();
const id = parseInt(route.params.id);

// Données des projets (idéalement, ces données devraient être partagées via un store ou une API)
const allProjects = [
  {
    title: "Calculatrice scientifique demo",
    description:
      "Une plateforme (demo) de calculatrice scientifique qui permet de réaliser des opérations mathématiques de base.",
    image: "assets/my_calculator.png",
    technologies: ["HTML", "tailwinds css", "JavaScript (TypeScript)"],
    demo: "https://mycalculator-beta.vercel.app/",
    github: "https://github.com/chiracmichoagan/mycalculator",
  },
];

const project = computed(() => {
  return allProjects[id] || null;
});

// Animation GSAP
onMounted(() => {
  if (process.client) {
    import("gsap").then(({ gsap }) => {
      gsap.from(".fade-in", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });
    });
  }
});
</script>
