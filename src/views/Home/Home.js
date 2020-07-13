import React, { useContext, useEffect } from 'react'

import { useParams } from "react-router-dom";

import { AppContext } from '../../App'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Swipeable } from 'react-swipeable';

import Container from '../../components/Container'
import Hero from '../../components/Hero'
import VotesPanel from '../../components/VotesPanel'
import TableModal from '../../components/TableModal'
import MainPanel from '../../components/MainPanel'


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

const Home = () => {
  const { tweets, proposals, setCurrentProposal, currentProposal } = useContext(AppContext);

  let { proposalNum } = useParams();

  useEffect(() => {
    if (Number.isInteger(parseInt(proposalNum)) && proposalNum !== currentProposal) {
      setCurrentProposal(parseInt(proposalNum));
    }
  }, [proposalNum])

  const proposal = proposals.find(p => p.id === currentProposal) || {};
  const currentTweets = tweets.find(t => t.id === currentProposal) || {};

  const calcPercentage = (input) => {
    return (parseFloat(input) / (parseFloat(proposal.for_votes) + parseFloat(proposal.against_votes)) * 100).toFixed(2);
  };

  // Make this a hook instead?
  const smallScreen = !useMediaQuery('(min-width:1280px)');
  const mobileView = !useMediaQuery('(min-width:600px)'); // This has to match xs, sm, etc...

  // http://stack.formidable.com/react-swipeable/
  // Add some styling + animation later
  const swipeRight = () => currentProposal > 1 ? setCurrentProposal(currentProposal-1) : null;
  const swipeLeft = () => currentProposal < proposals.length ? setCurrentProposal(currentProposal + 1) : null;
  const config = {
    delta: 10,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: true,
  }

  return (
    <>
      <Hero proposal={proposal} />
      <TableModal />
      <Container>
        <div style={{
          marginTop: -68,
          position: 'relative',
        }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} lg={3}>
              <VotesPanel
                side={"For"}
                percentage={calcPercentage(proposal.for_votes)}
                voteCount={proposal.for_votes}
                color={"#04D394"}
                mobileView={mobileView}
                tweets={currentTweets.pro || []}
              />
            </Grid>
            <Grid item xs={12} lg={6} style={classes.mainGraph} style={{order: smallScreen ? '-1' : null}}>
              <Swipeable
                onSwipedRight={swipeRight}
                onSwipedLeft={swipeLeft}
                {...config}
              >
                <MainPanel proposal={proposal} smallScreen={smallScreen} />
              </Swipeable>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <VotesPanel
                side={"Against"}
                percentage={calcPercentage(proposal.against_votes)}
                voteCount={proposal.against_votes}
                color={"#DE5F67"}
                mobileView={mobileView}
                tweets={currentTweets.neg || []}
              />
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  )
}

export default Home;
