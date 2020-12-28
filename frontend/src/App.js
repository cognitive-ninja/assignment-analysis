// import logo from './logo.svg';
import React from "react";
import './App.css';
import ClassCard from './Components/ClassCard';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SubjectCard from './Components/SubjectCard';
import PostAssignment from './Components/PostAssignment';
import SubmitAssignment from './Components/SubmitAssignment';
import HomeBackground from "./Components/Layout/HomeBackground";
import Navbar from './Components/Layout/Navbar'
import SignIn from "./Components/SignIn";
import SignUp from './Components/SignUp';
import {AuthProvider} from './Components/AuthContext';
import createBrowserHistory from 'history/createBrowserHistory';
import {IsTeacherProvider} from './Components/IsTeacherContext';

const history = createBrowserHistory();
function App() {
  return (
    <AuthProvider>
      <IsTeacherProvider>
        <Router history={history}>
          <div className="App" style={{height: '1500'}}>
            <Navbar/>
            <Route exact path="/" component={HomeBackground} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/classes" component={ClassCard} />
            <Route exact path="/classes/FYCSE" component={SubjectCard}/>
            <Route path="/postAssignment" component={PostAssignment}/>
            <Route path="/submitAssignment" component={SubmitAssignment}/>
          </div>
        </Router>
      </IsTeacherProvider>
    </AuthProvider>    
  );
}

export default App;
