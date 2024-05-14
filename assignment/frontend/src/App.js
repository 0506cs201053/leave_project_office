// frontend/src/App.js

import React from 'react';
import 
{
   BrowserRouter as Router,
    Route,
    Switch
     } from 'react-router-dom';
import Leave from './components/LeaveApplicationForm';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import ResetPassword from './components/ResetPassword';

//
import NavigationBar from './components/NavigationBar';
import SendMailForm from './components/SendMailForm';
import Edit from './components/edit'
import Update  from './components/Update';
import read from './components/read';



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/leave" component={Leave}/>
        <Route path="/send-mail" component={SendMailForm} />
        <Route path="/home" component={NavigationBar} />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/reset" component={ResetPassword} />
        
      <Route path ="/edit" component={Edit}/>
      <Route path ="/update" component={Update}/>
      <Route path ="/read" component={read}/>
      

        </Switch>
      </div>
    </Router>
  );
}

export default App;
