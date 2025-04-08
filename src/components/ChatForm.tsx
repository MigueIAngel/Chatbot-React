import { useRef } from "react";
export default function ChatForm() {
    const inputRef = useRef<HTMLInputElement>(null);
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        const userMessage = inputRef.current ? inputRef.current.value.trim() : '';
        if (!userMessage) return;
        console.log(userMessage);
        
    }
    return (
        <form action="#" className="chat-form" onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" placeholder="Write a message..." className="message-input" required />
            <button className="material-symbols-rounded">send</button>
        </form>
    )
}