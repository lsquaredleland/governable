import React, { useEffect, useState } from 'react'
import ReactGA from 'react-ga';

import {
 BrowserRouter as Router,
 Switch,
 Route,
 Link,
 Redirect,
 useRouteMatch,
 useParams,
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import Home from './views/Home';
import About from './views/About';
import Header from './components/Header';
import { allTweets } from './tweets';

export const AppContext = React.createContext({});

const App = () => {

  // Perhaps should move more useState to Home.js and only have global variables in Context...
  const [tweets, setTweets] = useState([])
  const [voters, setVoters] = useState([])
  const [proposals, setProposals] = useState([])
  const [currentProposal, setCurrentProposal] = useState(1)
  const [modal, setModal] = useState(undefined);

  ReactGA.initialize('UA-169309883-1');
  ReactGA.pageview(window.location.pathname + window.location.search);

  // Gets individual voter data for each proposal
  const UpdateVoters = id => {
    fetch(`https://api.compound.finance/api/v2/governance/proposal_vote_receipts?proposal_id=${id}&page_size=100`)
      .then(res => res.json())
      .then(
        (result) => {
          setCurrentProposal(id)
          const votes = result.proposal_vote_receipts.map(v => {
            const { support, votes, voter: { address, display_name, image_url } } = v
            return {
              support,
              address,
              display_name,
              image_url,
              votes: parseFloat(votes),
              time: "4/27 - 12:00"
            }
          });
          setVoters(votes);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  useEffect(() => {
    setTweets(allTweets)

    fetch("https://api.compound.finance/api/v2/governance/proposals")
      .then(res => res.json())
      .then(
        (result) => {
          setProposals(result.proposals);
          UpdateVoters(result.proposals.length);
        },
        (error) => {
          console.log(error);
        }
      );
      UpdateVoters(1);
  }, [])

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
            <AppContext.Provider value={{
              tweets,
              proposals,
              currentProposal,
              setCurrentProposal,
              voters,
              UpdateVoters,
              modal, setModal
            }}>
              <div className="App">
                <CompoundProposals currentProposal={currentProposal} />
              </div>
            </AppContext.Provider>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

const CompoundProposals = ({ currentProposal }) => {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/:proposalNum`}>
        <Home />
      </Route>
      <Route exact path={match.path}>
        <Home />
        // <Redirect to={`/Compound/${currentProposal}`} />
      </Route>
    </Switch>
  );
};

export default App;
