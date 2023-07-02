import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useHistory } from 'react-router-dom'; // Import useHistory hook
import './styles.css';

const GetFunds = () => {
  const history = useHistory(); // Access the history object

  function handleFormSubmit(e) {
    e.preventDefault();

    history.push('/'); 
  }

  return (
    <div className="getfunds">
      <div className="card">
        <div className="heading">Get CrowdFunded Today</div>
        <div className="form">
          <Form onSubmit={handleFormSubmit}>
            {/* Add your form inputs here */}
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default GetFunds;
