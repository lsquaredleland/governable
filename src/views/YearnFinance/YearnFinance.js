import React, { useEffect, useState } from 'react'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Paper from '@material-ui/core/Paper';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Web3 from 'web3';
import ethers from 'ethers';

import Container from '../../components/Container'

import {
  YGOV_BPT_2_STAKING_POOL_ADDR,
  YGOV_BPT_2_STAKING_POOL_ABI,
  YFI_YCRV_BPT_TOKEN_ADDR,
  ERC20_ABI,
} from '../../common/constants';


const classes = makeStyles(theme => ({
  paper: {
    padding: 20,
    textAlign: "center",
    fontFamily: "Roboto",
  },
  mainGraph: {
    position: 'relative',
    top: '-2vh',
  }
}));

// https://gov.yearn.finance/t/yfi-minting-ownership/155
// https://gnosis-safe.io/app/#/safes/0xFEB4acf3df3cDEA7399794D0869ef76A6EfAff52/settings
// API => https://safe-transaction.mainnet.gnosis.io/api/v1/safes/0xFEB4acf3df3cDEA7399794D0869ef76A6EfAff52/creation/

// key + name (show tweet on hover - takes up too much space)
const keyHolders = [
  {holder: '0x0Cec743b8CE4Ef8802cAc0e5df18a180ed8402A7', tweet: '', twitter:'@milkyklim'},
  {holder: '0xFe45baf0F18c207152A807c1b05926583CFE2e4b', tweet: '1285428322986389504', twitter:'@CurveFinance'},
  {holder: '0x59171b87817C5F07157066Bd5284707A711229B3', tweet: '1285438650550038529', twitter:'@Cooopahtroopa'},
  {holder: '0x74630370197b4c4795bFEeF6645ee14F8cf8997D', tweet: '1285427247286046725', twitter:'@kaplansky1'},
  {holder: '0x99BC02c239025E431D5741cC1DbA8CE77fc51CE3', tweet: '1285434908383444992', twitter:'@Daryllautk'},
  {holder: '0x48f2bd7513da5Bb9F7BfD54Ea37c41650Fd5f3a3', tweet: '1285430347954622464', twitter:'@devops199fan'},
  {holder: '0xa83838221278f22ee5bAe3E523f34D42b066D67D', tweet: '1285500362015875073', twitter:'@damirbandalo'},
  {holder: '0xb0325DbE7fA891436E83A094f9F12848c78e449b', tweet: '1285439553180798976', twitter:'@cjliu49'},
  {holder: '0x7A1057E6e9093DA9C1D4C1D049609B6889fC4c67', tweet: '1285426492906909696', twitter:'@bantg'},
]

const useWeb3 = () => {
  const [web3Info, setWeb3Info] = useState({
    web3Provider: undefined,
    provider: undefined,
    wallet: undefined,
    web3: undefined,
  });
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    async function fetchData() {
      if (window.ethereum) {
          try {
              await window.ethereum.enable();
          } catch (error) {
              console.error("User denied account access")
          }
          const web3Provider = window.ethereum
          const provider = new ethers.providers.Web3Provider(window.ethereum)
          var web3 = new Web3(window.ethereum);
          const wallet = await provider.listAccounts()[0]

          setWeb3Info({
            web3Provider,
            provider,
            wallet,
            web3
          })
          setDataLoaded(true)
      }
    }
    fetchData()
  }, [])

  return { ...web3Info, dataLoaded };
}

// ALMOST A CARBON COPY OF https://github.com/yieldfarming/yieldfarming in some areas
const useProposals = (dataLoaded, provider) => {
  const [proposals, setProposals] = useState([]);
  const [currentBlockNumber, setCurrentBlockNumber] = useState([]);

  useEffect(() => {
    if (!dataLoaded) return
    async function fetchData() {
      const YGOV_VOTING_POOL = new ethers.Contract(YGOV_BPT_2_STAKING_POOL_ADDR, YGOV_BPT_2_STAKING_POOL_ABI, provider);
      const YFI_YCRV_BPT_TOKEN_CONTRACT = new ethers.Contract(YFI_YCRV_BPT_TOKEN_ADDR, ERC20_ABI, provider);

      setCurrentBlockNumber(await provider.getBlockNumber());

      const currentTotalStakedBPTAmount = await YFI_YCRV_BPT_TOKEN_CONTRACT.balanceOf(YGOV_BPT_2_STAKING_POOL_ADDR) / 1e18;

      const proposalCount = await YGOV_VOTING_POOL.proposalCount();

      const prop = await Promise.all(
        [...Array(parseInt(proposalCount))].map(async (d, i) => {
          return {
            ...await YGOV_VOTING_POOL.proposals(i),
            YFI_YCRV_BPT_TOKEN_CONTRACT,
            currentTotalStakedBPTAmount,
          };
        })
      );
      setProposals(prop);
    }
    fetchData()
  }, [dataLoaded, provider])

  return { proposals, currentBlockNumber }
}

const YearnFinance = () => {

  // Make this a hook instead?
  const smallScreen = !useMediaQuery('(min-width:1280px)');
  const mobileView = !useMediaQuery('(min-width:600px)'); // This has to match xs, sm, etc...

  const { provider, dataLoaded } = useWeb3()

  const { proposals, currentBlockNumber } = useProposals(dataLoaded, provider);


  // Create a generalized <hero>
  return (
    <>
      <div style={{height:'200px'}} />
      <Container>
        <div style={{
          marginTop: -68,
          position: 'relative',
        }}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6} style={classes.mainGraph} style={{order: smallScreen ? '-1' : null}}>
              <Paper elevation={3} >
                Some governance thing
                <p>* votes per proposal?</p>
                <p>* WHY are there no emits... have to look at voteFor(0x86a50535) or voteAgainst()</p>
                <p>* AND look at staked $YFI at time of vote...</p>
                <p>-------------------------------------------------</p>
                {proposals.length > 0 && provider ?
                  proposals.map((proposal, i) => (
                    <YearnFinaanceProposal
                      key={i}
                      proposalNum={i}
                      proposal={proposal}
                      provider={provider}
                      currentBlockNumber={currentBlockNumber}
                    />
                  ))
                : null}
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Paper elevation={3} style={{height:'300px'}}>
                Keyholders
              </Paper>
              <TwitterTweetEmbed tweetId={'1285428322986389504'}/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Paper elevation={3} style={{height:'300px', textAlign: 'left'}}>
                🔗Links🔗
                <p><b>Forum:</b> <a href="https://gov.yearn.finance">gov.yearn.finance</a></p>
                <p><b>Gnosis YFI Multisig:</b> <a href="https://gnosis-safe.io/app/#/safes/0xFEB4acf3df3cDEA7399794D0869ef76A6EfAff52/settings">0xFEB4acf3df3cDEA7399794D0869ef76A6EfAff52</a></p>
                <p><b>dApp:</b> <a href="https://yearn.finance">yearn.finance/</a></p>
                <p><b>dApp:</b> <a href="https://ygov.finance">ygov.finance/</a></p>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  )
}

const toFixed = (val, dec) => {
  return val.toFixed(dec)
}

const forHumans = function ( seconds ) {
    const levels = [
        [Math.floor(seconds / 31536000), 'years'],
        [Math.floor((seconds % 31536000) / 86400), 'days'],
        [Math.floor(((seconds % 31536000) % 86400) / 3600), 'hours'],
        [Math.floor((((seconds % 31536000) % 86400) % 3600) / 60), 'minutes'],
        [Math.floor((((seconds % 31536000) % 86400) % 3600) % 60), 'seconds'],
    ];
    let returntext = '';

    for (var i = 0, max = levels.length; i < max; i++) {
        if ( levels[i][0] === 0 ) continue;
        returntext += ' ' + levels[i][0] + ' ' + (levels[i][0] === 1 ? levels[i][1].substr(0, levels[i][1].length-1): levels[i][1]);
    }

    return returntext.trim();
};

const YearnFinaanceProposal = ({ proposalNum, proposal, currentBlockNumber, provider }) => {
  const proposedBy = proposal[1];
  const forVotes = proposal[2] / 1e18;
  const againstVotes = proposal[3] / 1e18;
  const startBlock = proposal[4];
  const endBlock = proposal[5];
  const YFI_YCRV_BPT_TOKEN_CONTRACT = proposal['YFI_YCRV_BPT_TOKEN_CONTRACT']

  const totalVotes = forVotes + againstVotes;
  const timeUntilEndBlock =  (endBlock - currentBlockNumber ) * currentBlockNumber;

  let readableTimeUntilEndBlock;
  let totalStakedBPTAmount;
  let isVotingPeriodOver;

  const [endBlockTimestamp, setEndBlockTimestamp] = useState()
  const [totalStakedBPTAmount2, setTotalStakedBPTAmount2] = useState()

  useEffect(() => {
    async function fetchData() {
      let endBlockTimestamp = (await provider.getBlock(parseInt(endBlock)))
      endBlockTimestamp = endBlockTimestamp && endBlockTimestamp.timestamp
      const totalStakedBPTAmount2 = await YFI_YCRV_BPT_TOKEN_CONTRACT.balanceOf(YGOV_BPT_2_STAKING_POOL_ADDR, {blockTag : parseInt(endBlock)}) / 1e18;
      setEndBlockTimestamp(endBlockTimestamp)
      setTotalStakedBPTAmount2(totalStakedBPTAmount2)
    }
    fetchData()
  },[provider])

  if (timeUntilEndBlock <= 0) {
      isVotingPeriodOver = true;
      readableTimeUntilEndBlock = forHumans((Date.now() / 1000) - endBlockTimestamp) + " ago";
      totalStakedBPTAmount = totalStakedBPTAmount2
  } else {
      isVotingPeriodOver = false;
      readableTimeUntilEndBlock = "in " + forHumans(timeUntilEndBlock);
      totalStakedBPTAmount = proposal['currentTotalStakedBPTAmount'];
  }

  const quorumPercentage = toFixed((totalVotes * 100) / totalStakedBPTAmount, 2);
  const isQuorumMet = quorumPercentage > 33;

  let status = "";
  if (isVotingPeriodOver) {
      if (!isQuorumMet) {
          status += "🏳 DECLINED: Quorum not met."
      } else {
          if (forVotes > againstVotes) {
              status += "✅ PASSED"
          } else if (againstVotes > forVotes) {
              status += "❌ REJECTED"
          } else {
              status += "⚠️ TIED"
          }
      }
  } else {
      status = "⌛ ON GOING"
  }

  const forStr = `${parseInt(forVotes)} (${toFixed( forVotes * 100 / totalVotes, 2)}%)`;
  const againstStr = `${parseInt(againstVotes)} (${toFixed( againstVotes * 100 / totalVotes, 2)}%)`;

  return (
    <div style={{border: '2px solid black ', opacity: endBlock < currentBlockNumber ? 0.5 : 1}}>
      <p>Proposal {proposalNum} | {status} | by {proposedBy.slice(0, 10)}</p>

      <p>
        <p style={{display:'contents', color:'green'}}>{forStr}</p>
        {' vs '}
        <p style={{display:'contents', color:'red'}}>{againstStr}</p>
      </p>
      <p>{`Quorum : ${quorumPercentage}% ${parseFloat(quorumPercentage) > 33 ? "✔" : "𐄂"}`}</p>
      <p>{`Duration : ${startBlock} - ${endBlock} (${readableTimeUntilEndBlock})\n`}</p>
    </div>
  )
}

export default YearnFinance;
