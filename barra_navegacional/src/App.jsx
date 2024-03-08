import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Wrapper from './componentes/Wrapper';
import Navbar from './componentes/Navbar';
import FormWrapper from './componentes/FormWrapper';

function App() {
  return (
    <Wrapper>
      <Navbar />
      <FormWrapper />
    </Wrapper>
  );
}

export default App;

