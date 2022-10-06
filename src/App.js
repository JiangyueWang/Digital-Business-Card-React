import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import CreateCardForm from './components/CreateCardForm/CreateCardForm';
import Footer from './components/Footer';
import About from './components/About';
import Interests from './components/Interests';
import './App.css';
function App() {
  const [cardClass1, setCardClass1] = useState('card1');
  const [cardClass2, setCardClass2] = useState('card2');
  function handleClickStyleOne() {
    setCardClass1('inactive-card')
  }
  function handleClickStyleTwo() {
    setCardClass2('inactive-card')
  }
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
      <div className='cards-wrapper flex'>
        <div className={cardClass1}>
          <GeneralInfo name={name} web={web} email={email}/>
          <About about={about}/>
          <Interests interests={interests}/>
          <Footer />
        </div>
        <div className={cardClass2}>
            <GeneralInfo name={name} web={web} email={email}/>
            <About about={about}/>
            <Interests interests={interests} />
            <Footer />
        </div>
      </div>

      <div>
        <p> choose between digital business card style 1 or 2</p>
        <button type='button' onClick={handleClickStyleOne}>style 1</button>
        <button type='button' onClick={handleClickStyleTwo}>style 2</button>
      </div>

      <div>
              <CreateCardForm updateNameProp={updateName} 
                      updateWebProp={updateWeb} 
                      updateEmailProp={updateEmail}
                      updateAbout={updateAbout}
                      updateInterests={updateInterests}
                      />
      </div>

      
    </div>
  );
}

export default App;
