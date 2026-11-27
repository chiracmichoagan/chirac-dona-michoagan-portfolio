<template>
  <div>
    <section class="mb-8 bg-[#FBF2E3] dark:bg-gray-800  shadow-lg p-8 overflow-hidden relative">

      <!-- <h1 class="font-montserrat text-2xl">Hello world!</h1> -->
      <div class="">
        <div class="flex justify-around items-center flex-col md:flex-row gap-8">
          <!-- partie texte -->
          <div class="md:w-1/2 flex flex-col items-start justify-start">
            <h1
              class="text-5xl mb-8 font-montserrat fade-in font-monst font-extrabold text-[49px] leading-[64px] text-black dark:text-white">
              Je suis,
              <span class="text-[#E88200]">Dona Chirac MICHOAGAN</span>
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
            <img src="/assets/photo-chirac-dona.jpg" alt="Dona Chirac MICHOAGAN"
              class="w-2000 h-80  fade-in delay-200 object-cover no-repeat" />
          </div>




        </div>



      </div>
    </section>

    <section class="py-16  dark:bg-gray-900 overflow-hidden relative">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-8 fade-in">Projets à la une</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <UCard class="fade-in delay-100 bg-[#F9F7EE]  hover:bg-[#FEF9EF] hover:shadow-lg transition-shadow"
              v-for="(project, index) in featuredProjects" :key="index">
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
            <UButton to="/projects"
              class="bg-[#E78318] hover:bg-[#cf7314] focus:ring-[#E78318] text-white border-transparent">
              Voir tous les projets
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <section class="py-28 my-24 bg-[#FBF2E3] overflow-hidden relative">
      <div class="max-w-6xl mx-auto px-6">
        <div class="mb-10">
          <p class="text-sm font-semibold text-[#E88200] tracking-widest uppercase mb-3">Par métier</p>
          <h2 class="font-black text-black mb-3" style="font-size:clamp(1.8rem, 4vw, 2.8rem)">Des sites pour chaque
            métier
          </h2>
          <p class=" text-gray-600 text-lg">Quelque que soit votre activité, votre place est sur internet.
          </p>
          <p class=" text-gray-600 text-lg">Petite ou grande structure: le site qui vous ressemble et qui vous permettra
            de
            développer votre activité.
          </p>
          <p class=" text-gray-600 text-lg">Chaque secteur a ses codes. Je les connais. Cliquez pour voir un exemple
            réel.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <NuxtLink external class="group relative rounded-2xl overflow-hidden cursor-pointer block" style="aspect-ratio:4/3"
            to="/projets_demo/Site_web_notaire.html"><img
              alt="Site web Notaire — exemple réalisé par Chirac Dona Michoagan" loading="lazy" decoding="async"
              data-nimg="fill" class="object-cover transition-transform duration-700 group-hover:scale-105"
              style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" src="/assets/restaurant-site.png">
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 group-hover:from-black/75 transition-all duration-300">
            </div>
            <div
              class="absolute inset-0 rounded-2xl border-2 border-[#0066FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            </div>
            <div class="absolute inset-0 flex flex-col justify-end p-6">
              <div class="flex items-start justify-between mb-3"><span class="text-3xl">⚖️</span><span
                  class="flex items-center gap-1.5 text-[#0066FF] text-xs font-bold bg-[#0066FF]/10 backdrop-blur-sm border border-[#0066FF]/25 px-3 py-1.5 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-300">Voir
                  l'exemple →</span></div>
              <h3 class="text-white font-bold text-xl leading-tight mb-1">Notaire</h3>
              <p class="text-white/55 text-sm leading-snug">Actes authentiques, prise de RDV, image institutionnelle</p>
            </div>
          </NuxtLink>
          <NuxtLink external class="group relative rounded-2xl overflow-hidden cursor-pointer block"
            style="aspect-ratio:4/3" to="/projets_demo/Site_web_restaurant.html">
            <img alt="Site web Restaurant — exemple réalisé par Chirac Dona Michoagan" loading="lazy" decoding="async"
              data-nimg="fill" class="object-cover transition-transform duration-700 group-hover:scale-105"
              style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" src="/assets/restaurant-site.png">
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 group-hover:from-black/75 transition-all duration-300">
            </div>
            <div
              class="absolute inset-0 rounded-2xl border-2 border-[#0066FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            </div>
            <div class="absolute inset-0 flex flex-col justify-end p-6">
              <div class="flex items-start justify-between mb-3"><span class="text-3xl">🍽️</span><span
                  class="flex items-center gap-1.5 text-[#0066FF] text-xs font-bold bg-[#0066FF]/10 backdrop-blur-sm border border-[#0066FF]/25 px-3 py-1.5 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-300">Voir
                  l'exemple →</span></div>
              <h3 class="text-white font-bold text-xl leading-tight mb-1">Restaurant</h3>
              <p class="text-white/55 text-sm leading-snug">Réservations en ligne, menu digital, SEO local</p>
            </div>
          </NuxtLink>
          <NuxtLink external class="group relative rounded-2xl overflow-hidden cursor-pointer block"
            style="aspect-ratio:4/3" to="/projets_demo/Site_web_medecin.html"><img
              alt="Site web Médecin — exemple réalisé par Chirac Dona Michoagan" loading="lazy" decoding="async"
              data-nimg="fill" class="object-cover transition-transform duration-700 group-hover:scale-105"
              style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" src="/assets/restaurant-site.png">
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 group-hover:from-black/75 transition-all duration-300">
            </div>
            <div
              class="absolute inset-0 rounded-2xl border-2 border-[#0066FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            </div>
            <div class="absolute inset-0 flex flex-col justify-end p-6">
              <div class="flex items-start justify-between mb-3"><span class="text-3xl">🩺</span><span
                  class="flex items-center gap-1.5 text-[#0066FF] text-xs font-bold bg-[#0066FF]/10 backdrop-blur-sm border border-[#0066FF]/25 px-3 py-1.5 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-300">Voir
                  l'exemple →</span></div>
              <h3 class="text-white font-bold text-xl leading-tight mb-1">Médecin</h3>
              <p class="text-white/55 text-sm leading-snug">Prise de RDV en ligne, confiance patients, SEO local</p>
            </div>
          </NuxtLink>
          <NuxtLink external class="group relative rounded-2xl overflow-hidden cursor-pointer block"
            style="aspect-ratio:4/3" to="/projets_demo/Site_web_avocat.html"><img
              alt="Site web Avocat — exemple réalisé par Chirac Dona Michoagan" loading="lazy" decoding="async"
              data-nimg="fill" class="object-cover transition-transform duration-700 group-hover:scale-105"
              style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" src="/assets/restaurant-site.png">
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 group-hover:from-black/75 transition-all duration-300">
            </div>
            <div
              class="absolute inset-0 rounded-2xl border-2 border-[#0066FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            </div>
            <div class="absolute inset-0 flex flex-col justify-end p-6">
              <div class="flex items-start justify-between mb-3"><span class="text-3xl">⚖️</span><span
                  class="flex items-center gap-1.5 text-[#0066FF] text-xs font-bold bg-[#0066FF]/10 backdrop-blur-sm border border-[#0066FF]/25 px-3 py-1.5 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-300">Voir
                  l'exemple →</span></div>
              <h3 class="text-white font-bold text-xl leading-tight mb-1">Avocat</h3>
              <p class="text-white/55 text-sm leading-snug">Image professionnelle, prise de contact, référencement</p>
            </div>
          </NuxtLink>
          <NuxtLink external class="group relative rounded-2xl overflow-hidden cursor-pointer block"
            style="aspect-ratio:4/3" to="/projets_demo/Site_web_mecanicien.html"><img
              alt="Site web Mécanicien — exemple réalisé par Chirac Dona Michoagan" loading="lazy" decoding="async"
              data-nimg="fill" class="object-cover transition-transform duration-700 group-hover:scale-105"
              style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" src="/assets/restaurant-site.png">
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 group-hover:from-black/75 transition-all duration-300">
            </div>
            <div
              class="absolute inset-0 rounded-2xl border-2 border-[#0066FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            </div>
            <div class="absolute inset-0 flex flex-col justify-end p-6">
              <div class="flex items-start justify-between mb-3"><span class="text-3xl">🔧</span><span
                  class="flex items-center gap-1.5 text-[#0066FF] text-xs font-bold bg-[#0066FF]/10 backdrop-blur-sm border border-[#0066FF]/25 px-3 py-1.5 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-300">Voir
                  l'exemple →</span></div>
              <h3 class="text-white font-bold text-xl leading-tight mb-1">Mécanicien</h3>
              <p class="text-white/55 text-sm leading-snug">Devis en ligne, avis clients, référencement local</p>
            </div>
          </NuxtLink>
          <NuxtLink external class="group relative rounded-2xl overflow-hidden cursor-pointer block"
            style="aspect-ratio:4/3" to="/projets_demo/Site_web_fleuriste.html"><img
              alt="Site web Fleuriste — exemple réalisé par Antoine Gueguen" loading="lazy" decoding="async"
              data-nimg="fill" class="object-cover transition-transform duration-700 group-hover:scale-105"
              style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" src="/assets/restaurant-site.png">
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 group-hover:from-black/75 transition-all duration-300">
            </div>
            <div
              class="absolute inset-0 rounded-2xl border-2 border-[#0066FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            </div>
            <div class="absolute inset-0 flex flex-col justify-end p-6">
              <div class="flex items-start justify-between mb-3"><span class="text-3xl">🌸</span><span
                  class="flex items-center gap-1.5 text-[#0066FF] text-xs font-bold bg-[#0066FF]/10 backdrop-blur-sm border border-[#0066FF]/25 px-3 py-1.5 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-300">Voir
                  l'exemple →</span></div>
              <h3 class="text-white font-bold text-xl leading-tight mb-1">Fleuriste</h3>
              <p class="text-white/55 text-sm leading-snug">Commande en ligne, galerie produits, SEO local</p>
            </div>
          </NuxtLink>
          <NuxtLink external class="group relative rounded-2xl overflow-hidden cursor-pointer block"
            style="aspect-ratio:4/3" to="/projets_demo/Site_web_concessionnaire.html"><img
              alt="Site web Concessionnaire — exemple réalisé par Antoine Gueguen" loading="lazy" decoding="async"
              data-nimg="fill" class="object-cover transition-transform duration-700 group-hover:scale-105"
              style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" src="/assets/restaurant-site.png">
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 group-hover:from-black/75 transition-all duration-300">
            </div>
            <div
              class="absolute inset-0 rounded-2xl border-2 border-[#0066FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            </div>
            <div class="absolute inset-0 flex flex-col justify-end p-6">
              <div class="flex items-start justify-between mb-3"><span class="text-3xl">🚗</span><span
                  class="flex items-center gap-1.5 text-[#0066FF] text-xs font-bold bg-[#0066FF]/10 backdrop-blur-sm border border-[#0066FF]/25 px-3 py-1.5 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-300">Voir
                  l'exemple →</span></div>
              <h3 class="text-white font-bold text-xl leading-tight mb-1">Concessionnaire</h3>
              <p class="text-white/55 text-sm leading-snug">Catalogue véhicules en ligne, leads qualifiés</p>
            </div>
          </NuxtLink>
          <!-- <NuxtLink external class="group relative rounded-2xl overflow-hidden cursor-pointer block" style="aspect-ratio:4/3"
          to="/projets_demo/Site_web_permis_bateaux.html"><img alt="Site web Permis bateaux — exemple réalisé par Antoine Gueguen" loading="lazy"
            decoding="async" data-nimg="fill"
            class="object-cover transition-transform duration-700 group-hover:scale-105"
            style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" src="/assets/restaurant-site.png">
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 group-hover:from-black/75 transition-all duration-300">
          </div>
          <div
            class="absolute inset-0 rounded-2xl border-2 border-[#0066FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          </div>
          <div class="absolute inset-0 flex flex-col justify-end p-6">
            <div class="flex items-start justify-between mb-3"><span class="text-3xl">⚓</span><span
                class="flex items-center gap-1.5 text-[#0066FF] text-xs font-bold bg-[#0066FF]/10 backdrop-blur-sm border border-[#0066FF]/25 px-3 py-1.5 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-300">Voir
                l'exemple →</span></div>
            <h3 class="text-white font-bold text-xl leading-tight mb-1">Permis bateaux</h3>
            <p class="text-white/55 text-sm leading-snug">Inscriptions en ligne, calendrier formations, SEO</p>
          </div>
        </NuxtLink> -->
        </div>
      </div>
    </section>

    <div class="flex justify-center space-x-4 mb-8 fade-in delay-200">
      <UButton to="/projects"
        class="bg-[#E78318] hover:bg-[#cf7314] focus:ring-[#E78318] text-white border-transparent">
        Voir mes projets ->
      </UButton>
      <UButton to="/contact" color="primary" variant="outline" size="lg">
        Me contacter
      </UButton>
    </div>

    <!-- Section de mes compétences  -->
    <section class="py-16 mt-7  overflow-hidden relative">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-8 text-center fade-in">
            Mes compétences
          </h2>
          <div class="grid md:grid-cols-3 gap-8">


            <UCard class="fade-in delay-100 bg-[#F9F7EE]  hover:bg-[#FEF9EF] hover:shadow-lg transition-shadow">
              <template #header>
                <div class="p-4 flex justify-center">
                  <UIcon name="i-heroicons-code-bracket" class="text-5xl" style='color:#E78318' />
                </div>
              </template>
              <h3 class="text-xl font-semibold mb-2">Développement Web</h3>
              <p class="text-gray-600 dark:text-gray-400">
                Création d'interfaces utilisateur intuitives, dynamiques et professionnelles avec les technologies
                modernes.
              </p>
            </UCard>

            <UCard class="fade-in delay-200 bg-[#F9F7EE]  hover:bg-[#FEF9EF] hover:shadow-lg transition-shadow">
              <template #header>
                <div class="p-4 flex justify-center">
                  <UIcon name="i-heroicons-shield-check" class="text-5xl" style='color:#E78318' />
                </div>
              </template>
              <h3 class="text-xl font-semibold mb-2">
                Analyse et gestion de sécurité des systèmes
              </h3>
              <p class="text-gray-600 dark:text-gray-400">
                Sécurisation des systèmes informatiques et optimisation des performances réseau !
              </p>
            </UCard>

            <UCard class="fade-in delay-300 bg-[#F9F7EE]  hover:bg-[#FEF9EF] hover:shadow-lg transition-shadow">
              <template #header>
                <div class="p-4 flex justify-center">
                  <UIcon name="i-heroicons-device-phone-mobile" class="text-5xl" style='color:#E78318' />
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

    <section id="contact" class="py-24 md:py-32 bg-[#FBF2E3] overflow-hidden relative">
      <div class="max-w-6xl mx-auto px-6">
        <div style="opacity: 1; transform: none;">
          <p class="text-sm font-bold text-[#E88200] tracking-widest uppercase mb-3">Contact</p>
          <h2 class="font-black text-black  mb-4" style="font-size: clamp(2rem, 5vw, 4rem);">Parlons de votre projet
          </h2>
          <p class="text-lg  text-gray-600  mb-16">Je réponds sous 24h.</p>
        </div>
        <div class="grid md:grid-cols-2 gap-10 md:gap-16">
          <div style="opacity: 1; transform: none;">
            <p class=" text-gray-600  text-lg leading-relaxed mb-10">Une idée de projet ? Une question sur mes tarifs ?
              Envoyez-moi un message, je reviens vers vous rapidement.</p>
            <div class="space-y-5">
              <div class="flex items-center gap-4">
                <div
                  class="w-10 h-10 rounded-xl bg-white/5 border-white/8 border flex items-center justify-center text-lg flex-shrink-0">
                  ✉️</div>
                <div>
                  <div class="text-xs  text-gray-600  uppercase tracking-wider font-medium mb-0.5">Email</div>
                  <NuxtLink to="mailto:michoaganchiracdona@gmail.com" rel="noopener noreferrer"
                    class=" text-black  hover:text-white font-medium transition-colors text-sm">
                    michoaganchiracdona@gmail.com</NuxtLink>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div
                  class="w-10 h-10 rounded-xl bg-white/5 border-white/8 border flex items-center justify-center text-lg flex-shrink-0">
                  📍</div>
                <div>
                  <div class="text-xs  text-gray-600  uppercase tracking-wider font-medium mb-0.5">Localisation</div>
                  <span class="text-black font-medium text-sm">Cotonou-littoral, Bénin & Distanciel</span>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div
                  class="w-10 h-10 rounded-xl bg-white/5 border-white/8 border flex items-center justify-center text-lg flex-shrink-0">
                  🔗</div>
                <div>
                  <div class="text-xs text-gray-600 uppercase tracking-wider font-medium mb-0.5">LinkedIn</div>
                  <NuxtLink to="https://linkedin.com/chiracmichoagan" target="_blank" rel="noopener noreferrer"
                    class="text-black hover:text-white font-medium transition-colors text-sm">
                    linkedin.com/chiracmichoagan
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>


          <div style="opacity: 1; transform: none;">

            <form @submit.prevent="submitForm" class="space-y-4 border-2 border-[#E88200] rounded-xl p-6">

              <div class="absolute opacity-0 pointer-events-none" aria-hidden="true">
                <input tabindex="-1" v-model="form._honey" autocomplete="new-password" type="text" name="_honey">
              </div>

              <div>
                <label for="contact-name" class="block text-sm font-medium text-black mb-1.5">Prénom et Nom *</label>
                <input
                  class="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#E88200] text-gray-600 placeholder:text-gray-400 focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/15 transition-all text-sm"
                  placeholder="Jean Dupont" v-model="form.name" name="name" id="contact-name">
              </div>


              <div>
                <label for="contact-email" class="block text-sm font-medium text-black mb-1.5">Email <span
                    class="text-gray-400">(optionnel
                    si
                    téléphone renseigné)</span></label>
                <input
                  class="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#E88200] text-gray-600 placeholder:text-gray-400 focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/15 transition-all text-sm"
                  placeholder="jean@exemple.fr" type="email" v-model="form.email" name="email" id="contact-email">
              </div>

              <div>
                <label for="contact-phone" class="block text-sm font-medium text-black mb-1.5">Téléphone <span
                    class="text-gray-400">(optionnel
                    si email renseigné)</span></label>
                <input
                  class="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#E88200] text-gray-600 placeholder:text-gray-400 focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/15 transition-all text-sm"
                  placeholder="06 12 34 56 78" type="tel" v-model="form.phone" name="phone" id="contact-phone">
              </div>

              <div>
                <label for="contact-secteur" class="block text-sm font-medium text-black mb-1.5">Secteur
                  d'activité</label>
                <select id="contact-secteur" name="secteur" v-model="form.secteur"
                  class="w-full px-4 py-3 rounded-xl bg-[#1A1A1A] border border-[#E88200] text-white/75 focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/15 transition-all text-sm">
                  <option value="">Sélectionner...</option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Garage / Mécanicien">Garage / Mécanicien</option>
                  <option value="Médecin">Médecin</option>
                  <option value="Avocat">Avocat</option>
                  <option value="Permis bateaux">Permis bateaux</option>
                  <option value="Concessionnaire">Concessionnaire</option>
                  <option value="Fleuriste">Fleuriste</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              <div>
                <label for="contact-message" class="block text-sm font-medium text-black mb-1.5">Message *</label>
                <textarea v-model="form.message" id="contact-message" name="message" rows="5"
                  class="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#E88200] text-gray-600 placeholder:text-gray-400 focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/15 transition-all text-sm resize-none"
                  placeholder="Décrivez votre projet en quelques mots..."></textarea>
              </div>


              <UButton type="submit" :loading="status === 'loading'" :disabled="status === 'loading'"
                class="flex items-center justify-center" color="primary" variant="outline" size="lg">
                Envoyer mon message
              </UButton>

              <p v-if="status === 'success'" class="text-green-600 text-sm">
                Merci ! Ton message a bien été envoyé, je te réponds sous 24h.
              </p>
              <p v-if="status === 'error'" class="text-red-600 text-sm">{{ errorMsg }}</p>
            </form>

          </div>
        </div>
      </div>
    </section>

    <section id="guides" class="py-24 md:py-32 bg-white overflow-hidden relative">
      <div class="max-w-6xl mx-auto px-6">
        <div style="opacity: 1; transform: none;">
          <p class="text-sm font-bold text-[#0066FF] tracking-widest uppercase mb-3">Ressources</p>
          <h2 class="font-black text-[#0A0A0A] mb-4" style="font-size: clamp(2rem, 5vw, 4rem);">Guides pratiques</h2>
          <p class="text-lg text-[#6B6B6B] mb-16">Des conseils concrets pour bien choisir votre prestataire web.</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div style="opacity: 1; transform: none;">
            <NuxtLink
              class="group relative block bg-[#F9F9F9] border border-gray-100 rounded-2xl p-7 h-full hover:border-gray-200 transition-all duration-300 overflow-hidden"
              to="/guides/freelance-ou-agence-web">
              <div class="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style="background: rgb(0, 102, 255);">
              </div>
              <span class="text-xs font-bold px-2.5 py-1 rounded-full inline-block mb-4"
                style="background: rgba(0, 102, 255, 0.094); color: rgb(0, 102, 255);">Guide</span>
              <h3 class="font-bold text-xl text-[#0A0A0A] mb-3">Freelance ou agence web ?</h3>
              <p class="text-[#6B6B6B] text-sm leading-relaxed mb-6">Comparatif tarifs, délais, suivi et flexibilité
                pour
                faire le bon choix entre un développeur freelance et une agence web.</p><span
                class="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3"
                style="color: rgb(0, 102, 255);">Lire le guide<svg class="w-3.5 h-3.5 flex-shrink-0" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3">
                  </path>
                </svg></span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';

useSeoMeta({
  title: 'Développeur Web Freelance au Bénin', // Affichera : "Développeur Web Freelance au Bénin | Chirac Dona Michoagan"
  description: 'Développeur web freelance (Laravel, React, Vue.js) au Bénin et à l\'international. Création de sites web modernes et sur-mesure. Devis gratuit sous 48h.',
  ogTitle: 'Chirac Dona Michoagan - Développeur Web Freelance au Bénin',
  ogDescription: 'Création de sites web modernes et sur-mesure (Laravel, React, Vue.js). Devis gratuit sous 48h.',
  ogImage: 'https://chirac-dona-michoagan.netlify.app/', // Image affichée lors du partage sur LinkedIn/WhatsApp
  twitterCard: 'summary_large_image'
})

const featuredProjects = [
  // {
  //   title: "📋 Application Quiz",
  //   description:
  //     "📋 Application Quiz — questions à choix multiples avec suivi des scores",
  //   image: "assets/ApplicationQuiz.png",
  //   technologies: [
  //     "tailwinds css",
  //     "SCSS OU SASS",
  //     "vuesjs",
  //     "nodes",
  //     "vite"
  //   ],
  //   demo: "https://web-quizz-three.vercel.app/",
  //   github: "https://github.com/chiracmichoagan/web-quizz.git",
  // },
];

const config = useRuntimeConfig()

const form = reactive({
  name: '',
  email: '',
  phone: '',
  secteur: '',
  message: '',
  botcheck: false
})
const status = ref('idle') // idle | loading | success | error
const errorMsg = ref('')

async function submitForm() {
  errorMsg.value = ''

  if (!form.email.trim() && !form.phone.trim()) {
    status.value = 'error'
    errorMsg.value = 'Renseigne un email ou un téléphone.'
    return
  }

  status.value = 'loading'
  try {
    const res = await $fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: {
        access_key: config.public.web3formsKey,
        subject: `Nouvelle demande de ${form.name}`,
        from_name: 'Portfolio',
        name: form.name,
        email: form.email,
        phone: form.phone,
        secteur: form.secteur,
        message: form.message,
        botcheck: form.botcheck
      }
    })

    if (res.success) {
      status.value = 'success'
      Object.assign(form, { name: '', email: '', phone: '', secteur: '', message: '', botcheck: false })
    } else {
      throw new Error(res.message)
    }
  } catch (e) {
    status.value = 'error'
    errorMsg.value = e?.data?.message || e?.message || 'Une erreur est survenue. Réessaie ou écris-moi par e-mail.'
  }
}


// const form = reactive({
//   name: '', email: '', phone: '', secteur: '', message: '', _honey: ''
// })
// const status = ref('idle') // idle | loading | success | error
// const errorMsg = ref('')

// async function submitForm() {
//   status.value = 'loading'
//   errorMsg.value = ''
//   try {
//     await $fetch('/api/contact', { method: 'POST', body: form })
//     status.value = 'success'
//     Object.assign(form, { name: '', email: '', phone: '', secteur: '', message: '', _honey: '' })
//   } catch (e) {
//     status.value = 'error'
//     errorMsg.value = e?.data?.statusMessage || 'Une erreur est survenue.'
//   }
// }

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


<style scoped></style>
