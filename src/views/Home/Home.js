import React, { useContext } from 'react'

import { AppContext } from '../../App'

import Grid from '@material-ui/core/Grid'
import Paper from "@material-ui/core/Paper"
import { makeStyles } from '@material-ui/core/styles'
import Showdown from 'showdown'

import Container from '../../components/Container'
import Hero from '../../components/Hero'
import VotesPanel from '../../components/VotesPanel'
import VotingBubbles from '../../components/VotingBubbles'
import TableModal from '../../components/TableModal'


const classes = makeStyles(theme => ({
  paper: {
    padding: 20,
    textAlign: "center",
    fontFamily: "Roboto",
  }
}));

const Home = () => {
  const { tweets, proposals, currentProposal } = useContext(AppContext);
  const proposal = proposals.find(p => p.id === currentProposal) || {};
  const currentTweets = tweets.find(t => t.id === currentProposal) || {};

  const calcPercentage = (input) => {
    return (parseFloat(input) / (parseFloat(proposal.for_votes) + parseFloat(proposal.against_votes)) * 100).toFixed(2);
  };

  const converter = new Showdown.Converter();

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
            <Grid item xs={3}>
              <VotesPanel
                side={"For"}
                percentage={calcPercentage(proposal.for_votes)}
                color={"#04D394"}
                tweets={currentTweets.pro || []}
              />
            </Grid>
            <Grid item xs={6}>
              <div style={{position:"sticky", top:20}}>
                <Paper
                  className={classes.paper}
                  elevation={3}
                >
                  <VotingBubbles />
                </Paper>
                <Grid item xs={7}>
                  <Paper
                    className={classes.paper}
                    elevation={3}
                    style={{marginTop: "20px"}}
                  >
                    <div style={{height:"100%", textAlign: "left", padding: "1em"}}>
                      <h3>Details</h3>
                      {proposal.description && proposal.description.split("\n\n").map(p => {
                        // Hacky
                        const html = converter.makeHtml(p).replace("<img","<img style='width:100%'");
                        return (
                          <p dangerouslySetInnerHTML={{__html:html}} />
                        )
                      })}
                    </div>
                  </Paper>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={3}>
              <VotesPanel
                side={"Against"}
                percentage={calcPercentage(proposal.against_votes)}
                color={"#DE5F67"}
                tweets={currentTweets.neg || []}
              />
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  )
}

export default Home
