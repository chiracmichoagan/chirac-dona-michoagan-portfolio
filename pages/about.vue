<template>
  <div>
    <UContainer>
      <section class="py-20 bg-gray-50 dark:bg-gray-900 rounded-xl mb-8">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <!-- <h1 class="text-4xl font-bold mb-8 text-center fade-in">
              <UBadge color="primary" size="lg" class="mb-4">À propos de moi</UBadge>
            </h1> -->
            <div class="flex flex-col md:flex-row gap-8 items-center">
              <div class="md:w-1/3 fade-in delay-100 m-3">
                <div
                  class="w-[250px] h-[250px] relative overflow-hidden rounded-full"
                >
                  <img
                    src="/assets/image_dona.png"
                    alt="Profile Picture"
                    class="w-full h-full object-cover border-4 border-primary-500 shadow-2xl hover:scale-105 transition-transform duration-500 rounded-xl"
                  />
                </div>
              </div>
              <div class="md:w-2/3 fade-in delay-200">
                <UCard>
                  <template #header>
                    <div class="flex items-center gap-2">
                      <UIcon
                        name="i-heroicons-user-circle"
                        class="text-2xl text-primary-500"
                      />
                      <h3 class="text-xl font-semibold">Présentation</h3>
                    </div>
                  </template>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Bonjour, je suis un développeur web full-stack passionné,
                    fort d'une expérience de près d'un ans dans la création de
                    sites web et d'applications. Mon expertise réside
                    principalement dans le développement backend, avec une
                    maîtrise des technologies telles que Node.js et SpringBoot.
                  </p>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Mon domaine d'intérêt s'étend également à la cybersécurité,
                    et je suis constamment en quête d'apprentissage pour me
                    perfectionner dans les nouvelles technologies et renforcer
                    mes compétences techniques.
                  </p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    En dehors de mon activité professionnelle, je nourris une
                    grande passion pour la randonnée, la lecture, les voyages et
                    l'exploration de nouvelles innovations technologiques.
                  </p>
                </UCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16">
        <UCard class="mb-8">
          <template #header>
            <div class="flex items-center gap-2 mb-4">
              <UIcon
                name="i-heroicons-briefcase"
                class="text-2xl text-primary-500"
              />
              <h2 class="text-3xl font-bold">Mon Parcours</h2>
            </div>
          </template>

          <div class="space-y-6">
            <div
              v-for="(item, index) in journey"
              :key="index"
              class="fade-in"
              :class="`delay-${index * 100}`"
            >
              <div
                class="flex flex-col md:flex-row border-l-4 border-primary-500 pl-4 pb-6"
              >
                <div class="md:w-1/4 mb-2 md:mb-0">
                  <UBadge color="primary" variant="soft" size="lg">{{
                    item.period
                  }}</UBadge>
                </div>
                <div class="md:w-3/4">
                  <div class="flex items-center gap-2 mb-2">
                    <UIcon
                      name="i-heroicons-academic-cap"
                      class="text-primary-500"
                    />
                    <h4 class="text-lg font-semibold">{{ item.title }}</h4>
                  </div>
                  <p class="text-gray-600 dark:text-gray-400 mb-2">
                    <UIcon
                      name="i-heroicons-building-office"
                      class="inline mr-2"
                    />
                    {{ item.company }}
                  </p>
                  <p class="text-gray-600 dark:text-gray-400">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </UCard>
      </section>
      <!-- compétences -->
      <section class="py-16 bg-gray-50 dark:bg-gray-900 rounded-xl">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <div class="flex items-center gap-2 mb-8">
              <UIcon
                name="i-heroicons-code-bracket"
                class="text-2xl text-primary-500"
              />
              <h2 class="text-3xl font-bold">Compétences</h2>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
              <UHover v-for="(skill, index) in skills" :key="index">
                <UCard
                  class="text-center transition-all duration-300 hover:shadow-xl"
                  :ui="{ body: { padding: 'p-4' } }"
                >
                  <UIcon
                    :name="skill.icon"
                    class="text-4xl text-primary-500 mb-2"
                  />
                  <h3 class="font-semibold">{{ skill.name }}</h3>
                  <UProgress :value="skill.level || 80" class="mt-2" />
                </UCard>
              </UHover>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16">
        <UCard>
          <template #header>
            <div class="flex items-center gap-2 mb-4">
              <UIcon
                name="i-heroicons-academic-cap"
                class="text-2xl text-primary-500"
              />
              <h2 class="text-3xl font-bold">Formation</h2>
            </div>
          </template>
          <div class="space-y-6">
            <UCard
              v-for="(edu, index) in education"
              :key="index"
              class="fade-in"
              :class="`delay-${index * 100}`"
            >
              <div class="flex flex-col md:flex-row gap-4">
                <div class="md:w-1/4">
                  <UBadge color="primary" variant="soft" size="lg">{{
                    edu.period
                  }}</UBadge>
                </div>
                <div class="md:w-3/4">
                  <h4 class="text-lg font-semibold mb-2">{{ edu.degree }}</h4>
                  <p class="text-gray-600 dark:text-gray-400 mb-2">
                    <UIcon
                      name="i-heroicons-building-office"
                      class="inline mr-2"
                    />
                    {{ edu.institution }}
                  </p>
                  <p class="text-gray-600 dark:text-gray-400">
                    {{ edu.description }}
                  </p>
                </div>
              </div>
            </UCard>
          </div>
        </UCard>
      </section>
    </UContainer>
  </div>
</template>

<script setup>
const journey = [
  {
    period: "Janvier 2025 - Présent",
    title: "Dévéloppeur fullstack python fastapi react prostgresql material UI",
    company: "HighFive",
    project: "Projet d'infrastructures As code (IAC)",
    description:
      "Collaboration au sein d'une équipe dynamique sur un projet d'IAC",
  },
  {
    period: "Octobre 2024 - Janvier 2025",
    title: "Dévéloppeur fullstack python fastapi react prostgresql material UI",
    company: "HighFive",
    project: "Projet d'infrastructures As code (IAC)",
    description:
      "Collaboration au sein d'une équipe dynamique sur un projet d'IAC",
  },
  {
    period: "Mai 2024 - Octobre 2024",
    title: "Bootcamp",
    company: "HighFive",
    description:
      "Bootcamp accéléré de stacks plus utilisés avec un système learning-by-doing ! Avec plus de pratiques que de théories",
  },
];
const education = [
  {
    period: "2025-Présent",
    degree: "Stagiaire Développeur Web",
    institution: "VIPP Interstis Bénin",
    description:
      "Développement d'applications afin d'optimiser l'utilisation des outils internes de l'entreprise.",
  },
  {
    period: "2024 - 2025",
    degree: "Formation Développeur Web",
    institution: "HighFive University",
    description:
      "Bootcamp intensif en développement web, avec une spécialisation fullstack dans divers langages de programmation.",
  },
  // {
  //   period: "2022 - 2024",
  //   degree: "Mathématiques et Informatique Appliquées",
  //   institution: "Université d'Abomey-Calavi",
  //   description:
  //     "Formation en mathématiques générales, algorithmique avancée et gestion des bases de données.",
  // },
];

const skills = [
  { name: "HTML/CSS", icon: "i-simple-icons-html5", level: "90" },
  { name: "React", icon: "i-simple-icons-react", level: "88" },
  { name: "Node.js", icon: "i-simple-icons-nodedotjs", level: "88" },
  { name: "JavaScript", icon: "i-simple-icons-javascript", level: "85" },
  { name: "Vue.js", icon: "i-simple-icons-vuedotjs", level: "75" },
  { name: "GitHub", icon: "i-simple-icons-github", level: "60" },
  { name: "SpringBoot", icon: "i-simple-icons:springboot", level: "45" },
  { name: "Nuxt.js", icon: "i-simple-icons-nuxtdotjs", level: "40" },
  { name: "Angular", icon: "i-simple-icons:angular", level: "40" },
  { name: "Hacking", icon: "i-simple-icons-hackaday", level: "35" },
  { name: "Git", icon: "i-simple-icons-git", level: "25" },
  { name: "Python", icon: "i-simple-icons:python", level: "10" },
];

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
