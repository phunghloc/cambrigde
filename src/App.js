import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import QuickTestIntro from './containers/QuickTest/QuickTestIntro/QuickTestIntro';
import QuickTestExam from './containers/QuickTest/QuickTestExam/QuickTestExam'
import Result from './components/UI/Result/Result';

function App() {
  return (
    <div className="App bg-light">

      <Header />

      <Switch>
        <Route path="/quick-test-exam/result" exact component={Result}/>
        <Route path="/quick-test-exam" exact component={QuickTestExam}/>
        <Route path="/quick-test" exact component={QuickTestIntro}/>
      </Switch>
 
    </div>
  );
}

export default App;
