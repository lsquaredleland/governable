import React, { useEffect, useState } from 'react'
import ReactGA from 'react-ga';

import logo from './logo.svg';
import './App.css';

import Home from './views/Home'

export const AppContext = React.createContext({})

const App = () => {

  // Perhaps should move more useState to Home.js and only have global variables in Context...
  const [tweets, setTweets] = useState([])
  const [voters, setVoters] = useState([])
  const [proposals, setProposals] = useState([])
  const [currentProposal, setCurrentProposal] = useState(1)
  const [modal, setModal] = useState(undefined);

  ReactGA.initialize('UA-169309883-1');
  ReactGA.pageview(window.location.pathname + window.location.search);

  // Is this right pattern to use?
  const UpdateVoters = (id) => {
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

  const allTweets = [
    {
      id: 1,
      pro: ['1254846366506905601', '1254899993443471360', '1256090650170327041'],
      neg: ['1254669301308506113','1255235435447685120','1255181493279707136','1255609457519652864'],
    }, {
      id: 2,
      pro: [],
      neg: ['1255609457519652864'],
      abstrain: ['1256313098723569664'],
    }, {
      id: 3,
      pro: ['1260986319972429824'],
      neg: [],
    }, {
      id: 4,
      pro: [],
      neg: [],
    }, {
      id: 7,
      pro: ['1270905785149583360'],
      neg: []
    }
  ];

  useEffect(() => {
    setTweets(allTweets)

    fetch("https://api.compound.finance/api/v2/governance/proposals")
      .then(res => res.json())
      .then(
        (result) => {
          setProposals(result.proposals)
          UpdateVoters(result.proposals.length)
        },
        (error) => {
          console.log(error);
        }
      );
      UpdateVoters(1)
  }, [])

  // Set up React Router: https://reacttraining.com/react-router/web/guides/quick-start

  return (
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
        <Home />
      </div>
    </AppContext.Provider>
  );
}

export default App;
