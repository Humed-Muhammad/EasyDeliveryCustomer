import React from 'react';
import Container from '@Components/Atoms/Container';
import Navbar from '@Components/Organisms/Navbar';
import Login from "@Components/Organisms/Login"
import Register from '@Components/Organisms/Register';
import Home from '@Components/Organisms/Home';

const App = () => {
  return (
    <Container justify="space-between" direction="column" height="100%">
      {/* <Navbar title="Register" /> */}
    <Home/>
    </Container>
  )
}

export default App;