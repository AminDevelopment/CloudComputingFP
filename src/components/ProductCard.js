import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NoImage from '../assets/No_Image_Available.jpg'

const ProudctCard = ({
  title,
  price,
  link,
  source,
  thumbnail
}) => {
  return (
    <Card className = "card-img-top img-fluid" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={thumbnail || NoImage} />
      <Card.Body>
        <Card.Title>{title || "Not Found"}</Card.Title>
        <Card.Text>{price || ""}</Card.Text>
        <Card.Text>{source || ""}</Card.Text>
        <Button variant="primary" href={link} target="_blank">Check it Out→</Button>
      </Card.Body>
    </Card>
  );
}

export default ProudctCard;