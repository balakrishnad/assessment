import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './containers/Header';
import Navigation from './containers/Navigation';
import { Home, Details, Create } from './pages';
import Tabs from '../src/containers/Tabs';

import './App.css';

function App() {
  useEffect(() => {
    // fetch the FSHA submissions... 

  }, []);

  const [flag, toggleFlag] = useState(true)

  const clickHandler = () => {
    toggleFlag(!flag);
  }

  return (
    <div className="App">
      <Header />
      <Navigation onClickToggle={clickHandler} />
     
      <div style={{ margin: '1rem 2rem 0' }}> 
      {/* <Tabs/> */}
        <Switch>
          
          <Route exact path="/" component={Home}  />
          <Route path="/details" component={Details} />
          <Route path="/create" component={Create} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
