import type React from "react"
import { useRef } from "react"
import type { Dispatch, SetStateAction } from "react"
import type { JSX } from "react"
import LoadingAnimation from "./LoadingAnimation"

// Define message interface for chat history
interface Message {
  role: string
  content: string | JSX.Element
}

// Props interface for the ChatForm component
interface ChatFormProps {
  setChatHistory: Dispatch<SetStateAction<Message[]>>
  generateBotResponse: (history: string) => Promise<Message>
}

/**
 * ChatForm component handles user input and message submission
 * Manages the flow of sending messages and receiving responses
 */
export default function ChatForm({ setChatHistory, generateBotResponse }: ChatFormProps) {
  // Reference to the input field for direct manipulation
  const inputRef = useRef<HTMLInputElement>(null)

  /**
   * Handles form submission when user sends a message
   * @param event - Form submission event
   */
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    // Get user message from input field
    const userMessage = inputRef.current ? inputRef.current.value.trim() : ""

    // Clear and disable input field while processing
    if (inputRef.current) {
      inputRef.current.value = ""
      inputRef.current.disabled = true
    }

    // Add user message to chat history
    setChatHistory((history) => [...history, { role: "user", content: userMessage }])

    // Add loading animation after a short delay
    setTimeout(() => setChatHistory((history) => [...history, { role: "bot", content: <LoadingAnimation /> }]), 500)

    // Generate bot response after a delay to simulate processing
    setTimeout(
      () =>
        generateBotResponse(userMessage.toString()).then((botMessage) => {
          // Replace loading animation with actual response
          setChatHistory((history) => {
            const updatedHistory = [...history]
            updatedHistory[updatedHistory.length - 1] = botMessage
            return updatedHistory
          })
        }),
      3000,
    )

    // Re-enable input field after response is complete
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.disabled = false
        inputRef.current.focus()
      }
    }, 4000)
  }

  return (
    <form action="#" className="chat-form" onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" placeholder="Write a message..." className="message-input" required />
      <button className="material-symbols-rounded">send</button>
    </form>
  )
}
