import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import ACTION_TYPES from '../common/action-types';

export default function Character(props) {
  const { character } = props;
  const dispatch = useDispatch();

  const showCharacter = async (id) => {
    const { data } = await axios({ method: 'get', url: `http://localhost:3001/characters/${id}` });
    dispatch({ type: ACTION_TYPES.SHOW_CHARACTER, value: data });
  };
  return (
    <Card
      className="text-center"
    >
      <Card.Header>{character.name}</Card.Header>
      <Card.Body>
        <Card.Subtitle>
          {character.house}
        </Card.Subtitle>
        <Button
          variant="success"
          size="sm"
          onClick={() => showCharacter(character.id)}
        >
          {`About ${character.name}`}
        </Button>
      </Card.Body>
    </Card>
  );
}
