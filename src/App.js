import React, { useEffect, useState } from 'react'

import {
 HashRouter as Router,
 Switch,
 Route,
 Redirect,
 useRouteMatch,
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
  const [currentProposal, setCurrentProposal] = useState()
  const [modal, setModal] = useState(undefined);
  const [initialLoad, setInitiateLoad] = useState(false)

  // Gets individual voter data for each proposal
  // Should this be a reducer instead?
  useEffect(() => {
    if (initialLoad === false) return;

    if (!Number.isInteger(currentProposal)) {
      setCurrentProposal(proposals.length);
      return;
    }

    const additional = `?proposal_id=${currentProposal}&page_size=100`;
    fetch("https://api.compound.finance/api/v2/governance/proposal_vote_receipts"+ additional)
      .then(res => res.json())
      .then(
        (result) => {
          console.log("result", result)
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
  }, [currentProposal, initialLoad]);

  useEffect(() => {
    setTweets(allTweets)

    // Other APIs
    // > https://api.compound.finance/api/v2/governance/history
    // => top level network data (# token holders + # voting addresses)
    // > https://api.compound.finance/api/v2/governance/comp
    // => comp distribution mechanism data
    // > https://api.compound.finance/api/v2/governance/accounts?page_size=100
    // => good for building current delegation tree

    const additional = "?with_detail=true&page_size=100";
    fetch("https://api.compound.finance/api/v2/governance/proposals" + additional)
      .then(res => res.json())
      .then(
        (result) => {
          console.log("proposals", result)
          setProposals(result.proposals);
          setInitiateLoad(true);
        },
        (error) => {
          console.log(error);
        }
      );

    // use new email in gitconfig
    // Note sometimes people will delegate while having a - 0 balance
    // Start by getting all the voters ("votes"), then work backwards to get all the delegators ("balance")
    // If delegating to self => means you're a delegate
  //   fetch("https://api.compound.finance/api/v2/governance/accounts?page_size=500&order_by=balance&page_number=1")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         result.accounts.forEach((item, i) => {
  //           if (item.delegate.address !== "0x0000000000000000000000000000000000000000" && item.address !== item.delegate.address) {
  //             const { address, display_name } = item.delegate;
  //             const delegate_title = display_name === null ? address : display_name;
  //             console.log(item.address, address, delegate_title, item.balance, Math.log(item.balance))
  //           }
  //         });
  //
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
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
