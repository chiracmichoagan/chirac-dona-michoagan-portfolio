<template>
    <nav class="container my-12 p-4 max-w-6xl mx-auto flex items-center gap-2 text-sm text-gray-600 mb-12" aria-label="Fil d'Ariane">
        <NuxtLink class="hover:text-black transition-colors" to="/">
            Accueil
        </NuxtLink>
        <span>/</span>
        <span class="text-black font-medium">Freelance ou agence web</span>

    </nav>

    <section class="pt-28 md:pt-40 pb-20 bg-[#0A0A0A] relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0d1117] to-[#0A0A0A]"></div>
        <div
            class="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0066FF]/8 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none">
        </div>
        <div class="max-w-4xl mx-auto px-6 relative">
            <p class="text-sm font-semibold text-[#0066FF] tracking-widest uppercase mb-5">Guide</p>
            <h1 class="font-black text-white mb-6 leading-tight" style="font-size: clamp(2rem, 5vw, 3.5rem);">
                Freelance ou agence web :<br><span class="text-[#0066FF]">quelle différence</span>, et quel choix ?
            </h1>
            <p class="text-lg text-white/55 leading-relaxed">Le choix entre un développeur freelance et une agence
                web dépend principalement de trois facteurs : le budget disponible, la taille du projet, et le
                niveau de suivi attendu après la livraison.</p>
        </div>
    </section>
    <section class="py-20 bg-[#F9F9F9]">
        <div class="max-w-3xl mx-auto px-6">
            <p class="text-lg text-[#1A1A1A] leading-relaxed mb-6"><strong>Un développeur web freelance</strong> est
                un professionnel indépendant qui conçoit et développe seul des sites web pour ses clients, sans
                structure d'équipe intermédiaire. <strong>Une agence web</strong> est une entreprise qui emploie
                plusieurs spécialistes (designer, développeur, chef de projet, parfois expert SEO ou ads) pour
                livrer un projet de manière collective.</p>
            <p class="text-[#6B6B6B] leading-relaxed">La différence principale n'est donc pas la qualité du résultat
                final, mais la structure derrière : un seul interlocuteur polyvalent contre une équipe de
                spécialistes — avec les écarts de coût et d'organisation que cela implique.</p>
        </div>
    </section>
    <section class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-6">
            <h2 class="font-black text-[#0A0A0A] mb-10" style="font-size: clamp(1.6rem, 3vw, 2.4rem);">Freelance vs
                agence web : le comparatif</h2>
            <div class="overflow-x-auto">
                <table class="w-full text-sm border-collapse">
                    <thead>
                        <tr class="border-b-2 border-[#0A0A0A]">
                            <th class="text-left py-4 pr-4 font-bold text-[#0A0A0A]">Critère</th>
                            <th class="text-left py-4 pr-4 font-bold text-[#0066FF]">Freelance</th>
                            <th class="text-left py-4 font-bold text-[#7C3AED]">Agence</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b border-gray-100">
                            <td class="py-4 pr-4 font-semibold text-[#0A0A0A]">Tarif (site vitrine standard)</td>
                            <td class="py-4 pr-4 text-[#6B6B6B]">800€ – 2 000€</td>
                            <td class="py-4 text-[#6B6B6B]">2 500€ – 8 000€</td>
                        </tr>
                        <tr class="border-b border-gray-100">
                            <td class="py-4 pr-4 font-semibold text-[#0A0A0A]">Interlocuteur</td>
                            <td class="py-4 pr-4 text-[#6B6B6B]">Direct, la même personne du début à la fin</td>
                            <td class="py-4 text-[#6B6B6B]">Chef de projet, parfois plusieurs intermédiaires</td>
                        </tr>
                        <tr class="border-b border-gray-100">
                            <td class="py-4 pr-4 font-semibold text-[#0A0A0A]">Délai de réponse</td>
                            <td class="py-4 pr-4 text-[#6B6B6B]">Rapide (souvent sous 24-48h)</td>
                            <td class="py-4 text-[#6B6B6B]">Variable selon la charge de l'équipe</td>
                        </tr>
                        <tr class="border-b border-gray-100">
                            <td class="py-4 pr-4 font-semibold text-[#0A0A0A]">Flexibilité sur le brief</td>
                            <td class="py-4 pr-4 text-[#6B6B6B]">Forte — ajustements directs sans validation
                                hiérarchique</td>
                            <td class="py-4 text-[#6B6B6B]">Plus encadrée, process de validation interne</td>
                        </tr>
                        <tr class="border-b border-gray-100">
                            <td class="py-4 pr-4 font-semibold text-[#0A0A0A]">Capacité sur gros volumes</td>
                            <td class="py-4 pr-4 text-[#6B6B6B]">Limitée à un projet à la fois</td>
                            <td class="py-4 text-[#6B6B6B]">Plusieurs expertises en parallèle (design, dev, SEO,
                                ads)</td>
                        </tr>
                        <tr class="border-b border-gray-100">
                            <td class="py-4 pr-4 font-semibold text-[#0A0A0A]">Continuité en cas d'absence</td>
                            <td class="py-4 pr-4 text-[#6B6B6B]">Risque si le freelance n'est plus disponible</td>
                            <td class="py-4 text-[#6B6B6B]">Garantie par l'équipe</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
    <section class="py-20 bg-[#F9F9F9]">
        <div class="max-w-3xl mx-auto px-6">
            <h2 class="font-black text-[#0A0A0A] mb-10" style="font-size: clamp(1.6rem, 3vw, 2.4rem);">Comment
                choisir entre freelance et agence ?</h2>
            <div class="space-y-6">
                <div class="flex gap-5"><span class="text-2xl font-black text-[#0066FF]/30 flex-shrink-0">01</span>
                    <div>
                        <h3 class="font-bold text-[#0A0A0A] text-base mb-1.5">Évaluez le budget réel disponible</h3>
                        <p class="text-[#6B6B6B] text-sm leading-relaxed">Pour un site vitrine ou e-commerce de
                            taille standard, un freelance facture généralement 2 à 4 fois moins qu'une agence pour
                            un résultat technique équivalent.</p>
                    </div>
                </div>
                <div class="flex gap-5"><span class="text-2xl font-black text-[#0066FF]/30 flex-shrink-0">02</span>
                    <div>
                        <h3 class="font-bold text-[#0A0A0A] text-base mb-1.5">Mesurez la taille et la complexité du
                            projet</h3>
                        <p class="text-[#6B6B6B] text-sm leading-relaxed">Un projet nécessitant plusieurs expertises
                            en parallèle (refonte de marque, campagnes ads, contenu éditorial massif) tire davantage
                            parti d'une équipe pluridisciplinaire.</p>
                    </div>
                </div>
                <div class="flex gap-5"><span class="text-2xl font-black text-[#0066FF]/30 flex-shrink-0">03</span>
                    <div>
                        <h3 class="font-bold text-[#0A0A0A] text-base mb-1.5">Vérifiez les garanties de continuité
                        </h3>
                        <p class="text-[#6B6B6B] text-sm leading-relaxed">Demandez systématiquement l'accès au code
                            source et à l'hébergement, et clarifiez les modalités de maintenance après livraison —
                            avec un freelance comme avec une agence.</p>
                    </div>
                </div>
                <div class="flex gap-5"><span class="text-2xl font-black text-[#0066FF]/30 flex-shrink-0">04</span>
                    <div>
                        <h3 class="font-bold text-[#0A0A0A] text-base mb-1.5">Regardez les réalisations passées, pas
                            le statut</h3>
                        <p class="text-[#6B6B6B] text-sm leading-relaxed">Un portfolio vérifiable et des avis
                            clients comptent plus que le fait d'être freelance ou agence. La qualité dépend de la
                            personne ou de l'équipe, pas de la structure juridique.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="py-20 bg-white">
        <div class="max-w-3xl mx-auto px-6">
            <p class="text-sm font-semibold text-[#0066FF] tracking-widest uppercase mb-4">FAQ</p>
            <h2 class="font-black text-[#0A0A0A] mb-14" style="font-size: clamp(1.8rem, 4vw, 2.6rem);">Questions
                fréquentes</h2>
            <div class="space-y-4">
                <div class="bg-[#F9F9F9] border border-gray-100 rounded-2xl p-7">
                    <div class="flex items-start gap-4"><span
                            class="w-7 h-7 rounded-full bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">1</span>
                        <div>
                            <h3 class="font-bold text-[#0A0A0A] text-base mb-2">Un freelance est-il moins fiable
                                qu'une agence web ?</h3>
                            <p class="text-[#6B6B6B] text-sm leading-relaxed">Non, la fiabilité dépend du
                                professionnel, pas du statut. Un freelance expérimenté avec des références
                                vérifiables (portfolio, avis clients) est tout aussi fiable qu'une agence. La
                                différence se situe plutôt dans la taille de l'équipe et la capacité à absorber de
                                très gros projets.</p>
                        </div>
                    </div>
                </div>
                <div class="bg-[#F9F9F9] border border-gray-100 rounded-2xl p-7">
                    <div class="flex items-start gap-4"><span
                            class="w-7 h-7 rounded-full bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">2</span>
                        <div>
                            <h3 class="font-bold text-[#0A0A0A] text-base mb-2">Pourquoi un freelance est-il moins
                                cher qu'une agence ?</h3>
                            <p class="text-[#6B6B6B] text-sm leading-relaxed">Un freelance n'a pas les frais de
                                structure d'une agence : locaux, commerciaux, chef de projet dédié, marge
                                d'intermédiation. Il facture directement son temps de travail, ce qui se traduit
                                généralement par un tarif inférieur pour un résultat technique équivalent sur un
                                projet de taille standard.</p>
                        </div>
                    </div>
                </div>
                <div class="bg-[#F9F9F9] border border-gray-100 rounded-2xl p-7">
                    <div class="flex items-start gap-4"><span
                            class="w-7 h-7 rounded-full bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">3</span>
                        <div>
                            <h3 class="font-bold text-[#0A0A0A] text-base mb-2">Dans quel cas vaut-il mieux choisir
                                une agence plutôt qu'un freelance ?</h3>
                            <p class="text-[#6B6B6B] text-sm leading-relaxed">Une agence est préférable pour des
                                projets volumineux nécessitant plusieurs expertises en parallèle (design, dev, SEO,
                                contenu, ads) avec un délai serré, ou quand un point de contact unique avec garantie
                                de continuité (en cas d'absence d'une personne) est indispensable.</p>
                        </div>
                    </div>
                </div>
                <div class="bg-[#F9F9F9] border border-gray-100 rounded-2xl p-7">
                    <div class="flex items-start gap-4"><span
                            class="w-7 h-7 rounded-full bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">4</span>
                        <div>
                            <h3 class="font-bold text-[#0A0A0A] text-base mb-2">Que se passe-t-il si mon freelance
                                n'est plus disponible après la livraison ?</h3>
                            <p class="text-[#6B6B6B] text-sm leading-relaxed">C'est le principal risque à vérifier
                                avant de signer : demandez si le freelance propose un suivi ou une maintenance après
                                livraison, et assurez-vous d'avoir un accès complet au code et à l'hébergement pour
                                ne jamais être bloqué.</p>
                        </div>
                    </div>
                </div>
                <div class="bg-[#F9F9F9] border border-gray-100 rounded-2xl p-7">
                    <div class="flex items-start gap-4"><span
                            class="w-7 h-7 rounded-full bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">5</span>
                        <div>
                            <h3 class="font-bold text-[#0A0A0A] text-base mb-2">Peut-on faire confiance à un
                                freelance pour un site professionnel important ?</h3>
                            <p class="text-[#6B6B6B] text-sm leading-relaxed">Oui, à condition de vérifier ses
                                réalisations passées, ses compétences techniques et ses modalités de suivi
                                post-livraison. De nombreuses TPE et PME font développer leur site par des
                                freelances spécialisés plutôt que par des agences, notamment pour des sites vitrines
                                et e-commerce de taille standard.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="py-24 bg-[#0066FF] relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-[#0066FF] via-[#0055dd] to-[#0044bb]"></div>
        <div class="max-w-3xl mx-auto px-6 text-center relative">
            <h2 class="font-black text-white mb-4" style="font-size: clamp(1.6rem, 4vw, 2.4rem);">Vous penchez pour
                un freelance ?</h2>
            <p class="text-white/75 mb-10 text-lg">Je suis développeur web freelance, disponible partout en Bénin
                en remote. Devis gratuit sous 48h.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <NuxtLink
                    class="bg-white text-[#0066FF] font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors shadow-lg"
                    to="/contact">Demander un devis gratuit</NuxtLink>
                <NuxtLink
                    class="border border-white/30 text-white font-medium px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
                    to="/tarifs">Voir les tarifs indicatifs</NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>
