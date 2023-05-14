import Container from "react-bootstrap/Container";
import "./Home.css";
import ChatInterface from "../components/ChatInterface";
import Results from "../components/Results";
import testJson from "../assets/test.json";

const Home = () => {
  // const handleChatSubmit = async (event) => {
  //   event.preventDefault();
  //   setMessages((prevMessages) => [...prevMessages, { type: "user", text: userInput }]);
  
  //   const prompt = userInput;
  //   const apiKey = "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";
  
  //   try {
  //     const response = await fetch("https://api.openai.com/v1/engines/text-davinci-003/completions", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Authorization": `Bearer ${apiKey}`,
  //       },
  //       body: JSON.stringify({
  //         prompt,
  //         max_tokens: 150,
  //         n: 1,
  //         stop: null,
  //         temperature: 0.5,
  //       }),
  //     });
  
  //     const data = await response.json();
  //     const aiReply = data.choices[0].text.trim();
  //     setMessages((prevMessages) => [
  //       ...prevMessages,
  //       { type: "ai", text: aiReply },
  //     ]);
  //   } catch (error) {
  //     console.error(error);
  //   }
  
  //   setUserInput("");

  // };s

  return (
    <div className="main">
      <Container>
        <div className="d-flex flex-column p-5">
          <h1 className="title py-2" style={{color: "#3D550C"}}>Money → Happiness?</h1>
          <p className="subtitle">Adding rationale and filters to implusive buying</p>
        </div>
        <div className="d-flex flex-column p-5 pt-2">
          <h2 className="py-2">Turn that idea into something more concrete</h2>
          <ChatInterface/>
        </div>
        <Results resultJson={testJson}/>
        {/* <Container>
          <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col key={idx}>
                <ProudctCard />
                <ProudctCard
                  productName={"Useless Item"}
                  productDescription={"no reason to buy this really"}
                  photoSrc={testImage}
                />
              </Col>
            ))}
          </Row>
        </Container> */}
      </Container>
    </div>
  );
};

export default Home;
