<template>
  <div>
    <section class="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">

<!-- <h1 class="font-montserrat text-2xl">Hello world!</h1> -->
      <div class="">


        <div class="flex justify-around items-center flex-col md:flex-row gap-8">
          <!-- partie texte -->
          <div class="md:w-1/2 flex flex-col items-start justify-start">
            <h1 class="text-5xl mb-8 font-montserrat fade-in font-monst font-extrabold text-[49px] leading-[64px] text-black dark:text-white">
              Je suis,
              <span class="text-primary-500">Dona Chirac MICHOAGAN</span>
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-400  fade-in delay-100">
              développeur dynamique full-stack et Consultant SEO freelance.
              j’optimise ta présence locale pour générer du chiffre, pas juste des clics.
            </p>
            <p class="text-xl text-gray-600 dark:text-gray-400  fade-in delay-100">
              Tu veux des appels, des rendez-vous, des ventes. <br>
              Pas juste être bien positionné.
            </p>
            <p class="text-xl text-gray-600 dark:text-gray-400  fade-in delay-100">
              En tant que consultant SEO dans le Var et développeur full-stack, je t’aide à créer tes applications
              mobiles et sites web qui respectent ton entreprise puis à transformer ta visibilité en clients réels grâce
              à une stratégie SEO local + IA.

            </p>
            <p class="text-xl text-gray-600 dark:text-gray-400  fade-in delay-100">
              Mon approche ? Actionnable, locale, orientée ROI. Pas de promesse floue : on parle d’appels clients,
              réservations et chiffre d’affaires.

            </p>
            <p class="text-xl text-gray-600 dark:text-gray-400  fade-in delay-100">
              Tu es entrepreneur, commerçant, restaurateur , indépendant ou autres au Bénin ou à l'étranger ? Tu es au
              bon endroit.
            </p>
          </div>





          <!-- partie image -->
          <div class="">
            <!-- <img src="/assets/photo-chirac-dona-michoagan.png" alt="Dona Chirac MICHOAGAN"
              class="w-500 h-500  fade-in delay-200 object-cover no-repeat" /> -->
            <img src="/public/assets/photo-chirac-dona.jpg" alt="Dona Chirac MICHOAGAN"
              class="w-2000 h-80  fade-in delay-200 object-cover no-repeat" />
          </div>




        </div>



      </div>


     
    </section>

     <div class="flex justify-center space-x-4 mb-8 fade-in delay-200">
        <UButton to="/projects" color="blue" size="lg">
          Voir mes projets ->
        </UButton>
        <UButton to="/contact" color="primary" variant="outline" size="lg">
          Me contacter
        </UButton>
      </div>

    <section class="py-16 mt-7 ">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-8 text-center fade-in">
            Mes compétences
          </h2>
          <div class="grid md:grid-cols-3 gap-8">
            <UCard class="fade-in delay-100">
              <template #header>
                <div class="p-4 flex justify-center">
                  <UIcon name="i-heroicons-code-bracket" class="text-5xl text-primary-500" />
                </div>
              </template>
              <h3 class="text-xl font-semibold mb-2">Développement Web</h3>
              <p class="text-gray-600 dark:text-gray-400">
                Création d'interfaces utilisateur intuitives, dynamiques et professionnelles avec les technologies
                modernes.
              </p>
            </UCard>

            <UCard class="fade-in delay-200">
              <template #header>
                <div class="p-4 flex justify-center">
                  <UIcon name="i-heroicons-shield-check" class="text-5xl text-primary-500" />
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
                  <UIcon name="i-heroicons-device-phone-mobile" class="text-5xl text-primary-500" />
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
            <UCard class="fade-in delay-100" v-for="(project, index) in featuredProjects" :key="index">
              <template #header>
                <img :src="`http://localhost:3000/${project.image}`" :alt="project.title"
                  class="w-full h-48 object-cover" />
              </template>
              <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                {{ project.description }}
              </p>
              <template #footer>
                <UButton :to="`/projects/${index}`" color="primary" variant="ghost">
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
