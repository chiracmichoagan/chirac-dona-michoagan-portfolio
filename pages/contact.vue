<template>
  <nav class="container my-12 p-4 max-w-6xl mx-auto flex items-center gap-2 text-sm text-gray-600 mb-12"
    aria-label="Fil d'Ariane">
    <NuxtLink class="hover:text-black transition-colors" to="/">
      Accueil
    </NuxtLink>
    <span>/</span>
    <span class="text-black font-medium">Contact</span>

  </nav>

  <div>

    <section class="pt-28 md:pt-40 pb-12 bg-[#FBF2E3] relative overflow-hidden">
      <!-- <div class="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0d1117] to-[#0A0A0A]"></div> -->
      <!-- <div
              class="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0066FF]/8 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none">
            </div> -->
      <!-- <div
              class="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none">
            </div> -->
      <div class="max-w-6xl mx-auto px-6 relative">
        <!-- <nav class="flex items-center gap-2 text-sm text-white/30 mb-12" aria-label="Fil d'Ariane"><a
                  class="hover:text-white/60 transition-colors" href="/">Accueil</a><span>/</span><span
                  class="text-white/60 font-medium">Contact</span></nav> -->
        <p class="text-sm font-semibold text-[#E88200] tracking-widest uppercase mb-5">Parlons de votre projet</p>
        <h1 class="font-black text-black mb-6 leading-tight" style="font-size: clamp(2.2rem, 5.5vw, 4rem);">Devis
          gratuit sous 48h —<br><span class="text-[#E88200]">sans engagement</span></h1>
        <p class="text-lg text-gray-600 max-w-2xl leading-relaxed mb-10">Décrivez votre projet en quelques lignes. Je
          vous réponds sous 24h avec un devis clair, détaillé et gratuit. Disponible partout au Bénin en remote.</p>
        <div class="flex flex-wrap gap-3"><span
            class="inline-flex items-center gap-2 text-sm text-gray-600 border border-gray-300 px-4 py-2 rounded-full bg-gray-100"><span
              class="w-1.5 h-1.5 rounded-full flex-shrink-0" style="background-color: rgb(0, 102, 255);"></span>Réponse
            sous 24h</span><span
            class="inline-flex items-center gap-2 text-sm text-gray-600 border border-gray-300 px-4 py-2 rounded-full bg-white/[0.04]"><span
              class="w-1.5 h-1.5 rounded-full flex-shrink-0" style="background-color: rgb(5, 150, 105);"></span>Devis
            100% gratuit</span><span
            class="inline-flex items-center gap-2 text-sm text-gray-600 border border-gray-300 px-4 py-2 rounded-full bg-white/[0.04]"><span
              class="w-1.5 h-1.5 rounded-full flex-shrink-0" style="background-color: rgb(124, 58, 237);"></span>Sans
            engagement</span><span
            class="inline-flex items-center gap-2 text-sm text-gray-600 border border-gray-300 px-4 py-2 rounded-full bg-white/[0.04]"><span
              class="w-1.5 h-1.5 rounded-full flex-shrink-0" style="background-color: rgb(217, 119, 6);"></span>Remote
            Bénin</span></div>
      </div>
    </section>
    <UContainer>

      <section class="py-16">
        <div class="container mx-auto px-4">
          <div class="max-w-5xl mx-auto">
            <div class="grid md:grid-cols-2 gap-12">
              <div class="fade-in delay-200">
                <UCard class="h-full">
                  <template #header>
                    <div class="flex items-center gap-2 mb-2">
                      <UIcon name="i-heroicons-information-circle" class="text-2xl text-primary-500" />
                      <h2 class="text-2xl font-bold">
                        Informations de contact
                      </h2>
                    </div>
                  </template>

                  <div class="space-y-6 py-4">
                    <div
                      class="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <UAvatar icon="i-heroicons-envelope" color="primary" variant="solid" size="lg" class="mr-4" />
                      <div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">
                          Email
                        </div>
                        <NuxtLink to="mailto:michoaganchiracdona@gmail.com"
                          class="text-gray-800 text-xs dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 font-medium">
                          michoaganchiracdona@gmail.com
                        </NuxtLink>
                      </div>
                    </div>

                    <div
                      class="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <UAvatar icon="i-heroicons-phone" color="primary" variant="solid" size="lg" class="mr-4" />
                      <div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">
                          Téléphone
                        </div>
                        <NuxtLink to="tel:+2290153947916"
                          class="text-gray-800 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 font-medium">
                          +229 (015) 3947916
                        </NuxtLink>
                        <NuxtLink to="tel:+2290161299161"
                          class="text-gray-800 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 font-medium">
                          +229 (016) 1299161
                        </NuxtLink>
                      </div>
                    </div>

                    <div
                      class="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <UAvatar icon="i-heroicons-map-pin" color="primary" variant="solid" size="lg" class="mr-4" />
                      <div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">
                          Localisation
                        </div>
                        <span class="text-gray-800 dark:text-gray-200 font-medium">
                          Cotonou-littoral, Bénin
                        </span>
                      </div>
                    </div>
                  </div>

                  <template #footer>
                    <div>
                      <h3 class="text-lg font-semibold mb-4">
                        Retrouvez-moi sur les réseaux
                      </h3>
                      <div class="flex space-x-3">
                        <UTooltip text="Twitter">
                          <UButton color="primary" variant="ghost" to="https://x.com/chinoisnois" target="_blank"
                            class="hover:scale-110 transition-transform" />
                          <img src="public/assets/x.png" alt="Logo X de Twitter" class="h-4 mt-2 w-5" />
                        </UTooltip>
                        <UTooltip text="GitHub">
                          <UButton color="black" variant="ghost" icon="i-simple-icons-github"
                            to="https://github.com/chiracmichoagan" target="_blank"
                            class="hover:scale-110 transition-transform" />
                        </UTooltip>
                        <UTooltip text="LinkedIn">
                          <UButton color="blue" variant="ghost" icon="i-simple-icons-linkedin"
                            to="https://linkedin.com/in/chiracmichoagan" target="_blank"
                            class="hover:scale-110 transition-transform" />
                        </UTooltip>

                        <UTooltip text="Instagram">
                          <UButton color="red" variant="ghost" icon="i-simple-icons-instagram"
                            to="https://instagram.com/chiracdonamichoagan" target="_blank"
                            class="hover:scale-110 transition-transform" />
                        </UTooltip>
                        <UTooltip text="facebook">
                          <UButton color="blue" variant="ghost" icon="i-simple-icons-facebook"
                            to="https://facebook.com/chiracdonamichoagan" target="_blank"
                            class="hover:scale-110 transition-transform" />
                        </UTooltip>
                        <UTooltip text="TikTok">
                          <UButton color="black" variant="ghost" icon="i-simple-icons-tiktok"
                            to="https://tiktok.com/@chiracdonamichoagan" target="_blank"
                            class="hover:scale-110 transition-transform" />
                        </UTooltip>
                      </div>
                    </div>
                  </template>
                </UCard>
              </div>

              <div class="fade-in delay-300">
                <UCard>
                  <template #header>
                    <div class="flex items-center gap-2 mb-2">
                      <UIcon name="i-heroicons-chat-bubble-left-right" class="text-2xl text-primary-500" />
                      <h2 class="text-2xl font-bold">Envoyez-moi un message</h2>
                    </div>
                  </template>

                  <form @submit.prevent="submitForm" class="space-y-4">
                    <UFormGroup label="Nom" name="name" required>
                      <UInput v-model="form.name" placeholder="Votre nom" icon="i-heroicons-user"
                        :ui="{ icon: { trailing: { pointer: '' } } }" />
                    </UFormGroup>

                    <UFormGroup label="Email" name="email" required>
                      <UInput v-model="form.email" placeholder="Votre email" type="email" icon="i-heroicons-envelope"
                        :ui="{ icon: { trailing: { pointer: '' } } }" />
                    </UFormGroup>

                    <UFormGroup label="Sujet" name="subject" required>
                      <UInput v-model="form.subject" placeholder="Sujet de votre message"
                        icon="i-heroicons-chat-bubble-bottom-center-text"
                        :ui="{ icon: { trailing: { pointer: '' } } }" />
                    </UFormGroup>

                    <UFormGroup label="Message" name="message" required>
                      <UTextarea v-model="form.message" placeholder="Détaillez votre demande ici..." rows="5" />
                    </UFormGroup>

                    <div class="flex justify-end">
                      <UButton type="submit" color="primary" :loading="loading" :disabled="loading" size="lg"
                        icon="i-heroicons-paper-airplane" class="w-full md:w-auto">
                        Envoyer le message
                      </UButton>
                    </div>
                  </form>

                  <UAlert v-if="formStatus.show" :type="formStatus.type" :title="formStatus.title"
                    :description="formStatus.message" class="mt-4" icon="i-heroicons-check-circle" />
                </UCard>
              </div>
            </div>
          </div>
        </div>
      </section>

    </UContainer>
    <section class="py-20 bg-[#F9F9F9]">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid sm:grid-cols-3 gap-5">
          <div class="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5"
              style="background-color: rgba(0, 102, 255, 0.07);">⚡</div>
            <h3 class="font-bold text-[#0A0A0A] mb-2 text-base">Réponse sous 24h</h3>
            <p class="text-[#6B6B6B] text-sm leading-relaxed">Je m'engage à vous répondre dans la journée, même le
              week-end.
            </p>
          </div>
          <div class="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5"
              style="background-color: rgba(5, 150, 105, 0.07);">📄</div>
            <h3 class="font-bold text-[#0A0A0A] mb-2 text-base">Devis gratuit</h3>
            <p class="text-[#6B6B6B] text-sm leading-relaxed">Aucun frais pour le devis. Vous recevez une estimation
              détaillée et personnalisée.</p>
          </div>
          <div class="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5"
              style="background-color: rgba(124, 58, 237, 0.07);">🤝</div>
            <h3 class="font-bold text-[#0A0A0A] mb-2 text-base">Sans engagement</h3>
            <p class="text-[#6B6B6B] text-sm leading-relaxed">Vous êtes libre d'accepter ou non. Pas de pression, pas
              de
              relance abusive.</p>
          </div>
        </div>
        <div class="mt-10 bg-white border border-gray-100 rounded-2xl px-8 py-6 shadow-sm text-center">
          <p class="text-sm text-[#6B6B6B]">Vous pouvez aussi m'écrire directement à <a
              href="mailto:michoaganchiracdona@gmail.com"
              class="text-[#0066FF] font-semibold hover:underline">michoaganchiracdona@gmail.com</a> ou consulter <a
              class="text-[#0066FF] font-medium hover:underline" href="/servicesdeveloppementweb">mes services</a> et <a
              class="text-[#0066FF] font-medium hover:underline" href="/tarifs">mes tarifs indicatifs</a>.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const loading = ref(false);
const formStatus = ref({
  show: false,
  type: "success",
  title: "",
  message: "",
});

const submitForm = async () => {
  loading.value = true;

  // Validation du formulaire
  if (
    !form.value.name ||
    !form.value.email ||
    !form.value.subject ||
    !form.value.message
  ) {
    formStatus.value = {
      show: true,
      type: "danger",
      title: "Erreur",
      message: "Veuillez remplir tous les champs du formulaire.",
    };
    loading.value = false;
    return;
  }

  // Envoi du formulaire
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Affichage du message de succès
  formStatus.value = {
    show: true,
    type: "success",
    title: "Message envoyé !",
    message:
      "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
  };

  // Réinitialisation du formulaire
  form.value = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  loading.value = false;

  // Masquer l'alerte après 5 secondes
  setTimeout(() => {
    formStatus.value.show = false;
  }, 5000);
};

// Animation  au chargement du composant
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
