import Card from "react-bootstrap/Card";
import { CharacterDataParams } from "../types/characterTypes";

export function CharacterCards({ pic, name, homeworld }: CharacterDataParams) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={pic} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{homeworld}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CharacterCards;
