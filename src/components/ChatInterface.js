import React, { useState } from "react";
import styles from "./ChatInterface.module.css";
import Results from "./Results";
import testJson from "../assets/test.json";

const ChatInterface = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleChange = (event) => {
    setUserInput(event.target.value);
    console.log("handleChange:", event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessages((prevMessages) => [...prevMessages, { type: "user", text: userInput }]);
  
    const prompt = userInput;
    const apiKey = "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";
  
    try {
      const response = await fetch("https://api.openai.com/v1/engines/text-davinci-003/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          prompt,
          max_tokens: 150,
          n: 1,
          stop: null,
          temperature: 0.5,
        }),
      });
  
      const data = await response.json();
      const aiReply = data.choices[0].text.trim();
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "ai", text: aiReply },
      ]);
    } catch (error) {
      console.error(error);
    }
  
    setUserInput("");

  };
  

  return (
    <div className={styles.chatContainer}>
      <div>
        {messages.map((message, index) => (
          <div key={index} className={`message-${message.type}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={userInput}
          onChange={handleChange}
          className={styles.textarea}
          placeholder="Something wearable and train related..."
        />
        <button type="submit" className={styles.sendMessageButton}>
          Send
        </button>
      </form>
    </div>
  );
  
};

export default ChatInterface;
