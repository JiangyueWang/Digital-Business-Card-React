import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import CreateCardForm from './components/CreateCardForm/CreateCardForm';
import Footer from './components/Footer';
import About from './components/About';
import Interests from './components/Interests';
import './App.css';
function App() {
  const [name, setName] = useState('Laura Smith');
  const [web, setWeb] = useState('laurasmith.website');
  const [email, setEmail] = useState('laurasmith@gmail.com');
  const [about, setAbout] = useState('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique necessitatibus perferendis harum officiis illum perspiciatis aperiam ipsum accusamus deleniti hic. Officia deleniti distinctio a ipsa illum magnam exercitationem temporibus iusto!');
  const [interests, setInterests] = useState('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique necessitatibus perferendis harum officiis illum perspiciatis aperiam ipsum accusamus deleniti hic. Officia deleniti distinctio a ipsa illum magnam exercitationem temporibus iusto!');
  function updateName(newName) {
      setName(newName)
  }
  function updateWeb(newWeb) {
    setWeb(newWeb);
  }
  function updateEmail(newEmail) {
    setEmail(newEmail);
  }
  function updateAbout(newAbout) {
    setAbout(newAbout);
  }
  function updateInterests(newInterests) {
    setInterests(newInterests);
  }
  return (
    <div className='wrapper'>
      <GeneralInfo name={name} web={web} email={email}/>
      <About about={about} />
      <Interests interests={interests} />
      <Footer />
      <CreateCardForm updateNameProp={updateName} 
                      updateWebProp={updateWeb} 
                      updateEmailProp={updateEmail}
                      updateAbout={updateAbout}
                      updateInterests={updateInterests}
                      />
      
    </div>
  );
}

export default App;
