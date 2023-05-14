import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProudctCard from "../components/ProductCard";
import NoImage from "../assets/No_Image_Available.jpg";

const Results = ({resultJson}) => {
    return (
        <Container>
            <Row xs={1} md={3} className="g-4">
                {resultJson.shopping_results.map((result, key) => {
                    const title = result.title
                    console.log(title)
                    return (
                        <Col sm key={key} >
                            <ProudctCard
                                title={result.title}
                                price={result.price}
                                source={result.source}
                                thumbnail={NoImage}
                                link={result.link}
                            />
                        </Col>
                    );
                })}
            </Row>
      </Container>
    );
        
};

export default Results;