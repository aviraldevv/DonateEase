import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook

import Hero from '../components/Hero';
import Content from '../components/Content';
import Donate from '../components/Donate';

function Home() {
  const [isdonate, setdonate] = useState(false);
  const history = useHistory(); // Access the history object

  function handledonatechange() {
    setdonate(prevValue => {
      return !prevValue;
    });
    history.push('/donate'); // Update the route to '/donate'
  }

  return (
    <Fragment>
      {isdonate ? (
        <Donate />
      ) : (
        <div>
          <Hero handlechange={handledonatechange} />
          <Content />
        </div>
      )}
    </Fragment>
  );
}

export default Home;
