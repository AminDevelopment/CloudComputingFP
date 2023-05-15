import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./History.css";
import { useEffect, useState } from "react";
import testJson from "../assets/testforhistory.json";
import { Card } from "react-bootstrap";

const History = () => {
    const [history, setHistory] = useState([]);
    useEffect(() => {
        // code to fetch history 
        setHistory(testJson.results);
    }, []);

    return (
        <div className="main">
            <Container className="py-5">
                <Row xs={1} md={5} className="g-4">
                    {history.map((result, key) => {
                        return (
                            <Col sm key={key} >
                                <Card style={{ width: '16rem' }}>
                                    <Card.Body>
                                        <Card.Title>{result}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default History;