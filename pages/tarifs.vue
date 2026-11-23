<template>
  <!-- <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/80 backdrop-blur-md border-b border-black/6">
    <div class="max-w-6xl mx-auto px-6 flex items-center justify-between h-16"><a class="relative"
        aria-label="Antoine Gueguen" href="/"><span class="md:hidden relative block h-8 w-8"><img
            src="/Logo - Noir.svg" alt="Antoine Gueguen"
            class="absolute inset-0 h-8 w-8 transition-opacity duration-500 opacity-100"><img src="/Logo - Blanc.svg"
            alt="" class="absolute inset-0 h-8 w-8 transition-opacity duration-500 opacity-0"></span><span
          class="hidden md:block relative h-8" style="width: 149px;"><img src="/Logotype - Noir.svg"
            alt="Antoine Gueguen" width="149" height="32"
            class="h-8 w-auto transition-opacity duration-500 opacity-100"><img src="/Logotype - Blanc.svg" alt=""
            width="149" height="32"
            class="absolute inset-0 h-8 w-auto transition-opacity duration-500 opacity-0"></span></a>
      <nav class="hidden md:flex items-center gap-7"><a href="/#realisations"
          class="text-sm font-medium transition-colors duration-500 text-gray-500 hover:text-gray-900">Réalisations</a><a
          href="/#secteurs"
          class="text-sm font-medium transition-colors duration-500 text-gray-500 hover:text-gray-900">Mes
          services</a><a href="/#animations"
          class="text-sm font-medium transition-colors duration-500 text-gray-500 hover:text-gray-900">Savoir-faire</a><a
          href="/#estimateur"
          class="text-sm font-medium transition-colors duration-500 text-gray-500 hover:text-gray-900">Estimation</a><a
          href="/#apropos"
          class="text-sm font-medium transition-colors duration-500 text-gray-500 hover:text-gray-900">À propos</a><a
          href="/#contact"
          class="text-sm font-medium transition-colors duration-500 text-gray-500 hover:text-gray-900">Contact</a>
      </nav>
      <div class="hidden md:flex items-center"><a href="/#contact"
          class="bg-[#0066FF] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-500 active:bg-blue-700 transition-colors duration-200">Me
          contacter</a></div><button class="md:hidden flex flex-col gap-[5px] p-2 -mr-2" aria-label="Menu"><span
          class="block w-6 h-[2px] transition-all duration-500 origin-center  bg-gray-900"></span><span
          class="block w-6 h-[2px] transition-all duration-500  bg-gray-900"></span><span
          class="block w-6 h-[2px] transition-all duration-500 origin-center  bg-gray-900"></span></button>
    </div>
  </header> -->
  <!-- <main> -->
    
  <nav class="container my-12 p-4 max-w-6xl mx-auto flex items-center gap-2 text-sm text-gray-600 mb-12"
    aria-label="Fil d'Ariane">
    <NuxtLink class="hover:text-black transition-colors" to="/">
      Accueil
    </NuxtLink>
    <span>/</span>
    <span class="text-black font-medium">Tarifs</span>
  </nav>
    <section class="pt-28 md:pt-40 pb-24 bg-[#FBF2E3] relative overflow-hidden">
      <!-- <div class="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0d1117] to-[#0A0A0A]"></div> -->
      <!-- <div
        class="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0066FF]/8 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none">
      </div> -->
      <div class="max-w-6xl mx-auto px-6 relative">
        <!-- <nav class="flex items-center gap-2 text-sm text-white/30 mb-12" aria-label="Fil d'Ariane"><a
            class="hover:text-white/60 transition-colors" href="/">Accueil</a><span>/</span><span
            class="text-white/60 font-medium">Tarifs</span></nav> -->
        <p class="text-sm font-semibold text-[#E88200] tracking-widest uppercase mb-5">Tarifs indicatifs</p>
        <h1 class="font-black text-black mb-6 leading-tight" style="font-size: clamp(2.2rem, 5.5vw, 4rem);">Combien
          coûte un site web<br><span class="text-[#E88200]">freelance</span> au Bénin ?</h1>
        <p class="text-lg text-gray-600 max-w-2xl leading-relaxed">Les tarifs indiqués sont des fourchettes indicatives.
          Chaque projet est unique — utilisez l'estimateur ci-dessous ou contactez-moi pour un devis personnalisé
          gratuit sous 48h.</p>
      </div>
    </section>
    <section class="py-28 bg-[#F9F9F9]">
      <div class="max-w-6xl mx-auto px-6">
        <div class="mb-16">
          <p class="text-sm font-semibold text-[#0066FF] tracking-widest uppercase mb-3">Grille tarifaire</p>
          <h2 class="font-black text-[#0A0A0A]" style="font-size: clamp(1.6rem, 3vw, 2.5rem);">Choisissez votre type de
            site</h2>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            class="relative bg-white border rounded-2xl p-7 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            style="border-color: rgb(243, 244, 246);">
            <div class="absolute top-0 left-0 right-0 h-[3px]"
              style="background: linear-gradient(90deg, rgb(0, 102, 255), rgba(0, 102, 255, 0.533));"></div>
            <div class="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5"
              style="background-color: rgba(0, 102, 255, 0.07);">🏠</div>
            <h3 class="font-black text-[#0A0A0A] text-lg mb-1">Site vitrine</h3>
            <p class="text-xs text-[#6B6B6B] mb-5">3–5 pages</p>
            <div class="text-2xl font-black mb-1" style="color: rgb(0, 102, 255);">800€ – 2 000€</div>
            <div class="text-xs text-[#6B6B6B] mb-6">Délai : 2–4 sem.</div>
            <div class="pt-5 border-t border-gray-100">
              <p class="text-xs font-semibold text-[#0A0A0A] uppercase tracking-wider mb-2">Idéal pour</p>
              <p class="text-sm text-[#6B6B6B]">Artisans, commerçants, professions libérales</p>
            </div><a
              class="mt-6 inline-flex items-center gap-2 text-sm font-bold py-2.5 px-5 rounded-xl transition-all w-full justify-center"
              href="/contact" style="color: rgb(0, 102, 255); background-color: rgba(0, 102, 255, 0.063);">Demander un
              devis →</a>
          </div>
          <div
            class="relative bg-white border rounded-2xl p-7 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            style="border-color: rgb(243, 244, 246);">
            <div class="absolute top-0 left-0 right-0 h-[3px]"
              style="background: linear-gradient(90deg, rgb(124, 58, 237), rgba(124, 58, 237, 0.533));"></div>
            <div class="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5"
              style="background-color: rgba(124, 58, 237, 0.07);">🏢</div>
            <h3 class="font-black text-[#0A0A0A] text-lg mb-1">Site vitrine large</h3>
            <p class="text-xs text-[#6B6B6B] mb-5">6+ pages</p>
            <div class="text-2xl font-black mb-1" style="color: rgb(124, 58, 237);">1 500€ – 3 000€</div>
            <div class="text-xs text-[#6B6B6B] mb-6">Délai : 3–5 sem.</div>
            <div class="pt-5 border-t border-gray-100">
              <p class="text-xs font-semibold text-[#0A0A0A] uppercase tracking-wider mb-2">Idéal pour</p>
              <p class="text-sm text-[#6B6B6B]">PME, agences, multi-activités</p>
            </div><a
              class="mt-6 inline-flex items-center gap-2 text-sm font-bold py-2.5 px-5 rounded-xl transition-all w-full justify-center"
              href="/contact" style="color: rgb(124, 58, 237); background-color: rgba(124, 58, 237, 0.063);">Demander un
              devis →</a>
          </div>
          <div
            class="relative bg-white border rounded-2xl p-7 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            style="border-color: rgb(243, 244, 246);">
            <div class="absolute top-0 left-0 right-0 h-[3px]"
              style="background: linear-gradient(90deg, rgb(5, 150, 105), rgba(5, 150, 105, 0.533));"></div>
            <div class="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5"
              style="background-color: rgba(5, 150, 105, 0.07);">🔄</div>
            <h3 class="font-black text-[#0A0A0A] text-lg mb-1">Refonte de site</h3>
            <p class="text-xs text-[#6B6B6B] mb-5">Existant</p>
            <div class="text-2xl font-black mb-1" style="color: rgb(5, 150, 105);">1 200€ – 3 000€</div>
            <div class="text-xs text-[#6B6B6B] mb-6">Délai : 3–6 sem.</div>
            <div class="pt-5 border-t border-gray-100">
              <p class="text-xs font-semibold text-[#0A0A0A] uppercase tracking-wider mb-2">Idéal pour</p>
              <p class="text-sm text-[#6B6B6B]">Modernisation, meilleures performances</p>
            </div><a
              class="mt-6 inline-flex items-center gap-2 text-sm font-bold py-2.5 px-5 rounded-xl transition-all w-full justify-center"
              href="/contact" style="color: rgb(5, 150, 105); background-color: rgba(5, 150, 105, 0.063);">Demander un
              devis →</a>
          </div>
          <div
            class="relative bg-white border rounded-2xl p-7 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            style="border-color: rgb(217, 119, 6);">
            <div class="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full text-white"
              style="background-color: rgb(217, 119, 6);">Populaire</div>
            <div class="absolute top-0 left-0 right-0 h-[3px]"
              style="background: linear-gradient(90deg, rgb(217, 119, 6), rgba(217, 119, 6, 0.533));"></div>
            <div class="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5"
              style="background-color: rgba(217, 119, 6, 0.07);">🛒</div>
            <h3 class="font-black text-[#0A0A0A] text-lg mb-1">Site e-commerce</h3>
            <p class="text-xs text-[#6B6B6B] mb-5">Boutique</p>
            <div class="text-2xl font-black mb-1" style="color: rgb(217, 119, 6);">2 500€ – 5 000€</div>
            <div class="text-xs text-[#6B6B6B] mb-6">Délai : 4–8 sem.</div>
            <div class="pt-5 border-t border-gray-100">
              <p class="text-xs font-semibold text-[#0A0A0A] uppercase tracking-wider mb-2">Idéal pour</p>
              <p class="text-sm text-[#6B6B6B]">Boutique en ligne, paiement CB</p>
            </div><a
              class="mt-6 inline-flex items-center gap-2 text-sm font-bold py-2.5 px-5 rounded-xl transition-all w-full justify-center"
              href="/contact" style="color: rgb(217, 119, 6); background-color: rgba(217, 119, 6, 0.063);">Demander un
              devis →</a>
          </div>
          <div
            class="relative bg-white border rounded-2xl p-7 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            style="border-color: rgb(243, 244, 246);">
            <div class="absolute top-0 left-0 right-0 h-[3px]"
              style="background: linear-gradient(90deg, rgb(10, 10, 10), rgba(10, 10, 10, 0.533));"></div>
            <div class="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5"
              style="background-color: rgba(10, 10, 10, 0.07);">⚙️</div>
            <h3 class="font-black text-[#0A0A0A] text-lg mb-1">Application sur-mesure</h3>
            <p class="text-xs text-[#6B6B6B] mb-5">Sur devis</p>
            <div class="text-2xl font-black mb-1" style="color: rgb(10, 10, 10);">Sur devis</div>
            <div class="text-xs text-[#6B6B6B] mb-6">Délai : Selon périmètre</div>
            <div class="pt-5 border-t border-gray-100">
              <p class="text-xs font-semibold text-[#0A0A0A] uppercase tracking-wider mb-2">Idéal pour</p>
              <p class="text-sm text-[#6B6B6B]">Outil métier, espace client, API</p>
            </div><a
              class="mt-6 inline-flex items-center gap-2 text-sm font-bold py-2.5 px-5 rounded-xl transition-all w-full justify-center"
              href="/contact" style="color: rgb(10, 10, 10); background-color: rgba(10, 10, 10, 0.063);">Demander un
              devis →</a>
          </div>
        </div>
        <p class="text-xs text-[#A0A0A0] mt-8 text-center">* Tarifs HT. Fourchettes indicatives — le tarif final dépend
          de la complexité réelle de votre projet.</p>
      </div>
    </section>
    <section id="estimateur" class="py-24 md:py-32 bg-[#F9F9F9]">
      <div class="max-w-3xl mx-auto px-6">
        <div style="opacity: 0; transform: translateY(24px);">
          <p class="text-sm font-semibold text-[#0066FF] tracking-widest uppercase mb-3">Devis instantané</p>
          <h2 class="font-black text-[#0A0A0A] mb-4" style="font-size: clamp(2rem, 5vw, 4rem);">Estimez votre projet
          </h2>
          <p class="text-lg text-[#6B6B6B] mb-12">4 questions pour obtenir une fourchette de prix indicative.</p>
        </div>
        <div class="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
          <div class="h-1 bg-gray-100">
            <div class="h-full bg-[#0066FF]" style="width: 25%;"></div>
          </div>
          <div class="p-6 sm:p-8 md:p-12">
            <div style="opacity: 1; transform: none;">
              <div class="flex items-center justify-between mb-2"><span class="text-xs text-[#6B6B6B] font-medium">Étape
                  1/4</span></div>
              <h3 class="font-bold text-xl text-[#0A0A0A] mb-1">Quel type de site ?</h3>
              <div class="mb-6"></div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3"><button
                  class="p-4 rounded-xl border-2 text-left transition-all duration-200 border-gray-200 hover:border-gray-300"><span
                    class="text-2xl block mb-2">🏠</span><span class="font-medium text-sm text-[#0A0A0A]">Vitrine
                    simple</span></button><button
                  class="p-4 rounded-xl border-2 text-left transition-all duration-200 border-gray-200 hover:border-gray-300"><span
                    class="text-2xl block mb-2">🛒</span><span
                    class="font-medium text-sm text-[#0A0A0A]">E-commerce</span></button><button
                  class="p-4 rounded-xl border-2 text-left transition-all duration-200 border-gray-200 hover:border-gray-300"><span
                    class="text-2xl block mb-2">🔄</span><span class="font-medium text-sm text-[#0A0A0A]">Refonte de
                    site existant</span></button><button
                  class="p-4 rounded-xl border-2 text-left transition-all duration-200 border-gray-200 hover:border-gray-300"><span
                    class="text-2xl block mb-2">⚙️</span><span class="font-medium text-sm text-[#0A0A0A]">Application
                    sur-mesure</span></button></div>
              <div class="flex gap-3 mt-8"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-28 bg-[#F9F9F9]">
      <div class="max-w-4xl mx-auto px-6">
        <p class="text-sm font-semibold text-[#0066FF] tracking-widest uppercase mb-4">FAQ</p>
        <h2 class="font-black text-[#0A0A0A] mb-14" style="font-size: clamp(1.8rem, 4vw, 3rem);">Questions fréquentes
          sur les tarifs</h2>
        <div class="space-y-4">
          <div class="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
            <div class="flex items-start gap-4"><span
                class="w-7 h-7 rounded-full bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">1</span>
              <div>
                <h3 class="font-bold text-[#0A0A0A] text-base mb-2">Combien coûte un site vitrine professionnel ?</h3>
                <p class="text-[#6B6B6B] text-sm leading-relaxed">Un site vitrine professionnel (3 à 5 pages) coûte
                  généralement entre 800€ et 2 000€ selon la complexité du design, le nombre de pages et les
                  fonctionnalités souhaitées (formulaire de contact, galerie, blog, SEO avancé).</p>
              </div>
            </div>
          </div>
          <div class="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
            <div class="flex items-start gap-4"><span
                class="w-7 h-7 rounded-full bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">2</span>
              <div>
                <h3 class="font-bold text-[#0A0A0A] text-base mb-2">Quel est le tarif pour un site e-commerce ?</h3>
                <p class="text-[#6B6B6B] text-sm leading-relaxed">Un site e-commerce complet (boutique en ligne avec
                  paiement sécurisé, gestion des stocks) démarre à partir de 2 500€. Le tarif final dépend du nombre de
                  produits, des fonctionnalités et des intégrations nécessaires.</p>
              </div>
            </div>
          </div>
          <div class="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
            <div class="flex items-start gap-4"><span
                class="w-7 h-7 rounded-full bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">3</span>
              <div>
                <h3 class="font-bold text-[#0A0A0A] text-base mb-2">Y a-t-il des frais supplémentaires après la
                  livraison ?</h3>
                <p class="text-[#6B6B6B] text-sm leading-relaxed">Les frais d'hébergement (serveur + nom de domaine)
                  sont à votre charge, généralement entre 10€ et 30€ par mois. Des forfaits de maintenance mensuelle
                  sont disponibles sur demande pour les mises à jour et corrections.</p>
              </div>
            </div>
          </div>
          <div class="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
            <div class="flex items-start gap-4"><span
                class="w-7 h-7 rounded-full bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">4</span>
              <div>
                <h3 class="font-bold text-[#0A0A0A] text-base mb-2">Proposez-vous un paiement en plusieurs fois ?</h3>
                <p class="text-[#6B6B6B] text-sm leading-relaxed">Oui. Le paiement se fait en deux fois : 30% d'acompte
                  au démarrage du projet et 70% à la livraison du site. Pour les projets importants, un échelonnement
                  personnalisé peut être envisagé.</p>
              </div>
            </div>
          </div>
          <div class="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
            <div class="flex items-start gap-4"><span
                class="w-7 h-7 rounded-full bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">5</span>
              <div>
                <h3 class="font-bold text-[#0A0A0A] text-base mb-2">Les devis sont-ils gratuits et sans engagement ?
                </h3>
                <p class="text-[#6B6B6B] text-sm leading-relaxed">Oui, absolument. Je fournis un devis détaillé et
                  gratuit sous 48h après notre premier échange. Aucun engagement n'est requis de votre part.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section class="py-24 bg-[#FBF2E3] relative overflow-hidden">
      <!-- <div class="absolute inset-0 bg-gradient-to-br from-[#0066FF] via-[#0055dd] to-[#0044bb]"></div> -->
      <!-- <div
        class="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none">
      </div> -->
      <div class="max-w-4xl mx-auto px-6 text-center relative">
        <h2 class="font-black text-black mb-4" style="font-size: clamp(1.8rem, 4vw, 2.8rem);">Prêt à démarrer ?</h2>
        <p class="text-gray-600 mb-10 text-lg">Devis gratuit, personnalisé et sans engagement sous 48h.</p>
       <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <UButton to="/contact" class="" color="primary" variant="outline" size="lg">
        Demander un devis gratuit
        </UButton>
        <UButton to="/servicesdeveloppementweb" class="bg-[#E78318] hover:bg-[#cf7314] focus:ring-[#E78318] text-white border-transparent" size="lg">
         Voir mes services ->
        </UButton>
      </div> 
        <!-- <div class="flex flex-col sm:flex-row gap-4 justify-center"><a
            class="bg-white text-[#0066FF] font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors shadow-lg"
            href="/contact">Demander un devis gratuit</a><a
            class="border border-white/30 text-white font-medium px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
            href="/servicesdeveloppementweb">Voir mes services</a></div> -->
      </div>
    </section>
    <!-- <footer class="bg-[#0A0A0A] border-t border-white/8">
      <div class="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <p class="text-white/80 font-bold text-sm mb-3">Antoine Gueguen</p>
            <p class="text-white/55 text-xs leading-relaxed mb-4">Développeur web freelance — création de sites
              sur-mesure React, Next.js, WordPress. Disponible partout au Bénin en remote.</p><a
              href="mailto:michoaganchiracdona@gmail.com"
              class="text-blue-400 text-xs font-medium hover:underline">michoaganchiracdona@gmail.com</a>
          </div>
          <div>
            <p class="text-white/55 text-xs font-semibold uppercase tracking-wider mb-4">Navigation</p>
            <ul class="space-y-2">
              <li><a class="text-white/50 text-xs hover:text-white/80 transition-colors" href="/">Accueil</a></li>
              <li><a class="text-white/50 text-xs hover:text-white/80 transition-colors" href="/a-propos">À propos</a>
              </li>
              <li><a class="text-white/50 text-xs hover:text-white/80 transition-colors" href="/services">Services</a>
              </li>
              <li><a class="text-white/50 text-xs hover:text-white/80 transition-colors"
                  href="/realisations">Réalisations</a></li>
              <li><a class="text-white/50 text-xs hover:text-white/80 transition-colors" href="/tarifs">Tarifs</a></li>
              <li><a class="text-white/50 text-xs hover:text-white/80 transition-colors" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <p class="text-white/55 text-xs font-semibold uppercase tracking-wider mb-4">Secteurs</p>
            <ul class="space-y-2">
              <li><a class="text-white/50 text-xs hover:text-white/80 transition-colors" href="/restaurant">Site web
                  restaurant</a></li>
              <li><a class="text-white/50 text-xs hover:text-white/80 transition-colors" href="/medecin">Site web
                  médecin</a></li>
              <li><a class="text-white/50 text-xs hover:text-white/80 transition-colors" href="/avocat">Site web
                  avocat</a></li>
              <li><a class="text-white/50 text-xs hover:text-white/80 transition-colors" href="/mecanicien">Site web
                  mécanicien</a></li>
              <li><a class="text-white/50 text-xs hover:text-white/80 transition-colors" href="/fleuriste">Site web
                  fleuriste</a></li>
              <li><a class="text-white/50 text-xs hover:text-white/80 transition-colors" href="/concessionnaire">Site
                  web concessionnaire</a></li>
              <li><a class="text-white/50 text-xs hover:text-white/80 transition-colors" href="/permis-bateaux">Permis
                  bateaux</a></li>
            </ul>
          </div>
          <div>
            <p class="text-white/55 text-xs font-semibold uppercase tracking-wider mb-4">Guides</p>
            <ul class="space-y-2">
              <li><a class="text-white/50 text-xs hover:text-white/80 transition-colors"
                  href="/guides/freelance-ou-agence-web">Freelance ou agence web ?</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-xs text-white/50">© 2026 Antoine Gueguen — Développeur Web Freelance | React, Next.js,
            WordPress | Bénin</p>
          <div class="flex items-center gap-6"><a class="text-xs text-white/50 hover:text-white/80 transition-colors"
              href="/mentions-legales">Mentions légales</a><a
              class="text-xs text-white/50 hover:text-white/80 transition-colors"
              href="/politique-de-confidentialite">Confidentialité</a><a href="https://linkedin.com/in/antoine-gueguen"
              target="_blank" rel="noopener noreferrer" class="text-white/50 hover:text-[#0066FF] transition-colors"
              aria-label="LinkedIn Antoine Gueguen"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z">
                </path>
              </svg></a></div>
        </div>
      </div>
    </footer> -->
  <!-- </main> -->
</template>

<script setup>
</script>

<style scoped></style>