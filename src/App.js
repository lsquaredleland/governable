import React, { useEffect, useState } from 'react'

import {
 HashRouter as Router,
 Switch,
 Route,
 Redirect,
 useRouteMatch,
} from "react-router-dom";

import './App.css';

import Home from './views/Home';
import About from './views/About';
import Header from './components/Header';
import useInitData from './hooks/useInitData';

export const CompoundContext = React.createContext({});

const App = () => {

  const [modal, setModal] = useState(undefined);
  const [
    { voters, proposals, currentProposal },
    setCurrentProposal
  ] = useInitData();

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
            <CompoundContext.Provider value={{
              proposals,
              currentProposal,
              setCurrentProposal,
              voters,
              modal, setModal
            }}>
              <div className="App">
                <CompoundProposals currentProposal={currentProposal} />
              </div>
            </CompoundContext.Provider>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

const CompoundProposals = ({ currentProposal }) => {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/:proposalNum`}>
        <Home />
      </Route>
      <Route exact path={match.path}>
        <Redirect to={`/Compound/${currentProposal}`} />
      </Route>
    </Switch>
  );
};

export default App;
