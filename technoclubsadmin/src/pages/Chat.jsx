import React, { useState } from "react";
import "../styles/chat.css";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // ✅ Send Message
  const sendMessage = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, { sender: "You", text: newMessage }]);
    setNewMessage("");
  };

  return (
    <div className="container mt-4 chat-container">
      <h4>💬 Club Chat Room</h4>
      <div className="chat-box">
        {messages.length === 0 ? (
          <p className="text-muted">No messages yet! Start a conversation.</p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${
                msg.sender === "You" ? "message-sent" : "message-received"
              }`}
            >
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))
        )}
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
          ➡️ Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
