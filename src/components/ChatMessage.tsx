import { JSX } from "react";
import ChatbotIcon from "./ChatbotIcon";

export default function ChatMessage({ chat }: { chat: { role: string; content: string | JSX.Element; icon?: string } }) {
    return (
        <div className={`message ${chat.role === "user" ? 'user' : 'bot'}-message`}>
            {chat.role === "bot" && (typeof chat.icon === "string" ? <img src={chat.icon} alt="Bot Icon" /> : chat.icon || <ChatbotIcon />)}

            {typeof chat.content === "string" ? <p className="message-text"> {chat.content}</p> : null}


            {typeof chat.content === "object" ? <div className="products message-text">{chat.content}</div> : null}
        </div>
    );
}