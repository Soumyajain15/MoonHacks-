import { Card } from "react-bootstrap";
import "../styles/styles.css";

function EventCard({ title, date, rating }) {
  return (
    <Card className="p-2 shadow-sm">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
        <p>⭐ {rating}</p>
      </Card.Body>
    </Card>
  );
}

export default EventCard;
