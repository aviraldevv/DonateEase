import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook

import Hero from '../components/Hero';
import Content from '../components/Content';
import Donate from '../components/Donate';
import GetFunds from '../components/GetFunds';

function Home() {
  const [isdonate, setdonate] = useState(false);
  const [isgetFunds,setgetFunds]=useState(false);
  const history = useHistory(); // Access the history object
  const history1=useHistory();

  function handledonatechange() {
    setdonate(prevValue => {
      return !prevValue;
    });
    history.push('/donate'); // Update the route to '/donate'
  }

  function handlegetFundsChange(){
    setgetFunds(prevValue=>{
      return !prevValue;
    });
    history1.push("/getFunds");
  }

  return (
    // <Fragment>
    //   {isdonate ? (
    //     <Donate />
    //   ) : (
    //     <div>
    //       <Hero handlechange={handledonatechange} />
    //       <Content />
    //     </div>
    //   )}
    // </Fragment>

    <Fragment>
      {
        isdonate?
        (
          (<Donate/>)
        ):
        (isgetFunds?
          (<GetFunds/>):
          (
            <div>
              <Hero handlechange={handledonatechange} handlechangeFunds={handlegetFundsChange}/>
              <Content />
            </div>
          )
        )
      }
    </Fragment>

  );
}

export default Home;
