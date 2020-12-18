// import logo from './logo.svg';
import React from "react";
import './App.css';
import Navbar from './Components/Layout/Navbar';
import ClassCard from './Components/ClassCard';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App" style={{height: '1500'}}>
        <Route exact path="/" component={Navbar} />
        <Route path="/classes" component={ClassCard} />  
      </div>
    </Router>
    
  );
}

export default App;
