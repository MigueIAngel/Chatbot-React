import { useState } from "react";
import ChatbotIcon from "./components/ChatbotIcon"
import ChatForm from "./components/ChatForm"
import ChatMessage from "./components/ChatMessage";
import ProductRecomendations from "./components/ProductRecomendations";
import { JSX } from "react";
function App() {
    const [chatHistory, setChatHistory] = useState<Message[]>([]);
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);
    type Message = {
        role: string;
        content: string | JSX.Element;
    };
    
    function generateBotResponse(history:String) : Promise<Message> {
        return new Promise((resolve) => {
            const normalizedHistory:string = history.replace(/\s+/g, '').toLowerCase();
            if (normalizedHistory.includes("iwantproductrecommendations")){
                resolve({role:"bot", content: <ProductRecomendations />});
            } else {
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
                "I'm happy to assist!"
            ];
            const randomIndex = Math.floor(Math.random() * responses.length);
            const randomResponse = responses[randomIndex];

            setTimeout(() => {
                resolve({ role: "bot", content:randomResponse });
            }, 1000);
            
        }
        });
    }
   
    return (
        <div className={`container ${isChatbotOpen ? "show-chatbot" : ""}`}>
            <button onClick={()=>setIsChatbotOpen(prev =>!prev)} id="chatbot-toggler">
                <span className="material-symbols-rounded">chat</span>
                <span className="material-symbols-rounded">close</span>
            </button>
            <div className="chatbot-popup">
                {/* Header*/}
                <div className="chat-header">
                    <div className="chat-info">
                        <ChatbotIcon />
                        <h2 className="logo-text">Wizybot</h2>
                    </div>
                    <button onClick={()=>setIsChatbotOpen(prev =>!prev)} className="material-symbols-rounded">keyboard_arrow_down</button>
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
                    <ChatForm setChatHistory={setChatHistory} generateBotResponse= {generateBotResponse}  />
                </div>
            </div>
        </div>
    )
}

export default App
