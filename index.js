const mainContent = document.querySelector("main");
const voicesSelection = document.getElementById("voices");
const textArea = document.getElementById("text");
const readTextButton = document.getElementById("read");
const toggleTextBoxButton = document.getElementById("toggle");
const closeTextBoxButton = document.getElementById("close");

const data = [
  {
    image: "drink",
    text: "I'm Thirsty",
  },
  {
    image: "food",
    text: "I'm Hungry",
  },
  {
    image: "tired",
    text: "I'm Tired",
  },
  {
    image: "hurt",
    text: "I'm Hurt",
  },
  {
    image: "happy",
    text: "I'm Happy",
  },
  {
    image: "angry",
    text: "I'm Angry",
  },
  {
    image: "sad",
    text: "I'm Sad",
  },
  {
    image: "scared",
    text: "I'm Scared",
  },
  {
    image: "outside",
    text: "I Want To Go Outside",
  },
  {
    image: "home",
    text: "I Want To Go Home but its raining outside",
  },
  {
    image: "school",
    text: "I Want To Go To college but its too late and my college is so far",
  },
  {
    image: "grandma",
    text: "I Want To Go To Grandmas",
  },
];

function createContentBox(item) {
  const contentBox = document.createElement("div");
  const { image, text } = item;
  contentBox.classList.add("box");
  contentBox.innerHTML = `
    <img src='https://github.com/bradtraversy/vanillawebprojects/blob/master/speech-text-reader/img/${image}.jpg?raw=true' alt="${text}"/>
    <p class="info">${text}</p>
    `;
  contentBox.addEventListener("click", () => handleSpeechSynthesis(text, contentBox));
  mainContent.appendChild(contentBox);
}

data.forEach(createContentBox);

let availableVoices = [];

function retrieveAvailableVoices() {
  availableVoices = speechSynthesis.getVoices();
  availableVoices.forEach((voice) => {
    const voiceOption = document.createElement("option");
    voiceOption.value = voice.name;
    voiceOption.innerText = `${voice.name} ${voice.lang}`;
    voicesSelection.appendChild(voiceOption);
  });
}

function handleSpeechSynthesis(text, contentBox) {
  setTextForSpeech(text);
  initiateSpeechSynthesis();
  contentBox.classList.add("active");
  setTimeout(() => contentBox.classList.remove("active"), 800);
}

const speechSynthesisMessage = new SpeechSynthesisUtterance();

function setTextForSpeech(text) {
  speechSynthesisMessage.text = text;
}

function initiateSpeechSynthesis() {
  speechSynthesis.speak(speechSynthesisMessage);
}

function setSpeechSynthesisVoice(e) {
  speechSynthesisMessage.voice = availableVoices.find((voice) => voice.name === e.target.value);
}

// Event Listeners
toggleTextBoxButton.addEventListener("click", () => {
  document.getElementById("text-box").classList.toggle("show");
});

closeTextBoxButton.addEventListener("click", () => {
  document.getElementById("text-box").classList.remove("show");
});

speechSynthesis.addEventListener("voiceschanged", retrieveAvailableVoices);
voicesSelection.addEventListener("change", setSpeechSynthesisVoice);

readTextButton.addEventListener("click", () => {
  setTextForSpeech(textArea.value);
  initiateSpeechSynthesis();
});

retrieveAvailableVoices();
