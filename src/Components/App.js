import React from 'react';
import NavBar from './NavBar';
import '../Styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectPizzaCity from './SelectPizzaCity';
import PizzaCity from './PizzaCity';

function App() {
  return (
    <Router>
      <NavBar />
    <Routes>
      <Route
      exact 
      path='/'
      element={<SelectPizzaCity/>}
      />
      <Route
      exact path='/city'
      element={<PizzaCity/>}
      />
    </Routes>
   
    </Router>
  
  );
}

export default App;
