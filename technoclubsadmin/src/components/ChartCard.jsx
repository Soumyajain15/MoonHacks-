import React, { useState } from "react";
import "../styles/chat.css";

const predefinedResponses = {
  "hello": "👋 Hi there! How can I assist you today?",
  "how are you": "😊 I'm just a bot, but I'm here to help!",
  "help": "💡 You can ask about events, members, settings, or any other features of the platform.",
  "events": "📅 Upcoming events include Hackathon on 25 Mar 2025 and Code-War 2025 on 5 April 2025.",
  "members": "👥 We have over 100 active members participating in various clubs.",
  "settings": "⚙️ You can change themes, update your profile, and manage your account from the settings section.",
  "bye": "👋 Goodbye! Have a great day!",
};

function Chat() {
  const [messages, setMessages] = useState([
    { user: "Admin", text: "Hello! How can I assist you today?" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const getResponse = (message) => {
    const lowerCaseMsg = message.toLowerCase();
    for (let key in predefinedResponses) {
      if (lowerCaseMsg.includes(key)) {
        return predefinedResponses[key];
      }
    }
    return "🤔 I'm not sure about that. Try asking about events, members, or settings.";
  };

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      // Add user message
      setMessages([...messages, { user: "You", text: newMessage }]);

      // Get bot response after a delay
      setTimeout(() => {
        const botResponse = getResponse(newMessage);
        setMessages((prevMessages) => [
          ...prevMessages,
          { user: "Bot", text: botResponse },
        ]);
      }, 1000);

      // Clear input
      setNewMessage("");
    }
  };

  return (
    <div className="chat-container">
      <h3>💬 Chat Section</h3>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.user === "You" ? "user" : "bot"}`}>
            <strong>{msg.user}: </strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          className="form-control"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button className="btn btn-primary mt-2" onClick={sendMessage}>
          Send ➡️
        </button>
      </div>
    </div>
  );
}

export default Chat;
