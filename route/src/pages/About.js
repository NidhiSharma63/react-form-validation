import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from './button';

export default function About() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Hello from About Page 🧍 </h1>
      <Button/>
    </div>
  )
}
