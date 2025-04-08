import { useState } from "react";
import ChatbotIcon from "./components/ChatbotIcon"
import ChatForm from "./components/ChatForm"
import ChatMessage from "./components/ChatMessage";

function App() {
    type Message = {
        role: string;
        content: string;
    };
    function generateBotResponse() : Promise<Message> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ role: "bot", content: "This is a bot response!" });
            }, 1000);
        });
    }
    const [chatHistory, setChatHistory] = useState<Message[]>([]);
    return (
        <div className="container">
            <div className="chatbot-popup">
                {/* Header*/}
                <div className="chat-header">
                    <div className="chat-info">
                        <ChatbotIcon />
                        <h2 className="logo-text">Wizybot</h2>
                    </div>
                    <button className="material-symbols-rounded">keyboard_arrow_down</button>
                </div>
                {/* Body*/}
                <div className="chatbot-body">
                    <div className="message bot-message">
                        <ChatbotIcon />
                        <p className="message-text">
                            Hello there! Do you need any help?
                        </p>
                    </div>
                    {chatHistory.map((chat,index)=>(
                        <ChatMessage key={index} chat={chat}/>
                    ))}
                    
                </div>
                {/* Footer*/}
                <div className="chat-footer">
                    <ChatForm setChatHistory={setChatHistory} generateBotResponse= {generateBotResponse} />
                </div>
            </div>
        </div>
    )
}

export default App
