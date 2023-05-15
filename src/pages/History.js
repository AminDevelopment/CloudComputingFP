import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./History.css";
import { useEffect, useState } from "react";
import testJson from "../assets/testforhistory.json";
import { Card } from "react-bootstrap";
// import { useCookies } from "react-cookie";

const History = ({cookie}) => {
    const [history, setHistory] = useState([]);
    // const [cookie, setCookie] = useCookies();
    useEffect(() => {
        // code to fetch history 
        console.log(`in history cookie-${cookie}`)
        const fetchHistory = async() => {
            const response = await fetch(`https://2r99wm1x58.execute-api.us-east-1.amazonaws.com/dev/dynamodbread?objID=${cookie}`
            ,{
                method: "GET",
                headers: {
                'Content-Type': 'application/json',
                },
            });
            const DBhistory = await response.json();
            const newHistory = [];
            // console.log(DBhistory.history.L[0].M.search);
            DBhistory.history.L.map((result, key) => {
                if (result.M?.search?.S) {
                    newHistory.push(result.M.search.S);
                }
            })
            setHistory(newHistory);
            console.log(newHistory);
        }
        fetchHistory();
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