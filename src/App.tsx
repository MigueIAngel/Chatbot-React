import type React from "react"
import { useState, useRef } from "react"
import ChatbotIcon from "./components/ChatbotIcon"
import ChatForm from "./components/ChatForm"
import ChatMessage from "./components/ChatMessage"
import ProductRecomendations from "./components/ProductRecomendations"
import type { JSX } from "react"
import LandingPage from "./components/LandingPage"

/**
 * Main App component that manages the chatbot interface
 * Handles state for chat history and chatbot visibility
 */
const App: React.FC = () => {
  // State to store chat messages history
  const [chatHistory, setChatHistory] = useState<Message[]>([])
  // State to control chatbot visibility
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)

  // Reference to the chat body for auto-scrolling
  const chatBodyRef = useRef<HTMLDivElement>(null)

  // Function to scroll chat to bottom
  const scrollToBottom = () => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight + 100,
        behavior: "smooth",
      })
    }
  }

  // Message type definition for chat history
  type Message = {
    role: string
    content: string | JSX.Element
  }

  /**
   * Generates a response from the chatbot based on user input
   * @param history - The user's message text
   * @returns Promise with the bot's response message
   */
  function generateBotResponse(history: string): Promise<Message> {
    return new Promise((resolve) => {
      // Normalize input for easier pattern matching
      const normalizedHistory: string = history.replace(/\s+/g, "").toLowerCase()

      // Special case: show product recommendations
      if (normalizedHistory.includes("iwantproductrecommendations")) {
        resolve({ role: "bot", content: <ProductRecomendations /> })
      } else {
        // Default responses for general conversation
        const responses = [
          "How can I assist you today?",
          "Can you please elaborate?",
          "I'm here to help!",
          "Let me look into that for you.",
          "Could you provide more details?",
          "That's interesting! Tell me more.",
          "I'm not sure I understand. Can you clarify?",
          "What else can I do for you?",
          "Let's figure this out together.",
          "I'm happy to assist!",
        ]
        const randomIndex = Math.floor(Math.random() * responses.length)
        const randomResponse = responses[randomIndex]

        // Simulate processing delay
        setTimeout(() => {
          resolve({ role: "bot", content: randomResponse })
        }, 1000)
      }
    })
  }

  return (
    <>
      <LandingPage />
      <div className={`container ${isChatbotOpen ? "show-chatbot" : ""}`}>
        {/* Chatbot toggle button */}
        <button onClick={() => setIsChatbotOpen((prev) => !prev)} id="chatbot-toggler">
          <span className="material-symbols-rounded">chat</span>
          <span className="material-symbols-rounded">close</span>
        </button>

        {/* Chatbot popup container */}
        <div className="chatbot-popup">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-info">
              <ChatbotIcon />
              <h2 className="logo-text">Wizybot</h2>
            </div>
            <button onClick={() => setIsChatbotOpen((prev) => !prev)} className="material-symbols-rounded">
              keyboard_arrow_down
            </button>
          </div>

          {/* Chat messages area */}
          <div className="chatbot-body" ref={chatBodyRef}>
            <div className="message bot-message">
              <ChatbotIcon />
              <p className="message-text">Hello there! Do you need any help?</p>
            </div>

            {/* Render chat history */}
            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))}
          </div>
          <div className="chat-footer">
            <ChatForm
              setChatHistory={setChatHistory}
              generateBotResponse={generateBotResponse}
              scrollToBottom={scrollToBottom}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
