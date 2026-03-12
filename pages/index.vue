<template>
  <div>
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl font-bold mb-6 fade-in">
            Salut,
            je suis
            <span class="text-primary-500">Dona Chirac MICHOAGAN</span>
          </h1>
          <p
            class="text-xl text-gray-600 dark:text-gray-400 mb-8 fade-in delay-100"
          >
            Développeur web full-stack passionné par l'optimisation des performances et la création d'interfaces utilisateur intuitives, disponible pour contribuer à des projets innovants dans un environnement collaboratif."
          </p>
          <div class="flex justify-center space-x-4 fade-in delay-200">
            <UButton to="/projects" color="blue" size="lg">
              Voir mes projets ->
            </UButton>
            <UButton to="/contact" color="primary" variant="outline" size="lg">
              Me contacter
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-8 text-center fade-in">
           Mes compétences
          </h2>
          <div class="grid md:grid-cols-3 gap-8">
            <UCard class="fade-in delay-100">
              <template #header>
                <div class="p-4 flex justify-center">
                  <UIcon
                    name="i-heroicons-code-bracket"
                    class="text-5xl text-primary-500"
                  />
                </div>
              </template>
              <h3 class="text-xl font-semibold mb-2">Développement Web</h3>
              <p class="text-gray-600 dark:text-gray-400">
              Création d'interfaces utilisateur intuitives, dynamiques et professionnelles avec les technologies modernes.
              </p>
            </UCard>

            <UCard class="fade-in delay-200">
              <template #header>
                <div class="p-4 flex justify-center">
                  <UIcon
                    name="i-heroicons-shield-check"
                    class="text-5xl text-primary-500"
                  />
                </div>
              </template>
              <h3 class="text-xl font-semibold mb-2">
               Analyse et gestion de sécurité des systèmes
              </h3>
              <p class="text-gray-600 dark:text-gray-400">
                Sécurisation des systèmes informatiques et optimisation des performances réseau !
              </p>
            </UCard>

            <UCard class="fade-in delay-300">
              <template #header>
                <div class="p-4 flex justify-center">
                  <UIcon
                    name="i-heroicons-device-phone-mobile"
                    class="text-5xl text-primary-500"
                  />
                </div>
              </template>
              <h3 class="text-xl font-semibold mb-2">Développement Mobile</h3>
              <p class="text-gray-600 dark:text-gray-400">
               Création d'applications mobiles multiplateformes fonctionnant sur tous les appareils.
              </p>
            </UCard>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-8 fade-in">Projets à la une</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <UCard
              class="fade-in delay-100"
              v-for="(project, index) in featuredProjects"
              :key="index"
            >
              <template #header>
                <img
                  :src="`http://localhost:3000/${project.image}`"
                  :alt="project.title"
                  class="w-full h-48 object-cover"
                />
              </template>
              <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                {{ project.description }}
              </p>
              <template #footer>
                <UButton
                  :to="`/projects/${index}`"
                  color="primary"
                  variant="ghost"
                >
                  Voir les détails
                </UButton>
              </template>
            </UCard>
          </div>
          <div class="mt-8 fade-in delay-300">
            <UButton to="/projects" color="blue">
             Voir tous les projets
            </UButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const featuredProjects = [
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
];

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
