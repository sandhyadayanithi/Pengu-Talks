# 🐧 Pengu Speaks - Voice-Interactive Chatbot

Voice-interactive chatbot with Pengu the penguin. Built with speech recognition, Gemini AI for conversational responses, and text-to-speech for a complete voice experience.

## ✨ Features

- **Voice Recognition**: Click the microphone button and speak - Pengu listens!
- **AI-Powered Responses**: Google Gemini 2.5 Flash generates cute, conversational replies
- **Text-to-Speech**: Pengu's responses are spoken aloud with an adorable high-pitched voice
- **Beautiful UI**: Winter-themed design with floating snowflakes and smooth animations
- **Real-time Conversation**: Instant back-and-forth dialogue with Pengu

## 🎮 How to Use

1. Click the **microphone button** to start listening
2. Say anything you'd like to Pengu
3. Wait for Pengu to process your message with AI
4. Read and hear Pengu's adorable response!
5. Repeat to continue the conversation

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- A Google Gemini API key ([Get one here](https://makersuite.google.com/app/apikey))
- A modern web browser with microphone access

### Installation

1. Clone this repository:
   ```bash
   git clone <your-repo-url>
   cd speech-bot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```env
   GOOGLE_API_KEY=your_gemini_api_key_here
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

5. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 3000
   
   # Using Node's http-server (install globally first)
   npx http-server -p 3000
   ```

6. Navigate to `http://localhost:3000` and start talking to Pengu!

## 📁 Project Structure

```
speech-bot/
├── backend.js           # Express server with Gemini AI integration
├── script.js            # Frontend logic: speech recognition & synthesis
├── index.html           # Main HTML structure
├── index.css            # Styling with winter theme
├── package.json         # Dependencies and scripts
├── .env                 # API keys (create this)
└── utils/
    ├── pengu.png        # Pengu character image
    └── 9047590.png      # Snowflake decorations
```

## 🛠️ Technologies Used

### Frontend
- **Web Speech API**: Speech recognition and synthesis
- **Vanilla JavaScript**: No frameworks needed!
- **CSS Animations**: Smooth floating snowflakes and shake effects

### Backend
- **Express.js**: RESTful API server
- **Google Gemini AI**: Generates Pengu's responses
- **CORS**: Cross-origin resource sharing enabled
- **Dotenv**: Environment variable management

## 🎨 Customization

### Change Pengu's Voice

Modify the voice settings in `script.js`:

```javascript
utterance.pitch = 1.9;  // 0.1 to 2 (higher = squeakier)
utterance.rate = 1.5;   // 0.1 to 10 (higher = faster)
```

### Adjust AI Personality

Edit the system instruction in `backend.js`:

```javascript
config: {
  systemInstruction: "You are a penguin named Pengu. Respond in a fun, cute, but in a short way, maximum 2-5 sentences.",
}
```

### Change Language

Update the language setting in `script.js`:

```javascript
recognition.lang = 'en-US';  // Change to your language code
```

### Modify UI Theme

Edit colors in `index.css`:
- Background gradient: `radial-gradient(ellipse at center, #afddff 0%, #A0E0FF 40%, #e7f4fe 70%)`
- Button color: `linear-gradient(180deg, #39C2C9 0%, #3FC8C9 80%)`

## 🌐 Deployment

### Backend (Render, Railway, or similar)

1. Push your code to GitHub
2. Create a new web service on your hosting platform
3. Set the environment variable `GOOGLE_API_KEY`
4. Deploy!

### Frontend (GitHub Pages, Netlify, Vercel)

1. Update the fetch URL in `script.js` to your deployed backend:
   ```javascript
   const response = await fetch('https://your-backend-url.com/speak', {
     // ...
   });
   ```
2. Deploy the frontend files

## 🔧 Troubleshooting

### Microphone Not Working
- Check browser permissions for microphone access
- Ensure you're using HTTPS (required for production)
- Try a different browser (Chrome recommended)

### No Voice Output
- Check your device volume
- Verify browser supports Speech Synthesis
- Try refreshing the page to reload voices

### API Errors
- Verify your Gemini API key is correct
- Check API quota limits
- Ensure backend server is running

## 🎯 Future Enhancements

Ideas for expanding Pengu:
- 💾 Conversation history with localStorage
- 🎭 Multiple penguin personalities to choose from
- 🌍 Multi-language support
- 📊 Conversation analytics
- 🎨 Customizable penguin appearance
- 🔊 Multiple voice options
- 💬 Text input fallback for users without microphones

## 🤝 Contributing

Feel free to fork this project and make it your own! Some ways to contribute:
- Add new features
- Improve the UI/UX
- Fix bugs
- Add more languages
- Create different character themes

## 📄 License

This project is open source and available for personal and educational use.

## 🎉 Have Fun!

Enjoy chatting with Pengu! Don't forget to say hi and ask about the weather at the South Pole! 🐧❄️

---

Made with 💙 for penguin lovers everywhere
