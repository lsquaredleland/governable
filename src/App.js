import React, { useEffect, useState } from 'react'

import logo from './logo.svg';
import './App.css';

import Home from './views/Home'

export const AppContext = React.createContext({})

const App = () => {

  const [proTweets, setProTweets] = useState([])
  const [negTweets, setNegTweets] = useState([])
  const [voters, setVoters] = useState([])
  const [proposal, setProposal] = useState({})

  useEffect(() => {
    setProTweets(['1254846366506905601', '1254899993443471360', '1256090650170327041'])
    setNegTweets(['1254669301308506113','1255235435447685120','1255181493279707136','1255609457519652864'])
    setProposal({number: 1, title: "Add USDT Support"})
    const voters = [
      { name: 'Zerion', amount: 25000, time: "4/27 - 12:00", vote: 'For' },
      { name: '0xe6b2...Bcff', amount: 18080.73, time: "4/28 - 12:00", vote: 'Against' },
      { name: 'Jacob', amount: 12500, time: "4/27 - 12:00", vote: 'Against' },
      { name: 'Ric Burton', amount: 10000, time: "4/29 - 12:00", vote: 'Against' },
      { name: 'Ryan Adams', amount: 10000, time: "4/27 - 12:00", vote: 'Against' },
      { name: 'DeFi Rate', amount: 10000, time: "4/27 - 12:00", vote: 'Against' },
      { name:'Polychain Capital', amount:325712.27, time: '4/28 - 13:15', vote: 'For' },
      { name:'Geoffrey Hayes', amount:101000, time: '4/28 - 13:15', vote: 'For' },
      { name:'ParaFi Capital', amount:100010, time: '4/28 - 13:15', vote: 'For' },
      { name:'InstaDApp', amount:50000, time: '4/28 - 13:15', vote: 'For' },
      { name:'Kyber Network', amount:25000, time: '4/28 - 13:15', vote: 'For' },
      { name:'Gauntlet', amount:25000, time: '4/28 - 13:15', vote: 'For' },
      { name:'1inch.Exchange', amount:25000, time: '4/28 - 13:15', vote: 'For' },
      { name:'Calvin Liu', amount:24107.64, time: '4/28 - 13:15', vote: 'For' },
      { name:'0xd681...7d6e', amount:24107.64, time: '4/28 - 13:15', vote: 'For' },
      { name:'Blck', amount:22500, time: '4/28 - 13:15', vote: 'For' },
      { name:'PoolTogether', amount:15000, time: '4/28 - 13:15', vote: 'For' },
      { name:'Pantera Capital', amount:15000, time: '4/28 - 13:15', vote: 'For' },
      { name:'Max Wolff', amount:13018.13, time: '4/28 - 13:15', vote: 'For' },
      { name:'0xa0dc...C432', amount:13018.13, time: '4/28 - 13:15', vote: 'For' },
      { name:'0x582c...D468', amount:9763.59, time: '4/28 - 13:15', vote: 'For' },
      { name:'Dakeshi', amount:5000, time: '4/28 - 13:15', vote: 'For' },
      { name:'New Form Capital', amount:4742.88, time: '4/28 - 13:15', vote: 'For' },
    ]
    setVoters(voters)
  }, [])

  return (
    <AppContext.Provider value={{
      proTweets,
      negTweets,
      proposal,
      voters
    }}>
      <div className="App">
        <Home />
      </div>
    </AppContext.Provider>
  );
}

export default App;
