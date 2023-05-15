import Container from "react-bootstrap/Container";
import "./Home.css";
import ChatInterface from "../components/ChatInterface";
// import { useCookies } from "react-cookie";

const Home = ({cookie}) => {
  // const [cookie, setCookie] = useCookies();
  // console.log(`in homejs cookie is ${cookie.user}`)

  return (
    <div className="main">
      <Container className="pb-5">
        <div className="d-inline-flex flex-column p-5">
          <h1 className="title py-2" style={{color: "#3D550C"}}>Money → Happiness?</h1>
          <p className="subtitle">Adding rationale and filters to implusive buying</p>
        </div>
        <div className="d-flex flex-column p-5 pt-2">
          <div className="d-inline-flex">
            <h2 className="py-2" style={{backgroundColor: "#fafafa"}}>Turn that idea into something more concrete</h2>
          </div>
          <ChatInterface cookie={cookie}/>
        </div>
      </Container>
    </div>
  );
};

export default Home;
