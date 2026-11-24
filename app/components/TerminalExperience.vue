<template>
  <div
    :class="[
      'terminal-container p-4 rounded-lg font-mono',
      hackerMode ? 'bg-black text-green-500' : 'bg-gray-900 text-green-400',
    ]"
  >
    <div class="terminal-header flex justify-between mb-2">
      <div class="flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div class="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div class="text-xs">
        {{ hackerMode ? "hacker@secure-shell" : "terminal@txr-portfolio" }}
        <span v-if="hackerMode" class="blink ml-1">_</span>
      </div>
    </div>
    <div
      class="terminal-output h-64 overflow-y-auto mb-2 p-2"
      ref="outputContainer"
      :class="{ 'glitch-text': hackerMode }"
    >
      <div v-for="(line, index) in outputLines" :key="index" class="mb-1">
        <div v-if="line.type === 'command'" class="flex">
          <span
            :class="hackerMode ? 'text-red-500' : 'text-blue-400'"
            class="mr-2"
          >
            {{ hackerMode ? "root@system:~#" : "guest@portfolio:~$" }}
          </span>
          <span :class="{ 'matrix-text': hackerMode && line.isMatrix }">{{
            line.content
          }}</span>
        </div>
        <div v-else class="pl-4" v-html="line.content"></div>
      </div>
      <div v-if="hackerMode && matrixEffect" class="matrix-rain"></div>
    </div>
    <div class="terminal-input flex">
      <span :class="hackerMode ? 'text-red-500' : 'text-blue-400'" class="mr-2">
        {{ hackerMode ? "root@system:~#" : "guest@portfolio:~$" }}
      </span>
      <input
        v-model="currentCommand"
        @keyup.enter="executeCommand"
        class="bg-transparent focus:outline-none flex-grow"
        type="text"
        :class="{ 'text-green-500': hackerMode }"
        :placeholder="
          hackerMode
            ? 'Accès restreint. Entrez vos commandes...'
            : 'Tapez \'help\' pour voir les commandes disponibles'
        "
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch } from "vue";
// commande actuelle
const currentCommand = ref("");
// commandes de lignes
const outputLines = ref([
  {
    type: "response",
    content: "Bienvenue dans le terminal interactif de mon portfolio!",
  },
  {
    type: "response",
    content:
      'Tapez <span class="text-yellow-400">help</span> pour voir les commandes disponibles.',
  },
]);
// sortie de commande
const outputContainer = ref(null);
// mode hacker
const hackerMode = ref(false);
// effet matrix
const matrixEffect = ref(false);

// différentes commandes (mode hacker et non hacker)
const commands = {
  help: () => {
    if (hackerMode.value) {
      return `
        <span class="text-red-400">Commandes système:</span>
        <br>- <span class="text-green-500">scan</span>: Scanner le réseau
        <br>- <span class="text-green-500">decrypt</span>: Décrypter des données
        <br>- <span class="text-green-500">exploit</span>: Lancer une exploitation
        <br>- <span class="text-green-500">matrix</span>: Activer l'effet Matrix
        <br>- <span class="text-green-500">normal</span>: Désactiver le mode hacker
        <br>- <span class="text-green-500">clear</span>: Effacer le terminal
      `;
    }
    return `
      <span class="text-yellow-400">Commandes disponibles:</span>
      <br>- <span class="text-green-400">about</span>: À propos de moi
      <br>- <span class="text-green-400">skills</span>: Mes compétences
      <br>- <span class="text-green-400">projects</span>: Mes projets
      <br>- <span class="text-green-400">contact</span>: Mes informations de contact
      <br>- <span class="text-green-400">hacker</span>: Activer le mode hacker
      <br>- <span class="text-green-400">clear</span>: Effacer le terminal
    `;
  },
  // A propos de moi
  about: () => {
    if (hackerMode.value) {
      return `
        <span class="text-red-400">INFORMATIONS CONFIDENTIELLES:</span>
        <br>Identité: <span class="text-green-500">Développeur Web & Cybersécurité</span>
        <br>Spécialisation: <span class="text-green-500">Sécurité des applications web, Pentest</span>
        <br>Objectif: <span class="text-green-500">Exploiter les vulnérabilités pour mieux les comprendre</span>
      `;
    }
    return `
      <span class="text-yellow-400">À propos de moi:</span>
      <br>Développeur web passionné avec près d'un an d'expérience.
      <br>Spécialisé en développement backend avec Node.js et SpringBoot.
      <br>Intéressé par la cybersécurité et l'apprentissage continu de technologies innovantes.
    `;
  },
  // Compétences
  skills: () => {
    if (hackerMode.value) {
      return `
        <span class="text-red-400">COMPÉTENCES TECHNIQUES:</span>
        <br>- <span class="text-green-500">Pentest Web</span>: Exploitation XSS, SQLi, CSRF
        <br>- <span class="text-green-500">Reverse Engineering</span>: Analyse de code malveillant
        <br>- <span class="text-green-500">Cryptographie</span>: Chiffrement/Déchiffrement
        <br>- <span class="text-green-500">Réseau</span>: Analyse de paquets, Man-in-the-middle
        <br>- <span class="text-green-500">Social Engineering</span>: Techniques d'ingénierie sociale
      `;
    }
    return `
      <span class="text-yellow-400">Mes compétences:</span>
      <br>- HTML/CSS: 90%
      <br>- JavaScript: 85%
      <br>- React: 88%
      <br>- Node.js: 88%
      <br>- Vue.js: 75%
      <br>- Nuxt.js: 45%
      <br>- SpringBoot: 45%
      <br>- Git: 25%
      <br>- GitHub: 60%
      <br>- Hacking: 35%
      <br>- Angular: 40%
    `;
  },
  // Projets
  projects: () => {
    if (hackerMode.value) {
      return `
        <span class="text-red-400">PROJETS CONFIDENTIELS:</span>
        <br>- <span class="text-green-500">SecureAuth</span>: Système d'authentification à deux facteurs
        <br>- <span class="text-green-500">VulnScanner</span>: Scanner de vulnérabilités pour applications web
        <br>- <span class="text-green-500">CryptoMessenger</span>: Application de messagerie chiffrée de bout en bout
      `;
    }
    return `
      <span class="text-yellow-400">Mes projets:</span>
      <br>- <span class="text-green-400">Asclépios App</span>: Application de gestion de dossier médical
      <br>- <span class="text-green-400">Catarina</span>: Projet de gestion de fiches pour centre d'appels
      <br>- <span class="text-green-400">Moufid AI Chat</span>: Application de discussion en temps réel avec un chatbot intégré avec l'API de Gemini
      <br>- <span class="text-green-400">Anime Quiz</span>: Application de discussion en temps réel avec un chatbot intégré avec l'API de Gemini
       `;
  },
  // Contact
  contact: () => {
    if (hackerMode.value) {
      return `
        <span class="text-red-400">CANAUX SÉCURISÉS:</span>
        <br>- Signal: <span class="text-green-500">+encrypted</span>
        <br>- ProtonMail: <span class="text-green-500">secure@protonmail.com</span>
        <br>- GitHub: <span class="text-green-500">github.com/moufidagbannonde</span> (GPG: 0xF1D2E3A4B5C6)
      `;
    }
    return `
      <span class="text-yellow-400">Contact:</span>
      <br>- Email: moufidteixeira@gmail.com
      <br>- Téléphone: +229 (019) 558-8789
      <br>- Localisation: Praia, Cabo Verde
      <br>- GitHub: github.com/moufidagbannonde
      <br>- LinkedIn: linkedin.com/in/moufidagbannonde
      <br>- Twitter: x.com/@teixeira00125
    `;
  },
  // effacer le contenu du terminal
  clear: () => {
    outputLines.value = [];
    return "";
  },

  // mode hacker
  hacker: () => {
    hackerMode.value = true;
    return `
      <span class="text-red-400">MODE HACKER ACTIVÉ</span>
      <br>Accès au système sécurisé accordé.
      <br>Tapez <span class="text-green-500">help</span> pour voir les commandes disponibles.
    `;
  },
  // mode normal
  normal: () => {
    if (hackerMode.value) {
      hackerMode.value = false;
      matrixEffect.value = false;
      return `Mode normal restauré.`;
    }
    return `Vous êtes déjà en mode normal.`;
  },
  // simulation d'un scannage du réseau (données factices, pas en temps réel)
  scan: () => {
    if (!hackerMode.value)
      return `Commande disponible uniquement en mode hacker.`;
    return simulateHackerCommand("Scan du réseau en cours...", [
      "Découverte des hôtes: 192.168.1.1/24",
      "Ports ouverts: 22 (SSH), 80 (HTTP), 443 (HTTPS)",
      "Services détectés: Apache 2.4.41, OpenSSH 8.2",
      "Scan terminé. Aucune vulnérabilité critique détectée.",
    ]);
  },
  // simulation de décryptage d'algorithme
  decrypt: () => {
    if (!hackerMode.value)
      return `Commande disponible uniquement en mode hacker.`;

    return simulateHackerCommand("Décryptage en cours...", [
      "Analyse de l'algorithme: AES-256",
      "Génération des clés candidates...",
      "Test des clés: 1/1000... 50/1000... 999/1000...",
      "Décryptage réussi! Données accessibles.",
    ]);
  },
  // simulation d'exploitation
  exploit: () => {
    if (!hackerMode.value)
      return `Commande disponible uniquement en mode hacker.`;

    return simulateHackerCommand("Exploitation en cours...", [
      "Recherche de vulnérabilités...",
      "CVE-2023-XXXX détecté",
      "Préparation du payload...",
      "Exécution de l'exploit...",
      "Accès obtenu! Shell distant disponible.",
    ]);
  },
  // effet matrix
  matrix: () => {
    if (!hackerMode.value)
      return `Commande disponible uniquement en mode hacker.`;

    matrixEffect.value = !matrixEffect.value;
    return matrixEffect.value
      ? `<span class="text-green-500">Effet Matrix activé. Bienvenue dans la Matrice.</span>`
      : `Effet Matrix désactivé.`;
  },
};

// simulation de commande avec affichage lent des différents messages
function simulateHackerCommand(initialMessage, steps) {
  // délai de traitement
  setTimeout(() => {
    let delay = 500;
    steps.forEach((step, index) => {
      setTimeout(() => {
        outputLines.value.push({
          type: "response",
          content: `<span class="text-green-500">[${index + 1}/${
            steps.length
          }]</span> ${step}`,
        });

        //  défiler vers le bas
        if (outputContainer.value) {
          outputContainer.value.scrollTop = outputContainer.value.scrollHeight;
        }
      }, delay);
      delay += 800;
    });
  }, 300);

  return initialMessage;
}

// exécuter la commande
const executeCommand = () => {
  if (!currentCommand.value.trim()) return;

  // ajout de la commande à l'historique
  outputLines.value.push({
    type: "command",
    content: currentCommand.value,
    isMatrix: hackerMode.value && matrixEffect.value,
  });

  // traitement de la commande
  const args = currentCommand.value.trim().split(" ");
  const cmd = args[0].toLowerCase();
  // vérification de l'entrée de l'utilisateur pour correspondre aux commandes pré-définies
  if (commands[cmd]) {
    const response = commands[cmd](args.slice(1));
    if (response) {
      outputLines.value.push({ type: "response", content: response });
    }
  } else {
    outputLines.value.push({
      type: "response",
      content: hackerMode.value
        ? `<span class="text-red-500">Erreur:</span> Commande '${cmd}' non reconnue. Accès refusé.`
        : `Commande non reconnue: ${cmd}. Tapez <span class="text-yellow-400">help</span> pour voir les commandes disponibles.`,
    });
  }

  // réinitialisation de la commande
  currentCommand.value = "";

  //  défiler vers le bas
  nextTick(() => {
    if (outputContainer.value) {
      outputContainer.value.scrollTop = outputContainer.value.scrollHeight;
    }
  });
};

// surveille l'activation de l'effet Matrix
watch(matrixEffect, (newValue) => {
  if (newValue && process.client) {
    nextTick(() => {
      createMatrixEffect();
    });
  }
});

// création de l'effet matrix
function createMatrixEffect() {
  if (!process.client || !matrixEffect.value) return;

  const canvas = document.createElement("canvas");
  const container = outputContainer.value;
  if (!container) return;

  // Nettoyer les anciens effets Matrix
  const oldCanvas = container.querySelector("canvas");
  if (oldCanvas) {
    container.removeChild(oldCanvas);
  }

  canvas.width = container.offsetWidth;
  canvas.height = container.offsetHeight;
  canvas.style.position = "absolute";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "10";
  container.style.position = "relative";
  container.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  const characters =
    "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789";
  const columns = Math.floor(canvas.width / 20);
  const drops = [];

  for (let i = 0; i < columns; i++) {
    drops[i] = 1;
  }

  // faire un dessin avec des caractères prédéfinis pour un effet matrix
  function draw() {
    if (!matrixEffect.value) {
      if (container.contains(canvas)) {
        container.removeChild(canvas);
      }
      return;
    }

    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0";
    ctx.font = "15px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      ctx.fillText(text, i * 20, drops[i] * 20);

      if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
    // animer le dessin
    requestAnimationFrame(draw);
  }

  draw();
}

onMounted(() => {
  // focus sur l'input au chargement du composant
  if (process.client) {
    nextTick(() => {
      const input = document.querySelector(".terminal-input input");
      if (input) {
        input.focus();
      }
    });
  }
});
</script>

<style scoped>
.terminal-container {
  font-family: "Fira Code", "Courier New", monospace;
}

.blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.glitch-text {
  position: relative;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch-text::before {
  left: 2px;
  text-shadow: -1px 0 red;
  animation: glitch-anim-1 2s infinite linear alternate-reverse;
}

.glitch-text::after {
  left: -2px;
  text-shadow: 1px 0 blue;
  animation: glitch-anim-2 3s infinite linear alternate-reverse;
}

@keyframes glitch-anim-1 {
  0% {
    clip-path: inset(20% 0 80% 0);
  }
  20% {
    clip-path: inset(60% 0 40% 0);
  }
  40% {
    clip-path: inset(40% 0 60% 0);
  }
  60% {
    clip-path: inset(80% 0 20% 0);
  }
  80% {
    clip-path: inset(10% 0 90% 0);
  }
  100% {
    clip-path: inset(30% 0 70% 0);
  }
}

@keyframes glitch-anim-2 {
  0% {
    clip-path: inset(10% 0 90% 0);
  }
  20% {
    clip-path: inset(30% 0 70% 0);
  }
  40% {
    clip-path: inset(50% 0 50% 0);
  }
  60% {
    clip-path: inset(70% 0 30% 0);
  }
  80% {
    clip-path: inset(90% 0 10% 0);
  }
  100% {
    clip-path: inset(0% 0 100% 0);
  }
}

.matrix-text {
  color: #0f0;
  text-shadow: 0 0 5px #0f0;
}
</style>
