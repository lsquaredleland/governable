import React, { useEffect, useState } from 'react'

import {
 HashRouter as Router,
 Switch,
 Route,
 Redirect,
 useRouteMatch,
} from "react-router-dom";

import './App.css';

import CompoundFinance from './views/CompoundFinance';
import About from './views/About';
import YearnFinance from './views/YearnFinance';
import Header from './components/Header';
import useInitData from './hooks/useInitData';

export const CompoundContext = React.createContext({});

const App = () => {

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Redirect to="/Compound" />
          </Route>
          <Route path="/Compound">
            <CompoundContextWrapper />
          </Route>
          <Route path="/yEarnFinance">
            <div className="App">
              <YearnFinance />
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

const CompoundContextWrapper = () => {
  const [
    { voters, proposals, currentProposal },
    setCurrentProposal
  ] = useInitData();

  const [modal, setModal] = useState(undefined);

  return (
    <CompoundContext.Provider value={{
      proposals,
      currentProposal,
      setCurrentProposal,
      voters,
      modal, setModal
    }}>
      <div className="App">
        <CompoundRouting currentProposal={currentProposal} />
      </div>
    </CompoundContext.Provider>
  )
}

const CompoundRouting = ({ currentProposal }) => {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/proposals/:proposalNum`}>
        <CompoundFinance />
      </Route>
      <Route exact path={match.path}>
        <Redirect to={`/Compound/proposals/${currentProposal}`} />
      </Route>
      <Route exact path={`${match.path}/summary`}>
        <About />
      </Route>
    </Switch>
  );
};

export default App;
