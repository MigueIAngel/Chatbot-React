import ChatbotIcon from "./ChatbotIcon";

export default function ChatMessage({ chat }: { chat: { role: string; content: string } }) {
    return(
    <div className={`message ${chat.role==="user" ? 'user' : 'bot'}-message`}>
        {chat.role==="bot" && <ChatbotIcon />}
        <p className="message-text">
            {chat.content}
        </p>
    </div>);
}