import React, { useContext } from 'react'

import { AppContext } from '../../App'

import Grid from '@material-ui/core/Grid'
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles'

import Container from '../../components/Container'
import Hero from '../../components/Hero'
import VotesPanel from '../../components/VotesPanel'
import VotingBubbles from '../../components/VotingBubbles'


const classes = makeStyles(theme => ({
  paper: {
    padding: 20,
    textAlign: "center",
    fontFamily: "Roboto",
  }
}));

const Home = () => {
  const { proTweets, negTweets } = useContext(AppContext)

  return (
    <>
      <Hero />
      <Container>
        <div style={{
          marginTop: -68,
          position: 'relative',
        }}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <VotesPanel
                side={"For"}
                percentage={90.31}
                color={"#04D394"}
                tweets={proTweets}
              />
            </Grid>
            <Grid item xs={6}>
              <div style={{position:"sticky", top:20}}>
                <Paper
                  className={classes.paper}
                  elevation={3}
                  style={{background: "lightgrey"}}
                >
                  <VotingBubbles />
                </Paper>
                <Grid item xs={7}>
                  <Paper
                    className={classes.paper}
                    elevation={3}
                    style={{marginTop: "20px"}}
                  >
                    <div style={{height:"400px", textAlign: "left"}}>
                      <h3 style={{padding:"1em 1em 0 1em"}}>Details</h3>
                      <p style={{margin:"0 1em"}}>In a September 2019 vote, users were given an opportunity to select which assets they favored adding to Compound; Maker and Tether (USDT) led the poll.</p>
                      <p style={{margin:"1em 1em"}}>This proposal adds Tether as a supported asset, with no collateral factor or reserve factor, and updates the Compound price feed to conservatively peg Tether to $1. By using a peg, weakness in the underlying asset won’t change collateral requirements for users borrowing Tether.</p>
                      <p style={{margin:"1em 1em"}}>The initial interest rate model for Tether is a jump-rate model which ranges from 2% at 0% utilization, to 20% at 90% utilization, then jumps to 40% at 100% utilization.</p>
                      <p style={{margin:"1em 1em"}}>cUSDT is an upgradable cToken contract that has been modified to accommodate potential transfer fees in the underlying token. The cToken contract has been reviewed by OpenZeppelin and the Compound team.</p>
                    </div>
                  </Paper>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={3}>
              <VotesPanel
                side={"Against"}
                percentage={9.69}
                color={"#DE5F67"}
                tweets={negTweets}
              />
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  )
}

export default Home
