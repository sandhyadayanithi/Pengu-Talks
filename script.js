const startBtn=document.querySelector('.start');
const reply=document.querySelector('.reply');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.interimResults = false; // we want final text only
recognition.lang = 'en-US';

let penguVoice;

speechSynthesis.onvoiceschanged = () => {
  const voices = speechSynthesis.getVoices();
  penguVoice = voices[1];
};

function speak(text) {
  const cleanText = text.replace(/[*_~`]/g, '');
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.voice = penguVoice;
  utterance.pitch = 1.9;
  utterance.rate = 1.5;
  speechSynthesis.speak(utterance);
}

startBtn.addEventListener('click', () => {
  recognition.start();
});

recognition.addEventListener('result',async (event)=>{
  const transcript = event.results[0][0].transcript;
  console.log(transcript);
  const response =await fetch('https://pengu-talks.onrender.com/speak',{
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title: transcript })
  });
  const data=await response.json();
  const botReply = data.candidates[0].content.parts[0].text;
  reply.textContent=`Pengu said: ${botReply}`;
  console.log(botReply);
  speak(botReply);
});
