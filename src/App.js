import React from 'react';
import GeneralInfo from './components/GeneralInfo';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';

import CreateCardForm from './components/CreateCardForm/CreateCardForm';

function App() {
  return (
    <div>
      <GeneralInfo />
      <About />
      <Interests />
      <Footer />
      <CreateCardForm />
    </div>
  );
}

export default App;
