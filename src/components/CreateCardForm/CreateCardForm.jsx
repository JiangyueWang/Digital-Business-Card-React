import React, { useState } from 'react';

const CreateCardForm = (props) => {
    const [name, setName] = useState('');
    const [web, setWeb] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [about, setAbout] = useState('');
    const [interests, setInterests] = useState('') 
    
    function handleSubmit(event) {
        event.preventDefault();

        const tempName = name;
        const tempWeb = web;
        const tempEmail = emailAddress;
        const tempAbout = about;
        const tempInterests = interests;

        props.updateNameProp(tempName);
        props.updateWebProp(tempWeb);
        props.updateEmailProp(tempEmail);
        props.updateAbout(tempAbout);
        props.updateInterests(tempInterests);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' value={name} onChange={(event) => setName(event.target.value)} ></input>
            <label>Website</label>
            <input type='text' value={web} onChange={(event) => setWeb(event.target.value)}></input>
            <label>Email</label>
            <input type='email' value={emailAddress} onChange={(event) => setEmailAddress(event.target.value)}></input>
            <label>About</label>
            <input type='text' value={about} onChange={(event) => setAbout(event.target.value)}></input>
            <label>Interests</label>
            <input type='text' value={interests} onChange={(event) => setInterests(event.target.value)}></input>
            <button type='submit'>Submit</button>
        </form>
    );
}
 
export default CreateCardForm;