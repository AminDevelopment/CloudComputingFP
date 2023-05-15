import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProudctCard from "../components/ProductCard";
import NoImage from "../assets/No_Image_Available.jpg";
import uuid from 'react-uuid'; 
import { Card } from "react-bootstrap";
import { createClient } from 'pexels';
import { useEffect, useState } from "react";


const Results = ({ aiReply }) => {
    const [photo, setPhoto] = useState({})
    console.log(aiReply);

    useEffect(() => {
        // const client = createClient('e2U0fJG6zHNgj6qnDe6Rb0EConhHAj3y5srcX7DFEyy8KbTIACjFX3x0 ');
        // const query = 'Nature';
        
        // client.photos.search({ query, per_page: 1 }).then(photos => {setPhoto(photos.photos[0]); console.log(photos.photos[0])});
    }, [aiReply])

    return (
        <Container className="py-5">
            <h2 className="d-inline-flex pt-5 pb-3" style={{backgroundColor: '#fafafa'}}>Maybe Something like this?</h2>
            <h1 className="pb-3" style={{backgroundColor: '#fafafa', textAlign: 'center'}}>Tester</h1>
                <Card className="mx-auto mb-5" style={{ width: '30rem' }}>
                    <Card.Img variant="top" src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" />
                </Card>
            <Row xs={1} md={2} className="g-4">
                <Col sm key={uuid()} >
                    <Card style={{ width: '25rem' }}>
                        <Card.Header>Usability</Card.Header>
                        <Card.Body>
                            <Card.Title>{"How usable is this product?"}</Card.Title>
                            <Card.Text>{aiReply.usability || "¯\\_(ツ)_/¯"}</Card.Text>
                        </Card.Body>
                    </Card>
                </ Col>
                <Col>
                    <Card style={{ width: '25rem' }}>
                        <Card.Header>Use Case</Card.Header>
                        <Card.Body>
                            <Card.Title>{"When and how often can I use this?"}</Card.Title>
                            <Card.Text>{aiReply.useCase || "¯\\_(ツ)_/¯"}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Card className="mt-5" style={{ width: '40 rem', textAlign: 'center' }}>
                <Card.Header>Overall</Card.Header>
                <Card.Body>
                    <Card.Title>{"Should I buy this?"}</Card.Title>
                    <Card.Text>{aiReply.promote || "¯\\_(ツ)_/¯"}</Card.Text>
                </Card.Body>
            </Card>
      </Container>
    );
        
};

export default Results;