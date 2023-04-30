import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NoImage from '../assets/No_Image_Available.jpg'

const ProudctCard = ({className, photoSrc, productName, productDescription}) => {
  return (
    <Card className = {className && "card-img-top img-fluid"} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={photoSrc || NoImage} />
      <Card.Body>
        <Card.Title>{productName || "Not Found"}</Card.Title>
        <Card.Text>
          {productDescription || "Vist the website to find out more"}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ProudctCard;