import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import "./Home.css"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProudctCard from '../components/ProductCard'
import testImage from '../assets/train-themed-phone-case.jpg'

const Home = () => {
    return (
        <Container>
            <div className="d-flex flex-column p-5">
                <h1 className="title py-2">Money → Happiness?</h1>
                <p className="subtitle">Adding rationale and filters to implusive buying</p>
                <p className ="pb-2 pt-5" style = {{fontSize: 25}}>What striked your fancy?</p>
                <Form className="d-flex justify-content-center">
                    <Form.Control
                        type="search"
                        placeholder="trains and accessory"
                        className="me-5 searchBar"
                        aria-label="Search"
                        />
                    <Button size ="lg" variant="success">Search!</Button>
                </Form>
            </div>
            <Container>
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col key={idx}>
                            <ProudctCard />
                            <ProudctCard productName={"Useless Item"} productDescription = {"no reason to buy this really"} photoSrc = {testImage} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    )
}

export default Home;