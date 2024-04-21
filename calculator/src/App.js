import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import Form from './components/Form';

export default function App() {
  return (
    <div>
      <Navbar/>
      <div className='container-sm' style={{width:'23rem'}}>
        <Form/>
      </div>
    </div>
  )
}

