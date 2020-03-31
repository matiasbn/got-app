import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, Card, Col, Image, Row } from 'react-bootstrap';
import ACTION_TYPES from '../common/action-types';

export default function View() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.show);
  const character = useSelector((state) => state.character);
  return show && (
    <Modal
      show={show}
      onHide={() => dispatch({ type: ACTION_TYPES.HIDE_CHARACTER })}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
      >
        <Modal.Title>{character.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={6}>
            <Card className="text-center">
              <Card.Body>
                <Card.Subtitle>
                  {character.house}
                </Card.Subtitle>
                <Card.Text>
                  Sex:
                  {' '}
                  {character.sex}
                </Card.Text>
                <Card.Text>
                  Rank:
                  {' '}
                  {character.rank}
                </Card.Text>
                <Card.Text>
                  Slug:
                  {' '}
                  {character.slug}
                </Card.Text>
                Books:
                <br />
                {(character.books && character.books.map((book, index) => (
                  <Card.Text
                    key={`${character.id}${index}`}
                  >
                    { book }
                  </Card.Text>
                ))) || <Card.Text />}
                Titles:
                <br />
                {(character.titles && character.titles.map((title, index) => (
                  <Card.Text
                    key={`${character.id}${index}`}
                  >
                    { title }
                  </Card.Text>
                ))) || <Card.Text>No titles</Card.Text>}
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6}>
            <Image src={character.image} thumbnail fluid />
          </Col>

        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => dispatch({ type: ACTION_TYPES.HIDE_CHARACTER })}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
