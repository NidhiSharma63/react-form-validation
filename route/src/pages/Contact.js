import React from 'react';
import { useNavigate } from "react-router-dom";


export default function Contact() {
  const navigate = useNavigate();
  return (
    <>

      <h1>hello from contact page 😃</h1>
      <button onClick={()=>{
        navigate('/')
      }}>Home</button>
    </>
  )
}
