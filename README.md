# Wizybot - Interactive Chatbot

A responsive and interactive chatbot interface built with React, TypeScript, and Vite. The chatbot features a clean UI, loading animations, and product recommendation capabilities.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/MigueIAngel/wizybot.git
cd wizybot
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn
\`\`\`

## Development

To start the development server:

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

This will start the development server at `http://localhost:5173` (or another port if 5173 is in use).

## Building for Production

To build the project for production:

\`\`\`bash
npm run build
# or
yarn build
\`\`\`

The build output will be in the `dist` directory.

## Preview Production Build

To preview the production build locally:

\`\`\`bash
npm run preview
# or
yarn preview
\`\`\`

## Project Structure

wizybot/  
├── public/              # Static assets  
├── src/                 # Source files  
│   ├── components/      # React components  
│   │   ├── ChatbotIcon.tsx  
│   │   ├── ChatForm.tsx  
│   │   ├── ChatMessage.tsx  
│   │   ├── LoadingAnimation.tsx  
│   │   └── ProductRecomendations.tsx  
│   ├── App.tsx          # Main application component  
│   ├── index.css        # Global styles  
│   └── main.tsx         # Entry point  
├── index.html           # HTML template  
├── tsconfig.json        # TypeScript configuration  
├── vite.config.ts       # Vite configuration  
└── README.md            # Project documentation  


## Usage

The chatbot can be triggered by clicking the chat button in the bottom right corner of the screen. Users can type messages and receive responses from the bot.

### Special Commands

- Type "I want product recommendations" to see a carousel of product recommendations.

## Customization

### Changing the Bot Responses

You can modify the bot responses by editing the `responses` array in the `generateBotResponse` function in `App.tsx`.

### Styling

The chatbot's appearance can be customized by modifying the CSS in `index.css`. The color scheme uses primary colors of `#191d40` and `#3b589e`.

## License
Miguel Angel Altamar Rodriguez
