<template>

  <nav class="container my-12 p-4 max-w-6xl mx-auto flex items-center gap-2 text-sm text-gray-600 mb-12"
    aria-label="Fil d'Ariane">
    <NuxtLink class="hover:text-black transition-colors" to="/">
      Accueil
    </NuxtLink>
    <span>/</span>
    <span class="text-black font-medium">Services</span>

  </nav>

  <section class="py-28  md:pt-40 pb-24 bg-[#FBF2E3] relative overflow-hidden">
    <!-- <div class="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0d1117] to-[#0A0A0A]"></div> -->
    <!-- <div
      class="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0066FF]/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none">
    </div> -->
    <!-- <div
      class="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none">
    </div> -->
    <div class="max-w-6xl mx-auto px-6 relative">

      <p class="text-sm font-semibold text-[#E88200] tracking-widest uppercase mb-5">Ce que je fais</p>
      <h1 class="font-black text-black mb-6 leading-tight" style="font-size:clamp(2.2rem, 5.5vw, 4rem)">Création de
        sites web<br><span class="text-[#E88200]">sur-mesure</span> au Bénin et à l'international.</h1>
      <p class="text-lg text-gray-600 max-w-2xl leading-relaxed mb-10">Développeur web freelance disponible partout au
        Bénin en remote, je conçois et développe des sites web professionnels adaptés à votre secteur. De la maquette à
        la mise en ligne, je gère tous sites web adaptés à vos besoins, optimisés pour le référencement et compatibles
        avec tous les appareils.</p>
      <div class="flex flex-wrap gap-10 mb-12">
        <div>
          <div class="text-3xl font-black text-black">5+</div>
          <div class="text-sm text-gray-600 mt-1">ans d'expérience</div>
        </div>
        <div>
          <div class="text-3xl font-black text-black">48h</div>
          <div class="text-sm text-gray-600 mt-1">délai de réponse</div>
        </div>
        <div>
          <div class="text-3xl font-black text-black">100%</div>
          <div class="text-sm text-gray-600 mt-1">remote au Bénin et à l'international</div>
        </div>
      </div>
      <NuxtLink
        class="inline-flex items-center gap-2 bg-[#0066FF] text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/25"
        to="/contact">
        Demander un devis gratuit →
      </NuxtLink>
    </div>
  </section>

  <section class="py-28 my-24 bg-[#F9F9F9] relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-6">
      <div class="mb-16">
        <p class="text-sm font-semibold text-[#0066FF] tracking-widest uppercase mb-3">Prestations de services</p>
        <h2 class="font-black text-[#0A0A0A] mb-4" style="font-size:clamp(1.8rem, 4vw, 3rem)">Mes offres</h2>
        <p class="text-[#6B6B6B] text-lg">Mes offres de services de développement web.</p>
        <p class="text-[#6B6B6B] text-lg">4 types d'interventions, toujours sur-mesure.</p>
      </div>
      <div class="grid md:grid-cols-2 gap-6">
        <div
          class="relative bg-white border border-gray-100 rounded-2xl p-8 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
          <div class="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
            style="background:linear-gradient(90deg, #0066FF, #0066FF99)"></div>
          <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6"
            style="background-color:#0066FF12">🏠</div>
          <div class="flex items-start justify-between mb-4 gap-4">
            <h3 class="font-black text-[#0A0A0A] text-xl">Site vitrine</h3>
            <div class="text-right flex-shrink-0">
              <div class="font-bold text-sm px-3 py-1 rounded-full" style="color:#0066FF;background-color:#0066FF12">À
                partir de 800€</div>
              <div class="text-xs text-[#6B6B6B] mt-1">2 à 4 semaines</div>
            </div>
          </div>
          <p class="text-[#6B6B6B] text-sm leading-relaxed mb-6">Présentez votre activité avec un site professionnel,
            moderne et optimisé pour Google. Idéal pour les artisans, commerçants, professions libérales et TPE.</p>
          <ul class="space-y-2.5 mb-8">
            <li class="flex items-center gap-3 text-sm text-[#0A0A0A]"><span
                class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style="background-color:#0066FF15"><svg class="w-3 h-3" style="color:#0066FF" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg></span>Design sur-mesure responsive</li>
            <li class="flex items-center gap-3 text-sm text-[#0A0A0A]"><span
                class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style="background-color:#0066FF15"><svg class="w-3 h-3" style="color:#0066FF" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg></span>SEO local inclus (Google My Business)</li>
            <li class="flex items-center gap-3 text-sm text-[#0A0A0A]"><span
                class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style="background-color:#0066FF15"><svg class="w-3 h-3" style="color:#0066FF" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg></span>Formulaire de contact</li>
            <li class="flex items-center gap-3 text-sm text-[#0A0A0A]"><span
                class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style="background-color:#0066FF15"><svg class="w-3 h-3" style="color:#0066FF" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg></span>Galerie photos</li>
            <li class="flex items-center gap-3 text-sm text-[#0A0A0A]"><span
                class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style="background-color:#0066FF15"><svg class="w-3 h-3" style="color:#0066FF" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg></span>Hébergement &amp; mise en ligne</li>
          </ul>
          <NuxtLink class="inline-flex items-center gap-2 text-sm font-bold py-2.5 px-5 rounded-xl transition-all"
            style="color:#0066FF;background-color:#0066FF10" to="/contact">Demander un devis →</NuxtLink>
        </div>
        <div
          class="relative bg-white border border-gray-100 rounded-2xl p-8 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
          <div class="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
            style="background:linear-gradient(90deg, #7C3AED, #7C3AED99)"></div>
          <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6"
            style="background-color:#7C3AED12">🛒</div>
          <div class="flex items-start justify-between mb-4 gap-4">
            <h3 class="font-black text-[#0A0A0A] text-xl">Site e-commerce</h3>
            <div class="text-right flex-shrink-0">
              <div class="font-bold text-sm px-3 py-1 rounded-full" style="color:#7C3AED;background-color:#7C3AED12">À
                partir de 2 500€</div>
              <div class="text-xs text-[#6B6B6B] mt-1">4 à 8 semaines</div>
            </div>
          </div>
          <p class="text-[#6B6B6B] text-sm leading-relaxed mb-6">Vendez vos produits ou services en ligne avec une
            boutique complète, sécurisée et optimisée pour la conversion. Paiement CB, gestion des stocks, tableau de
            bord.</p>
          <ul class="space-y-2.5 mb-8">
            <li class="flex items-center gap-3 text-sm text-[#0A0A0A]"><span
                class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style="background-color:#7C3AED15"><svg class="w-3 h-3" style="color:#7C3AED" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg></span>Boutique en ligne sur-mesure</li>
            <li class="flex items-center gap-3 text-sm text-[#0A0A0A]"><span
                class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style="background-color:#7C3AED15"><svg class="w-3 h-3" style="color:#7C3AED" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg></span>Paiement sécurisé (Stripe), paypal, kkiapaye ou fadapaye ...</li>
            <li class="flex items-center gap-3 text-sm text-[#0A0A0A]"><span
                class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style="background-color:#7C3AED15"><svg class="w-3 h-3" style="color:#7C3AED" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg></span>Gestion des stocks</li>
            <li class="flex items-center gap-3 text-sm text-[#0A0A0A]"><span
                class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style="background-color:#7C3AED15"><svg class="w-3 h-3" style="color:#7C3AED" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg></span>Fiches produits optimisées SEO</li>
            <li class="flex items-center gap-3 text-sm text-[#0A0A0A]"><span
                class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style="background-color:#7C3AED15"><svg class="w-3 h-3" style="color:#7C3AED" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg></span>Dashboard de gestion</li>
          </ul>
          <NuxtLink class="inline-flex items-center gap-2 text-sm font-bold py-2.5 px-5 rounded-xl transition-all"
            style="color:#7C3AED;background-color:#7C3AED10" to="/contact">Demander un devis →</NuxtLink>
        </div>
        <div
          class="relative bg-white border border-gray-100 rounded-2xl p-8 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
          <div class="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
            style="background:linear-gradient(90deg, #059669, #05966999)"></div>
          <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6"
            style="background-color:#05966912">🔄</div>
          <div class="flex items-start justify-between mb-4 gap-4">
            <h3 class="font-black text-[#0A0A0A] text-xl">Refonte de site</h3>
            <div class="text-right flex-shrink-0">
              <div class="font-bold text-sm px-3 py-1 rounded-full" style="color:#059669;background-color:#05966912">À
                partir de 1 200€</div>
              <div class="text-xs text-[#6B6B6B] mt-1">3 à 6 semaines</div>
            </div>
          </div>
          <p class="text-[#6B6B6B] text-sm leading-relaxed mb-6">Votre site est vieux, lent ou ne convertit plus ? Je le
            modernise sans perdre votre référencement ni vos données.</p>
          <ul class="space-y-2.5 mb-8">
            <li class="flex items-center gap-3 text-sm text-[#0A0A0A]"><span
                class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style="background-color:#05966915"><svg class="w-3 h-3" style="color:#059669" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg></span>Audit de l'existant</li>
            <li class="flex items-center gap-3 text-sm text-[#0A0A0A]"><span
                class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style="background-color:#05966915"><svg class="w-3 h-3" style="color:#059669" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg></span>Design moderne &amp; responsive</li>
            <li class="flex items-center gap-3 text-sm text-[#0A0A0A]"><span
                class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style="background-color:#05966915"><svg class="w-3 h-3" style="color:#059669" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg></span>Migration sans perte de données</li>
            <li class="flex items-center gap-3 text-sm text-[#0A0A0A]"><span
                class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style="background-color:#05966915"><svg class="w-3 h-3" style="color:#059669" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg></span>Amélioration des performances</li>
            <li class="flex items-center gap-3 text-sm text-[#0A0A0A]"><span
                class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style="background-color:#05966915"><svg class="w-3 h-3" style="color:#059669" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg></span>Conservation du référencement (301)</li>
          </ul>
          <NuxtLink class="inline-flex items-center gap-2 text-sm font-bold py-2.5 px-5 rounded-xl transition-all"
            style="color:#059669;background-color:#05966910" to="/contact">Demander un devis →</NuxtLink>
        </div>
        <div
          class="relative bg-white border border-gray-100 rounded-2xl p-8 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
          <div class="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
            style="background:linear-gradient(90deg, #D97706, #D9770699)"></div>
          <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6"
            style="background-color:#D9770612">⚙️</div>
          <div class="flex items-start justify-between mb-4 gap-4">
            <h3 class="font-black text-[#0A0A0A] text-xl">Application sur-mesure</h3>
            <div class="text-right flex-shrink-0">
              <div class="font-bold text-sm px-3 py-1 rounded-full" style="color:#D97706;background-color:#D9770612">Sur
                devis</div>
              <div class="text-xs text-[#6B6B6B] mt-1">Selon périmètre</div>
            </div>
          </div>
          <p class="text-[#6B6B6B] text-sm leading-relaxed mb-6">Besoin d'une fonctionnalité spécifique ? Espace client,
            CRM léger, outil métier, API, intégration tierce — je développe la solution adaptée à votre activité.</p>
          <ul class="space-y-2.5 mb-8">
            <li class="flex items-center gap-3 text-sm text-[#0A0A0A]"><span
                class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style="background-color:#D9770615"><svg class="w-3 h-3" style="color:#D97706" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg></span>Analyse des besoins</li>
            <li class="flex items-center gap-3 text-sm text-[#0A0A0A]"><span
                class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style="background-color:#D9770615"><svg class="w-3 h-3" style="color:#D97706" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg></span>Architecture technique dédiée</li>
            <li class="flex items-center gap-3 text-sm text-[#0A0A0A]"><span
                class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style="background-color:#D9770615"><svg class="w-3 h-3" style="color:#D97706" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg></span>Espace client / backoffice</li>
            <li class="flex items-center gap-3 text-sm text-[#0A0A0A]"><span
                class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style="background-color:#D9770615"><svg class="w-3 h-3" style="color:#D97706" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg></span>Intégrations API tierces</li>
            <li class="flex items-center gap-3 text-sm text-[#0A0A0A]"><span
                class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style="background-color:#D9770615"><svg class="w-3 h-3" style="color:#D97706" fill="currentColor"
                  viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg></span>Tests &amp; documentation</li>
          </ul>
          <NuxtLink class="inline-flex items-center gap-2 text-sm font-bold py-2.5 px-5 rounded-xl transition-all"
            style="color:#D97706;background-color:#D9770610" to="/contact">Demander un devis →</NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <section class="py-28 my-24 bg-[#FBF2E3] overflow-hidden relative">
    <div class="max-w-6xl mx-auto px-6">
      <div class="mb-10">
        <p class="text-sm font-semibold text-[#E88200] tracking-widest uppercase mb-3">Par métier</p>
        <h2 class="font-black text-black mb-3" style="font-size:clamp(1.8rem, 4vw, 2.8rem)">Des sites pour chaque métier
        </h2>
        <p class=" text-gray-600 text-lg">Quelque que soit votre activité, votre place est sur internet.
        </p>
        <p class=" text-gray-600 text-lg">Petite ou grande structure: le site qui vous ressemble et qui vous permettra
          de
          développer votre activité.
        </p>
        <p class=" text-gray-600 text-lg">Chaque secteur a ses codes. Je les connais. Cliquez pour voir un exemple réel.
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <NuxtLink external class="group relative rounded-2xl overflow-hidden cursor-pointer block" style="aspect-ratio:4/3"
          to="/projets_demo/Site_web_notaire.html"><img alt="Site web Notaire — exemple réalisé par Chirac Dona Michoagan" loading="lazy"
            decoding="async" data-nimg="fill"
            class="object-cover transition-transform duration-700 group-hover:scale-105"
            style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" src="">
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
        <NuxtLink external class="group relative rounded-2xl overflow-hidden cursor-pointer block" style="aspect-ratio:4/3" to="/projets_demo/Site_web_restaurant.html">
          <img alt="Site web Restaurant — exemple réalisé par Chirac Dona Michoagan" loading="lazy" decoding="async" data-nimg="fill" class="object-cover transition-transform duration-700 group-hover:scale-105" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" src="">
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 group-hover:from-black/75 transition-all duration-300">
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
        <NuxtLink external class="group relative rounded-2xl overflow-hidden cursor-pointer block" style="aspect-ratio:4/3"
          to="/projets_demo/Site_web_medecin.html"><img alt="Site web Médecin — exemple réalisé par Chirac Dona Michoagan" loading="lazy"
            decoding="async" data-nimg="fill"
            class="object-cover transition-transform duration-700 group-hover:scale-105"
            style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" src="">
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
        <NuxtLink external class="group relative rounded-2xl overflow-hidden cursor-pointer block" style="aspect-ratio:4/3"
          to="/projets_demo/Site_web_avocat.html"><img alt="Site web Avocat — exemple réalisé par Chirac Dona Michoagan" loading="lazy" decoding="async"
            data-nimg="fill" class="object-cover transition-transform duration-700 group-hover:scale-105"
            style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" src="">
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
        <NuxtLink external class="group relative rounded-2xl overflow-hidden cursor-pointer block" style="aspect-ratio:4/3"
          to="/projets_demo/Site_web_mecanicien.html"><img alt="Site web Mécanicien — exemple réalisé par Chirac Dona Michoagan" loading="lazy"
            decoding="async" data-nimg="fill"
            class="object-cover transition-transform duration-700 group-hover:scale-105"
            style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" src="">
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
        <NuxtLink external class="group relative rounded-2xl overflow-hidden cursor-pointer block" style="aspect-ratio:4/3"
          to="/projets_demo/Site_web_fleuriste.html"><img alt="Site web Fleuriste — exemple réalisé par Antoine Gueguen" loading="lazy"
            decoding="async" data-nimg="fill"
            class="object-cover transition-transform duration-700 group-hover:scale-105"
            style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" src="">
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
        <NuxtLink external class="group relative rounded-2xl overflow-hidden cursor-pointer block" style="aspect-ratio:4/3"
          to="/projets_demo/Site_web_concessionnaire.html"><img alt="Site web Concessionnaire — exemple réalisé par Antoine Gueguen" loading="lazy"
            decoding="async" data-nimg="fill"
            class="object-cover transition-transform duration-700 group-hover:scale-105"
            style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" src="">
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
      </div>
    </div>
  </section>

  <section class="py-28 my-24 bg-[#F9F9F9] overflow-hidden relative">
    <div class="max-w-6xl mx-auto px-6">
      <p class="text-sm font-bold text-[#0066FF] tracking-widest uppercase mb-4">Simple & rapide</p>
      <h2 class="font-black text-black mb-16" style="font-size: clamp(1.8rem, 4vw, 3rem);">Comment ça se passe ?</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="relative bg-white border-2 shadow-lg border-white rounded-2xl p-8 overflow-hidden">
          <!-- <div class="absolute top-6 right-6 text-6xl font-black text-black select-none leading-none">01</div> -->
          <div class="w-10 h-10 rounded-xl bg-[#0066FF]/15 flex items-center justify-center mb-6"><span
              class="text-[#0066FF] font-black text-sm">01</span></div>
          <h3 class="font-bold text-black text-lg mb-3">Échange & devis</h3>
          <p class="text-black text-sm leading-relaxed">On discute de votre projet par téléphone, whatsapp ou email. Je vous
            envoie un devis gratuit, clair et détaillé sous 48h.</p>
        </div>
        <div class="relative bg-white border-2 shadow-lg border-white rounded-2xl p-8 overflow-hidden">
          <!-- <div class="absolute top-6 right-6 text-6xl font-black text-black select-none leading-none">02</div> -->
          <div class="w-10 h-10 rounded-xl bg-[#0066FF]/15 flex items-center justify-center mb-6"><span
              class="text-[#0066FF] font-black text-sm">02</span></div>
          <h3 class="font-bold text-black text-lg mb-3">Conception & développement</h3>
          <p class="text-black text-sm leading-relaxed">Je recherche une maquette adaptée à votre besoin puis développe votre site, ou vous allez me mettre en contacte direct avec votre propre designer figma et je développe la maquette. Vous
            validez chaque étape avec des retours illimités.</p>
        </div>
        <div class="relative bg-white border-2 shadow-lg border-white rounded-2xl p-8 overflow-hidden">
          <!-- <div class="absolute top-6 right-6 text-6xl font-black text-black select-none leading-none">03</div> -->
          <div class="w-10 h-10 rounded-xl bg-[#0066FF]/15 flex items-center justify-center mb-6"><span
              class="text-[#0066FF] font-black text-sm">03</span></div>
          <h3 class="font-bold text-black text-lg mb-3">Mise en ligne & formation</h3>
          <p class="text-black text-sm leading-relaxed">Le site est déployé sur votre domaine. Je vous forme à la
            prise en main et reste disponible après livraison.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="py-28 my-24 bg-[#FBF2E3] overflow-hidden relative">
    <div class="max-w-4xl mx-auto px-6">
      <p class="text-sm font-semibold text-[#E88200] tracking-widest uppercase mb-4">FAQ</p>
      <h2 class="font-black text-[#0A0A0A] mb-14" style="font-size: clamp(1.8rem, 4vw, 3rem);">Questions fréquentes</h2>
      <div class="space-y-4">
        <div class="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
          <div class="flex items-start gap-4"><span
              class="w-7 h-7 rounded-full bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">1</span>
            <div>
              <h3 class="font-bold text-[#0A0A0A] text-base mb-2">Quelles technologies utilisez-vous pour créer les
                sites ?</h3>
              <p class="text-[#6B6B6B] text-sm leading-relaxed">J'utilise principalement React, Next.js et TypeScript
                pour les sites sur-mesure modernes, et WordPress pour les sites avec besoin de gestion de contenu
                autonome. Tous mes sites sont optimisés pour la performance et le SEO.</p>
            </div>
          </div>
        </div>
        <div class="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
          <div class="flex items-start gap-4"><span
              class="w-7 h-7 rounded-full bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">2</span>
            <div>
              <h3 class="font-bold text-[#0A0A0A] text-base mb-2">Êtes-vous disponible partout au Bénin ?</h3>
              <p class="text-[#6B6B6B] text-sm leading-relaxed">Oui, je travaille entièrement à distance (remote). Je
                suis basé à Abomey-Calavi mais j'interviens pour des clients partout au Bénin et à l'international. Tout
                se passe en visioconférence, email et partage d'écran.</p>
            </div>
          </div>
        </div>
        <div class="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
          <div class="flex items-start gap-4"><span
              class="w-7 h-7 rounded-full bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">3</span>
            <div>
              <h3 class="font-bold text-[#0A0A0A] text-base mb-2">Combien de temps faut-il pour créer un site web ?</h3>
              <p class="text-[#6B6B6B] text-sm leading-relaxed">Un site vitrine simple (3-5 pages) est livré en 2 à 4
                semaines. Un site e-commerce prend entre 4 et 8 semaines. Une application sur-mesure dépend du périmètre
                — je vous donne une estimation précise lors du devis.</p>
            </div>
          </div>
        </div>
        <div class="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
          <div class="flex items-start gap-4"><span
              class="w-7 h-7 rounded-full bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">4</span>
            <div>
              <h3 class="font-bold text-[#0A0A0A] text-base mb-2">Proposez-vous la maintenance et le support après
                livraison ?</h3>
              <p class="text-[#6B6B6B] text-sm leading-relaxed">Oui. Après la livraison, je reste disponible pour les
                corrections, mises à jour et évolutions. Des forfaits de maintenance mensuelle sont disponibles sur
                demande.</p>
            </div>
          </div>
        </div>
        <div class="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
          <div class="flex items-start gap-4"><span
              class="w-7 h-7 rounded-full bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">5</span>
            <div>
              <h3 class="font-bold text-[#0A0A0A] text-base mb-2">Que comprend exactement votre prestation ?</h3>
              <p class="text-[#6B6B6B] text-sm leading-relaxed">La prestation comprend : la conception graphique
                (maquette Figma), le développement complet, l'optimisation SEO de base (balises, métadonnées, sitemap,
                robots.txt), la mise en ligne sur votre hébergement, et une formation rapide à la prise en main.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-28 my-24 bg-[#F9F9F9] relative overflow-hidden">
    <!-- <div class="absolute inset-0 bg-gradient-to-br from-[#0066FF] via-[#0055dd] to-[#0044bb]"></div> -->
    <!-- <div
      class="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none">
    </div> -->
    <div class="max-w-4xl mx-auto px-6 text-center relative">
      <h2 class="font-black text-black mb-4" style="font-size: clamp(1.8rem, 4vw, 2.8rem);">Prêt à lancer votre projet ?
      </h2>
      <p class="text-gray-600 mb-10 text-lg">Devis gratuit sous 48h. Sans engagement.</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <UButton to="/contact" class="" color="primary" variant="outline" size="lg">
          Me contacter
        </UButton>
        <UButton to="/tarifs" class="bg-[#E78318] hover:bg-[#cf7314] focus:ring-[#E78318] text-white border-transparent" size="lg">
          Voir les tarifs indicatifs ->
        </UButton>
      </div>
    </div>
  </section>
</template>

<script setup>
useSeoMeta({
  title: 'Création & Design Web sur-mesure', // Affichera : "Création & Design Web sur-mesure | Chirac Dona Michoagan"
  description: 'Conception de site web modernes et performants, interfaces UI/UX et sites vitrines responsives pour entreprises et indépendants au Bénin et à l\'international.',
})
import { ref, computed, onMounted } from "vue";

const search = ref("");
const selectedProject = ref("");

const projects = [
  {
    title: "Site web E-commerce pour une boutique de vente.",
    description:
      "Site web E-commerce pour une boutique de vente.",
    image: "assets/e-commerce-siteweb.png",
    technologies: [
      "HTML 5", "CSS", "JavaScript", "Bootstrap 5", "PHP", "MySQL"
    ],
    demo: "https://e-commerce-b2b.free.nf",
    github: "https://github.com/chiracmichoagan/E-Commerce-main.git",
  },
  {
    title: "Site vitrine Nickel cosmetique 229",
    description:
      "Site web vitrine pour une boutique de vente de cosmetique.",
    image: "assets/Macbook-Air-nickel-cosmetique-229.netlify.app.png",
    technologies: [
      "React", "tailwinds css", "JavaScript",
    ],
    demo: "https://nickel-cosmetique-229.netlify.app/",
    github: "https://github.com/chiracmichoagan",
  },

  {
    title: "Application web de télechargement des vidéos pinterest sans logo",
    description:
      "Utiliser cette application web pour télécharger des vidéos pinterest sans logo, vous pouvez télécharger des vidéos pinterest en ligne sans filigrane.",
    image: "assets/application_web_videos_pinterest_sans_logo.png",
    technologies: [
      "React js", "tailwinds css", "vite"
    ],
    demo: "https://pinsave-main.vercel.app",
    github: "https://github.com/chiracmichoagan",
  },
  {
    title: "Site web vitrine pour le commerce",
    description:
      "C'est un site web vitrine pour le commerce, qui présente les produits et services proposés par le commerce.",
    image: "assets/site_de_vente_vitrine.png",
    technologies: [
      "React js", "tailwinds css", "vite"
    ],
    demo: "https://luminous-begonia-ee76d7.netlify.app/",
    github: "https://github.com/chiracmichoagan",
  },
  {
    title: "Registre des ventes fiche quotidien",
    description:
      "Un logiciel de registre des ventes qui permet de suivre les ventes quotidiennes et de générer des rapports.",
    image: "assets/registre-des-ventes-fiche-quotidien.png",
    technologies: [
      "React js", "tailwinds css", "vite"
    ],
    demo: "https://registre-des-ventes-fiche-quotidien-chi.vercel.app/",
    github: "https://github.com/chiracmichoagan",
  },

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
  {
    title: "Logiciel generateur de facture",
    description:
      "Application web de generateur de facture",
    image: "assets/image-generateur-de-reçu.png",
    technologies: [
      "react js",
      "material ui",
      "vite"
    ],
    demo: "https://facture-generator-web-ewgy.vercel.app/",
    github: "https://github.com/chiracmichoagan/facture-generator.git",
  },
  {
    title: "Landings page pour une agence de santé médicale",
    description:
      "Page d'accueil pour une agence de santé médicale",
    image: "assets/landing-page-sante.png",
    technologies: [
      "html",
      "css",
      "javascript",
      "tailwinds css"
    ],
    demo: "https://landing-page-medical.vercel.app/",
    github: "https://github.com/chiracmichoagan/landing-page-medical.git",
  },
  {
    title: "App menu restaurant",
    description:
      "Application web de menu restaurant",
    image: "assets/app-menu-restaurant.png",
    technologies: [
      "html",
      "css",
      "javascript",
      "tailwinds css"
    ],
    demo: "https://app-menu-zeta.vercel.app/",
    github: "https://github.com/chiracmichoagan/app-menu-2.git",
  },
  {
    title: "Site web e-commerce pour une boutique de vente des objets electroniques",
    description:
      "Site web e-commerce pour une boutique de vente des objets electroniques.",
    image: "assets/e-commerce-site.png",
    technologies: [
      "html",
      "css",
      "javascript",
      "tailwinds css"
    ],
    demo: "https://ecommerce-website-lovat-beta.vercel.app/",
    github: "https://github.com/chiracmichoagan/E-Commerce-Website.git",
  },
  {
    title: "Application web super Mario",
    description:
      "Page d'accueil pour le super Mario",
    image: "assets/super-mario-site.png",
    technologies: [
      "html",
      "css",
      "tailwinds css",
      'JavaScript Vanilla (ES6)'
    ],
    demo: "https://super-mario-theta-seven.vercel.app/",
    github: "https://github.com/chiracmichoagan/super-mario.git",
  },
  {
    title: "Site web pour un restaurant BonAppetit",
    description:
      "Page d'accueil pour le restaurant BonAppetit",
    image: "assets/bonappetit-site.png",
    technologies: [
      "tailwinds css",
      'vues js'
    ],
    demo: "https://food-ecommerce-eta.vercel.app/",
    github: "https://github.com/chiracmichoagan/food-ecommerce.git",
  },
  {
    title: "Mon portfolio personnel",
    description:
      "Page d'accueil pour mon portfolio personnel",
    image: "assets/portfolio-site.png",
    technologies: [
      "nuxt js",
      'tailwinds css'
    ],
    demo: "https://portfolio-nuxt-tau.vercel.app/",
    github: "https://github.com/chiracmichoagan/portfolio-nuxt.git",
  },
  {
    title: "Site blog Astro",
    description:
      "Blog personnel construit avec Astro, un générateur de site statique moderne qui permet de créer des sites rapides et performants en utilisant les technologies web les plus récentes.",
    image: "assets/blog-astro-site.png",
    technologies: [
      "astro js",
      'tailwinds css'
    ],
    demo: "https://site-blog-astro.netlify.app/",
    github: "https://github.com/chiracmichoagan/blogAstro.git",
  },
  {
    title: "Site web pour restaurant fast food",
    description:
      "Landing page pour un restaurant fast food",
    image: "assets/restaurant-site.png",
    technologies: [
      "vues js",
      'tailwinds css'
    ],
    demo: "https://fast-food-saveur.netlify.app/",
    github: "https://github.com/chiracmichoagan/Fast-Food.git",
  },
  {
    title: "Site web vitrine pour restaurant fast food",
    description:
      "C'est un site web vitrine pour un restaurant fast food, qui présente les menus, les promotions et les informations de contact du restaurant.",
    image: "assets/site-web-fastfood-ecom.netlify.app.png",
    technologies: [
      "HTML 5", "CSS", "JavaScript",
    ],
    demo: "https://fastfood-ecom.netlify.app/",
    github: "https://github.com/chiracmichoagan/Fast-Food.git",
  },
  {
    title: "Portfolio pour un Designer",
    description:
      "C'est un portfolio pour un designer, qui présente ses travaux, ses compétences et ses informations de contact.",
    image: "assets/site-web-vitrine-portfolio-dona-chirac.netlify.app.png",
    technologies: [
      "HTML 5", "CSS", "JavaScript", "Bootstrap 5"
    ],
    demo: "https://fastfood-ecom.netlify.app/",
    github: "https://github.com/chiracmichoagan/Fast-Food.git",
  },
  {
    title: "Site web solution zozor",
    description:
      "Un landing page pour une solution zozor, qui présente les fonctionnalités et les avantages de la solution.",
    image: "assets/site-web-solution-zorzor.png",
    technologies: [
      "HTML 5", "CSS", "JavaScript", "Bootstrap 5"
    ],
    demo: "https://solution-zorzor.netlify.app/",
    github: "https://github.com/chiracmichoagan/TP_solution-zozor.git",
  },
  {
    title: "site web de location des chambres et maison",
    description:
      "c'est un site web de location des chambres et maison, qui présente les chambres et maisons disponibles à la location, les tarifs et les informations de contact.",
    image: "assets/Macbook-Air-booki-hebergement-web.netlify.app.png",
    technologies: [
      "HTML 5", "CSS", "JavaScript", "Bootstrap 5"
    ],
    demo: "https://booki-hebergement-web.netlify.app/",
    github: "https://github.com/chiracmichoagan/TP_Booki.git",
  }
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

<style scoped>
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


.spanbgcolor {
  background-color: rgba(0, 102, 255, 0.07);
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
}
</style>
