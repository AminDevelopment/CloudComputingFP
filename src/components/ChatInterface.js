import React, { useState } from "react";
import styles from "./ChatInterface.module.css";
import Results from "./Results";
import testJson from "../assets/test.json";
import testAiReplay from "../assets/testAiReply.json";
import uuid from "react-uuid";
// import { useCookies } from "react-cookie";

const ChatInterface = ({cookie}) => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  // const [cookie, setCookie] = useCookies();

  const [aiProduct, setAiProduct] = useState("");
  const [aiUsability, setAiUsability] = useState("");
  const [aiUseCase, setAiUseCase] = useState("");
  const [aiSparkJoy, setAiSparkJoy] = useState("");
  const [aiTargetAudience, setAiTargetAudience] = useState("");
  const [aiOverall, setAiOverall] = useState("");

  const apiUrl = "https://2r99wm1x58.execute-api.us-east-1.amazonaws.com/dev/openai";

  const handleChange = (event) => {
    setUserInput(event.target.value);
    console.log("handleChange:", event.target.value);
    console.log(`user cookie is ${cookie}`);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessages((prevMessages) => [...prevMessages, { type: "user", text: userInput }]);

    try {
      const responseProduct = await fetch(`${apiUrl}?message=${encodeURIComponent("Find me a product related to these items: " + userInput + ". Only give me the product name")}`
      ,{
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const product = await responseProduct.json();
      console.log(product)
      const aiReply = product;
      setAiProduct(aiReply);
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "ai", text: aiReply },
      ]);

      const responseUsability = await fetch(`${apiUrl}?message=${encodeURIComponent("How usable is " + aiReply + " within 10 words")}`
      ,{
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const productUsability = await responseUsability.json();
      setAiUsability(productUsability);

      const responseUseCase = await fetch(`${apiUrl}?message=${encodeURIComponent("When and how often can I use " + aiReply + " within 10 words")}`
      ,{
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const productUseCase = await responseUseCase.json();
      setAiUseCase(productUseCase);

      const responseSparkJoy = await fetch(`${apiUrl}?message=${encodeURIComponent("Does " + aiReply + " spark joy, within 10 words")}`
      ,{
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const productSparkJoy = await responseSparkJoy.json();
      setAiSparkJoy(productSparkJoy);

      const responseTargetAudience = await fetch(`${apiUrl}?message=${encodeURIComponent("Who is the target audience of " + aiReply + " within 10 words")}`
      ,{
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const productTargetAudience = await responseTargetAudience.json();
      setAiTargetAudience(productTargetAudience);

      const responseOverall = await fetch(`${apiUrl}?message=${encodeURIComponent("Should I buy " + aiReply + " within 10 words")}`
      ,{
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const productOverall = await responseOverall.json();
      setAiOverall(productOverall)

      const writeToDB = await fetch(`https://2r99wm1x58.execute-api.us-east-1.amazonaws.com/dev/dynamodbwrite?key=${cookie}&aiResult=${encodeURIComponent(aiReply)}&search=${encodeURIComponent(userInput)}`
      ,{
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const test = await writeToDB.json();
      console.log(`teh test result is ${test}`)

    } catch (error) {
      console.error(error);
    }

    setUserInput("");
  };

  return (
    <>
    <div className={styles.chatContainer}>
      <div>
        {messages.map((message, index) => (
            <div key={index} className={`message-${message.type}` === "message-user" ? styles.messageUser : styles.messageAi}>
              {message.type == "user" ? "<  ": ""}
              {message.text}
              {message.type == "ai" ? "  >" : ""}
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
      <Results 
        aiProduct={aiProduct} 
        aiUsability={aiUsability}
        aiUseCase={aiUseCase} 
        aiSparkJoy={aiSparkJoy}
        aiTargetAudience={aiTargetAudience}
        aiOverall={aiOverall} 
      />
    </div>
    </>
  );
};

export default ChatInterface;



// import React, { useState } from "react";
// import styles from "./ChatInterface.module.css";
// import Results from "./Results";
// import testJson from "../assets/test.json";

// const ChatInterface = () => {
//   const [userInput, setUserInput] = useState("");
//   const [messages, setMessages] = useState([]);

//   const handleChange = (event) => {
//     setUserInput(event.target.value);
//     console.log("handleChange:", event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setMessages((prevMessages) => [...prevMessages, { type: "user", text: userInput }]);
  
//     const prompt = userInput;
//     const apiKey = "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";
  
//     try {
//       const response = await fetch("https://api.openai.com/v1/engines/text-davinci-003/completions", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${apiKey}`,
//         },
//         body: JSON.stringify({
//           prompt,
//           max_tokens: 150,
//           n: 1,
//           stop: null,
//           temperature: 0.5,
//         }),
//       });
  
//       const data = await response.json();
//       const aiReply = data.choices[0].text.trim();
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         { type: "ai", text: aiReply },
//       ]);
//     } catch (error) {
//       console.error(error);
//     }
  
//     setUserInput("");

//   };
  

//   return (
//     <div className={styles.chatContainer}>
//       <div>
//         {messages.map((message, index) => (
//           <div key={index} className={`message-${message.type}`}>
//             {message.text}
//           </div>
//         ))}
//       </div>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={userInput}
//           onChange={handleChange}
//           className={styles.textarea}
//           placeholder="Something wearable and train related..."
//         />
//         <button type="submit" className={styles.sendMessageButton}>
//           Send
//         </button>
//       </form>
//     </div>
//   );
  
// };

// export default ChatInterface;
