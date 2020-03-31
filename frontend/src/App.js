import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Container } from 'react-bootstrap';
import List from './views/List';
import View from './views/View';
import NavBar from './components/NavBar';

function App() {
  return (
    <Container>
      <NavBar />
      <List />
      <View />
    </Container>
  );
}

export default App;
