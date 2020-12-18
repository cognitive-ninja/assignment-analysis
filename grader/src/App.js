// import logo from './logo.svg';
import React from "react";
import './App.css';
import Navbar from './Components/Layout/Navbar';
import ClassCard from './Components/ClassCard';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SubjectCard from './Components/SubjectCard';

function App() {
  return (
    <Router>
      <div className="App" style={{height: '1500'}}>
        <Route exact path="/" component={Navbar} />
        <Route exact path="/classes" component={ClassCard} />
        <Route exact path="/classes/FYCSE" component={SubjectCard}/>
      </div>
    </Router>
    
  );
}

export default App;
