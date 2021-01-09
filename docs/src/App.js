// import logo from './logo.svg';
import React from "react";
import './App.css';
import ClassCard from './Components/ClassCard';
import { Router, Route } from "react-router-dom";
import SubjectCard from './Components/SubjectCard';
import PostAssignment from './Components/PostAssignment';
import SubmitAssignment from './Components/SubmitAssignment';
import HomeBackground from "./Components/Layout/HomeBackground";
import Navbar from './Components/Layout/Navbar'
import SignIn from "./Components/SignIn";
import SignUp from './Components/SignUp';
import {AuthProvider} from './Components/AuthContext';
import { createBrowserHistory } from 'history';
import {IsTeacherProvider} from './Components/IsTeacherContext';
import ViewAssignments from "./Components/ViewAssignments";
import Profile from "./Components/Profile";

const history = createBrowserHistory();
function App() {
  return (
    <AuthProvider>
      <IsTeacherProvider>
        <Router history={history}>
          <div className="App" style={{height: '1500'}}>
            <Navbar/>
            <Route exact path="/assignment-analysis/" component={HomeBackground} />
            <Route exact path="/assignment-analysis/profile" component={Profile} />
            <Route exact path="/assignment-analysis/signin" component={SignIn} />
            <Route exact path="/assignment-analysis/signup" component={SignUp} />
            <Route exact path="/assignment-analysis/classes" component={ClassCard} />
            <Route exact path="/assignment-analysis/classes/FYCSE" component={SubjectCard}/>
            <Route path="/assignment-analysis/postAssignment" component={PostAssignment}/>
            <Route path="/assignment-analysis/submitAssignment" component={SubmitAssignment}/>
            <Route path="/assignment-analysis/viewAll" component={ViewAssignments}/>
          </div>
        </Router>
      </IsTeacherProvider>
    </AuthProvider>    
  );
}

export default App;
