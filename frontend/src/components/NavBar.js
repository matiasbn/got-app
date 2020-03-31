import React from 'react';
import { useDispatch } from 'react-redux';
import { Navbar, Form, FormControl } from 'react-bootstrap';
import ACTION_TYPES from '../common/action-types';

export default function NavBar() {
  const dispatch = useDispatch();

  const filterName = (string) => {
    dispatch({ type: ACTION_TYPES.CHANGE_NAME, value: string });
  };

  const filterHouse = (string) => {
    dispatch({ type: ACTION_TYPES.CHANGE_HOUSE, value: string });
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
    >
      <Navbar.Brand
        href="#home"
      >
        GOT Characters
      </Navbar.Brand>
      <Form
        inline
      >
        <FormControl
          type="text"
          placeholder="Filter by name"
          className="mr-sm-2"
          onChange={(event) => filterName(event.target.value)}
        />
        <FormControl
          type="text"
          placeholder="Filter by house"
          className="mr-sm-2"
          onChange={(event) => filterHouse(event.target.value)}
        />
      </Form>
    </Navbar>
  );
}
