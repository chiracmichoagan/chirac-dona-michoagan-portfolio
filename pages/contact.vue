<template>
  <div>
    <UContainer>
      <section class="py-20 bg-gray-50 dark:bg-gray-900 rounded-xl mb-8">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto text-center">
            <p
              class="text-xl text-gray-600 dark:text-gray-400 mb-8 fade-in delay-100"
            >
              Vous avez un projet en tête ou souhaitez discuter d'une
              opportunité ? N'hésitez pas à me contacter !
            </p>
          </div>
        </div>
      </section>

      <section class="py-16">
        <div class="container mx-auto px-4">
          <div class="max-w-5xl mx-auto">
            <div class="grid md:grid-cols-2 gap-12">
              <div class="fade-in delay-200">
                <UCard class="h-full">
                  <template #header>
                    <div class="flex items-center gap-2 mb-2">
                      <UIcon
                        name="i-heroicons-information-circle"
                        class="text-2xl text-primary-500"
                      />
                      <h2 class="text-2xl font-bold">
                        Informations de contact
                      </h2>
                    </div>
                  </template>

                  <div class="space-y-6 py-4">
                    <div
                      class="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <UAvatar
                        icon="i-heroicons-envelope"
                        color="primary"
                        variant="solid"
                        size="lg"
                        class="mr-4"
                      />
                      <div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">
                          Email
                        </div>
                        <a
                          href="mailto:michoaganchiracdona@gmail.com"
                          class="text-gray-800 text-xs dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 font-medium"
                        >
                          michoaganchiracdona@gmail.com
                        </a>
                      </div>
                    </div>

                    <div
                      class="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <UAvatar
                        icon="i-heroicons-phone"
                        color="primary"
                        variant="solid"
                        size="lg"
                        class="mr-4"
                      />
                      <div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">
                          Téléphone
                        </div>
                        <a
                          href="tel:+1234567890"
                          class="text-gray-800 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 font-medium"
                        >
                          +229 (015) 3947916 ou +229 (016) 1299161
                        </a>
                      </div>
                    </div>

                    <div
                      class="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <UAvatar
                        icon="i-heroicons-map-pin"
                        color="primary"
                        variant="solid"
                        size="lg"
                        class="mr-4"
                      />
                      <div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">
                          Localisation
                        </div>
                        <span
                          class="text-gray-800 dark:text-gray-200 font-medium"
                        >
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
                          <UButton
                            color="primary"
                            variant="ghost"
                            to="https://x.com/chinoisnois"
                            target="_blank"
                            class="hover:scale-110 transition-transform"
                          />
                          <img
                            src="public/assets/x.png"
                            alt="Logo X de Twitter"
                            class="h-4 mt-2 w-5"
                          />
                        </UTooltip>
                        <UTooltip text="GitHub">
                          <UButton
                            color="black"
                            variant="ghost"
                            icon="i-simple-icons-github"
                            to="https://github.com/chiracmichoagan"
                            target="_blank"
                            class="hover:scale-110 transition-transform"
                          />
                        </UTooltip>
                        <UTooltip text="LinkedIn">
                          <UButton
                            color="blue"
                            variant="ghost"
                            icon="i-simple-icons-linkedin"
                            to="https://linkedin.com/in/chiracmichoagan"
                            target="_blank"
                            class="hover:scale-110 transition-transform"
                          />
                        </UTooltip>

                        <UTooltip text="Instagram">
                          <UButton
                            color="red"
                            variant="ghost"
                            icon="i-simple-icons-instagram"
                            to="https://instagram.com/yourusername"
                            target="_blank"
                            class="hover:scale-110 transition-transform"
                          />
                        </UTooltip>
                        <UTooltip text="facebook">
                          <UButton
                            color="blue"
                            variant="ghost"
                            icon="i-simple-icons-facebook"
                            to="https://instagram.com/yourusername"
                            target="_blank"
                            class="hover:scale-110 transition-transform"
                          />
                        </UTooltip>
                        <UTooltip text="TikTok">
                          <UButton
                            color="black"
                            variant="ghost"
                            icon="i-simple-icons-tiktok"
                            to="https://instagram.com/yourusername"
                            target="_blank"
                            class="hover:scale-110 transition-transform"
                          />
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
                      <UIcon
                        name="i-heroicons-chat-bubble-left-right"
                        class="text-2xl text-primary-500"
                      />
                      <h2 class="text-2xl font-bold">Envoyez-moi un message</h2>
                    </div>
                  </template>

                  <form @submit.prevent="submitForm" class="space-y-4">
                    <UFormGroup label="Nom" name="name" required>
                      <UInput
                        v-model="form.name"
                        placeholder="Votre nom"
                        icon="i-heroicons-user"
                        :ui="{ icon: { trailing: { pointer: '' } } }"
                      />
                    </UFormGroup>

                    <UFormGroup label="Email" name="email" required>
                      <UInput
                        v-model="form.email"
                        placeholder="Votre email"
                        type="email"
                        icon="i-heroicons-envelope"
                        :ui="{ icon: { trailing: { pointer: '' } } }"
                      />
                    </UFormGroup>

                    <UFormGroup label="Sujet" name="subject" required>
                      <UInput
                        v-model="form.subject"
                        placeholder="Sujet de votre message"
                        icon="i-heroicons-chat-bubble-bottom-center-text"
                        :ui="{ icon: { trailing: { pointer: '' } } }"
                      />
                    </UFormGroup>

                    <UFormGroup label="Message" name="message" required>
                      <UTextarea
                        v-model="form.message"
                        placeholder="Détaillez votre demande ici..."
                        rows="5"
                      />
                    </UFormGroup>

                    <div class="flex justify-end">
                      <UButton
                        type="submit"
                        color="primary"
                        :loading="loading"
                        :disabled="loading"
                        size="lg"
                        icon="i-heroicons-paper-airplane"
                        class="w-full md:w-auto"
                      >
                        Envoyer le message
                      </UButton>
                    </div>
                  </form>

                  <UAlert
                    v-if="formStatus.show"
                    :type="formStatus.type"
                    :title="formStatus.title"
                    :description="formStatus.message"
                    class="mt-4"
                    icon="i-heroicons-check-circle"
                  />
                </UCard>
              </div>
            </div>
          </div>
        </div>
      </section>
    </UContainer>
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
