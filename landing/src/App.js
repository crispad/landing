import React from 'react';
import Footer from './Components/Footer';
import content_team from './Images/content_team.png';
import { Button, Form } from 'semantic-ui-react'
import NavBar from './Components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Landing</h1>
      <img src={content_team} alt="content_team" className="content_team" />
      <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    {/* <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field> */}
    <Button type='submit'>Submit</Button>
  </Form>
      <Footer />
    </div>
  );
}

export default App;
