import { useRef } from "react";
import { Dispatch, SetStateAction } from "react";
import { JSX } from "react";
interface Message {
    role: string;
    content: string | JSX.Element;
}

interface ChatFormProps {
    setChatHistory: Dispatch<SetStateAction<Message[]>>;
    generateBotResponse: (history: string) => Promise<Message>;
}

export default function ChatForm({ setChatHistory, generateBotResponse }: ChatFormProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        const userMessage = inputRef.current ? inputRef.current.value.trim() : '';
        if (inputRef.current) {
            inputRef.current.value = '';
            inputRef.current.disabled = true;
        }
        
        setChatHistory(history => [
            ...history, { role: 'user', content: userMessage }])

        setTimeout(() => setChatHistory(history => [
            ...history, { role: 'bot', content: "..." }]), 500);
        setTimeout(() => generateBotResponse(userMessage.toString()).then((botMessage) => {
            setChatHistory(history => {
                const updatedHistory = [...history];
                updatedHistory[updatedHistory.length - 1] = botMessage;
                return updatedHistory;
            });
        }), 3000);
        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.disabled = false;
                inputRef.current.focus();
            }
        }, 4000);
        
    }
    return (
        <form action="#" className="chat-form" onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" placeholder="Write a message..." className="message-input" required />
            <button className="material-symbols-rounded">send</button>
        </form>
    )
}