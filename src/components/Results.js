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
import "./Results.css";
import testAi from "../assets/testAiReply.json";


const Results = ({ aiProduct, aiUsability, aiUseCase, aiSparkJoy, aiTargetAudience, aiOverall }) => {
    const [photo, setPhoto] = useState({})
    console.log(aiProduct);

    useEffect(() => {
        if (aiProduct !== "") {
            const client = createClient('e2U0fJG6zHNgj6qnDe6Rb0EConhHAj3y5srcX7DFEyy8KbTIACjFX3x0 ');
            const query = aiProduct;
            
            client.photos.search({ query, per_page: 1 }).then(photos => { console.log(photos.photos[0]); setPhoto(photos.photos[0])});
        }
    }, [aiProduct])

    return (
        <Container className="py-5">
            {aiProduct == "" ? <></> : (
                <>
                   <h2 className="d-inline-flex pt-5 pb-3" style={{backgroundColor: '#fafafa'}}>Maybe Something like this?</h2>
                   <h1 className="pb-3 productTitle" style={{textAlign: 'center', color: '#3D550C'}}>{aiProduct}</h1>
                       <Card className="mx-auto mb-5" style={{ width: '30rem' }}>
                           <Card.Img variant="top" src={photo?.src?.landscape} />
                       </Card>
                   <Row xs={1} lg={2} className="g-4 d-flex" style={{justifyContent: 'center'}}>
                       <Col sm >
                           <Card style={{ width: '25rem' }}>
                               <Card.Header>Usability</Card.Header>
                               <Card.Body>
                                   <Card.Title>{"How usable is this product?"}</Card.Title>
                                   <Card.Text>{aiUsability || "¯\\_(ツ)_/¯"}</Card.Text>
                               </Card.Body>
                           </Card>
                       </ Col>
                       <Col sm >
                           <Card style={{ width: '25rem' }}>
                               <Card.Header>Use Case</Card.Header>
                               <Card.Body>
                                   <Card.Title>{"When and how often can I use this?"}</Card.Title>
                                   <Card.Text>{aiUseCase || "¯\\_(ツ)_/¯"}</Card.Text>
                               </Card.Body>
                           </Card>
                       </Col>
                       <Col sm >
                           <Card style={{ width: '25rem' }}>
                               <Card.Header>Spark Joy</Card.Header>
                               <Card.Body>
                                   <Card.Title>{"Does this spark joy?"}</Card.Title>
                                   <Card.Text>{aiSparkJoy || "¯\\_(ツ)_/¯"}</Card.Text>
                               </Card.Body>
                           </Card>
                       </Col>
                       <Col sm >
                           <Card style={{ width: '25rem' }}>
                               <Card.Header>Target Audience</Card.Header>
                               <Card.Body>
                                   <Card.Title>{"Who uses them?"}</Card.Title>
                                   <Card.Text>{aiTargetAudience || "¯\\_(ツ)_/¯"}</Card.Text>
                               </Card.Body>
                           </Card>
                       </Col>
                   </Row>
                   <Card className="mt-5" style={{ width: '40 rem', textAlign: 'center' }}>
                       <Card.Header>Overall</Card.Header>
                       <Card.Body>
                           <Card.Title>{"Should I buy this?"}</Card.Title>
                           <Card.Text>{aiOverall || "¯\\_(ツ)_/¯"}</Card.Text>
                       </Card.Body>
                   </Card> 
                </>
        )}
      </Container>
    );
};

export default Results;