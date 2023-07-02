import React,{ Fragment } from "react";
import { useState } from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";
import Donate from "../components/Donate";

function Home(){

  const [isdonate,setdonate]=useState(false);

  function handledonatechange(){
    // console.log("clicked");
    setdonate((prevValue)=>{
      return !prevValue;
    });
  }

  // document.querySelector(".home").addEventListener("click",()=>{
  //   setdonate(false);
  // });

  return(<Fragment>
    {(isdonate)?<Donate/>:<div><Hero handlechange={handledonatechange}/><Content /></div>}
  </Fragment>);
};

export default Home;
