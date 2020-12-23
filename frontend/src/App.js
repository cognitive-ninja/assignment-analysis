// import logo from './logo.svg';
import React from "react";
import './App.css';
import ClassCard from './Components/ClassCard';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SubjectCard from './Components/SubjectCard';
import PostAssignment from './Components/PostAssignment';
import HomeBackground from "./Components/Layout/HomeBackground";
import Navbar from './Components/Layout/Navbar'
function App() {
  return (
    <>
    <Router>
      <div className="App" style={{height: '1500'}}>
        <Navbar/>
        <Route exact path="/" component={HomeBackground} />
        <Route exact path="/classes" component={ClassCard} />
        <Route exact path="/classes/FYCSE" component={SubjectCard}/>
        <Route path="/postAssignment" component={PostAssignment}/>
      </div>
    </Router>
    </>    
  );
}

export default App;
