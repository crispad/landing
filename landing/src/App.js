import React from "react";
import Footer from "./Components/Footer";
import content_team from "./Images/content_team.png";
import { Button, Form } from "semantic-ui-react";
import NavBar from "./Components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Landing</h1>
      <img src={content_team} alt="content_team" className="content_team" />
      <div className="Form">
        <Form>
          <Form.Field>
            <div className="firstname">
              <label>First Name</label>
              <input placeholder="First Name" />
            </div>
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder="Last Name" />
          </Form.Field>
          <div className="button">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default App;
