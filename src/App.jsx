import { useState } from 'react'

import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pos from './pages/Pos';
import PaymentPages from './pages/PaymentPages';
import Login from './pages/Login';
import Signup from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pos' element={<Pos />} />
        <Route path='/payment' element={<PaymentPages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

