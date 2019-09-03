import React, { Fragment } from 'react';
import { Header, Landing } from './components/layouts'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {
  return (
    <Router>
    <Fragment>
      <Header />
     <Landing />
      </Fragment>    
      </Router>
  )
}

export default App;
