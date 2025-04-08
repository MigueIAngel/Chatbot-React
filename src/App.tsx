import ChatbotIcon from "./components/ChatbotIcon"
import ChatForm from "./components/ChatForm"

function App() {
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
                    <div className="message user-message">
                        <p className="message-text">
                            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        </p>
                    </div>
                </div>
                {/* Footer*/}
                <div className="chat-footer">
                    <ChatForm />
                </div>
            </div>
        </div>
    )
}

export default App
