<template>
  <div class="chat-bot-container">
    <!-- Bouton du chatbot -->
    <button
      @click="toggleChat"
      class="chat-bot-button fixed bottom-6 right-6 bg-primary-500 hover:bg-primary-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all z-40"
      :class="{ 'rotate-45': isChatOpen }"
    >
      <UIcon
        :name="
          isChatOpen
            ? 'i-heroicons-x-mark'
            : 'i-heroicons-chat-bubble-left-right'
        "
        class="text-2xl"
      />
    </button>

    <!-- Fenêtre de chat -->
    <div
      v-show="isChatOpen"
      class="chat-window fixed bottom-24 right-6 w-80 md:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-40 overflow-hidden transition-all duration-300 ease-in-out"
      :class="{
        'translate-y-0 opacity-100': isChatOpen,
        'translate-y-10 opacity-0': !isChatOpen,
      }"
    >
      <!-- En-tête du chat -->
      <div
        class="chat-header bg-primary-500 text-white p-4 flex justify-between items-center"
      >
        <div class="flex items-center">
          <div
            class="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3"
          >
            <span class="text-primary-500 font-bold">T</span>
          </div>
          <h3 class="font-semibold">Assistant Dona</h3>
        </div>
        <div class="flex space-x-2">
          <button
            @click="clearChat"
            class="hover:text-gray-200 transition-colors"
          >
            <UIcon name="i-heroicons-trash" class="text-lg" />
          </button>
        </div>
      </div>

      <!-- Corps du chat -->
      <!-- Corps du chat -->
      <div
        class="chat-body bg-gray-50 dark:bg-gray-900 h-80 overflow-y-auto p-4"
        ref="chatBody"
      >
        <div
          v-for="(message, index) in messages"
          :key="index"
          class="mb-4 flex"
          :class="message.isBot ? 'justify-start' : 'justify-end'"
        >
          <div
            :class="[
              'max-w-[75%] rounded-lg p-3 break-words',
              message.isBot
                ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                : 'bg-primary-500 text-white',
            ]"
          >
            {{ message.text }}
          </div>
        </div>
        <div
          v-if="isTyping"
          class="typing-indicator bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 max-w-[100px] rounded-lg p-3 mr-auto"
        >
          <span class="dots">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </span>
        </div>
      </div>

      <!-- Pied du chat -->
      <div
        class="chat-footer p-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
      >
        <div class="flex items-center">
          <input
            v-model="userInput"
            @keyup.enter="sendMessage"
            type="text"
            placeholder="Posez-moi une question..."
            class="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
          />
          <button
            @click="sendMessage"
            class="bg-primary-500 hover:bg-primary-600 text-white p-2 rounded-r-lg transition-colors"
          >
            <UIcon name="i-heroicons-paper-airplane" class="text-lg" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from "vue";

const isChatOpen = ref(false);
const userInput = ref("");
const messages = ref([]);
const isTyping = ref(false);
const chatBody = ref(null);

// Messages de bienvenue et réponses prédéfinies
const welcomeMessage =
  "Bonjour ! Je suis l'assistant virtuel de Dona. Comment puis-je vous aider aujourd'hui ?";
const responses = {
  bonjour: "Bonjour ! Comment puis-je vous aider ?",
  salut: "Salut ! Comment puis-je vous aider ?",
  projet:
    "Dona a travaillé sur plusieurs projets passionnants. Vous pouvez les consulter dans la section Projets du portfolio.",
  contact:
    "Vous pouvez contacter Dona via le formulaire de contact ou directement par email à contact@txrportfolio.com",
  compétences:
    "Dona est spécialisé en développement web full stack, avec une expertise en JavaScript, Vue.js, Node.js et bien d'autres technologies.",
  expérience:
    "Dona a plusieurs années d'expérience en développement web. Consultez la section À propos pour en savoir plus sur son parcours.",
  cv: "Vous pouvez télécharger le CV de Dona depuis la section À propos.",
  disponibilité:
    "Dona est actuellement disponible pour de nouveaux projets. N'hésitez pas à le contacter pour discuter de vos besoins.",
  merci: "Je vous en prie ! N'hésitez pas si vous avez d'autres questions.",
  "au revoir":
    "Au revoir ! N'hésitez pas à revenir si vous avez d'autres questions.",
};

// Fonction pour basculer l'affichage du chat
const toggleChat = () => {
  isChatOpen.value = !isChatOpen.value;

  // Si on ouvre le chat et qu'il n'y a pas encore de messages, afficher le message de bienvenue
  if (isChatOpen.value && messages.value.length === 0) {
    setTimeout(() => {
      isTyping.value = true;
      setTimeout(() => {
        isTyping.value = false;
        messages.value.push({ text: welcomeMessage, isBot: true });
      }, 1500);
    }, 500);
  }
};

// Fonction pour envoyer un message
const sendMessage = async () => {
  if (!userInput.value.trim()) return;

  // Ajouter le message de l'utilisateur
  const userMessage = userInput.value.trim();
  messages.value.push({ text: userMessage, isBot: false });
  userInput.value = "";

  // Simuler la réponse du bot
  await nextTick();
  scrollToBottom();

  // Afficher l'indicateur de frappe
  isTyping.value = true;

  setTimeout(() => {
    isTyping.value = false;

    // Trouver une réponse appropriée
    let botResponse =
      "Je ne suis pas sûr de comprendre. Pouvez-vous reformuler ou poser une question sur les projets, compétences ou comment contacter Dona ?";

    // Vérifier si le message contient des mots-clés
    for (const [keyword, response] of Object.entries(responses)) {
      if (userMessage.toLowerCase().includes(keyword)) {
        botResponse = response;
        break;
      }
    }

    messages.value.push({ text: botResponse, isBot: true });
    scrollToBottom();
  }, 1500);
};

// Fonction pour effacer l'historique du chat
const clearChat = () => {
  messages.value = [];
  // Réafficher le message de bienvenue
  setTimeout(() => {
    isTyping.value = true;
    setTimeout(() => {
      isTyping.value = false;
      messages.value.push({ text: welcomeMessage, isBot: true });
    }, 1000);
  }, 300);
};

// Fonction pour faire défiler jusqu'au dernier message
const scrollToBottom = () => {
  if (chatBody.value) {
    chatBody.value.scrollTop = chatBody.value.scrollHeight;
  }
};

// Observer les changements dans les messages pour faire défiler automatiquement
watch(messages, () => {
  nextTick(() => {
    scrollToBottom();
  });
});
</script>

<style scoped>
.typing-indicator .dots {
  display: flex;
  align-items: center;
}

.typing-indicator .dot {
  width: 6px;
  height: 6px;
  margin: 0 2px;
  background-color: currentColor;
  border-radius: 50%;
  opacity: 0.6;
  animation: typing 1.4s infinite both;
}

.typing-indicator .dot:nth-child(2) {
  animation-delay: 0.2s;
}

.typing-indicator .dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes typing {
  0%,
  60%,
  100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-4px);
  }
}
</style>
