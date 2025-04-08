import type { JSX } from "react"
import ChatbotIcon from "./ChatbotIcon"

/**
 * ChatMessage component renders a single message in the chat
 * Handles different content types (string or JSX element)
 * @param chat - The message data to display
 */
export default function ChatMessage({
  chat,
}: { chat: { role: string; content: string | JSX.Element; icon?: string } }) {
  return (
    <div className={`message ${chat.role === "user" ? "user" : "bot"}-message`}>
      {/* Display bot icon for bot messages */}
      {chat.role === "bot" &&
        (typeof chat.icon === "string" ? (
          <img src={chat.icon || "/placeholder.svg"} alt="Bot Icon" />
        ) : (
          chat.icon || <ChatbotIcon />
        ))}

      {/* Render string content as text */}
      {typeof chat.content === "string" ? <p className="message-text"> {chat.content}</p> : null}

      {/* Render JSX content (like product recommendations or loading animation) */}
      {typeof chat.content === "object" ? <div className="products message-text">{chat.content}</div> : null}
    </div>
  )
}
