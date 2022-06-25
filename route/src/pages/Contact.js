import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from './button';


export default function Contact() {
  const navigate = useNavigate();
  return (
    <>
      <h1>hello from contact page 😃</h1>
      <Button/>
    </>
  )
}
