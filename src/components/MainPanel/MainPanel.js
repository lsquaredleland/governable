import React, { useContext } from 'react'

import { CompoundContext } from '../../App'
import VotingBubbles from '../../components/VotingBubbles'
import SmallScreenAccordion from '../../components/SmallScreenAccordion'
import { Swipeable } from 'react-swipeable';

import Paper from "@material-ui/core/Paper"
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Showdown from 'showdown'


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



const MainPanel = ({ proposal, smallScreen }) => {
  const { voters,  proposals, setCurrentProposal, currentProposal } = useContext(CompoundContext);

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
    <div style={{position:"sticky", top:20, marginTop: '-20px'}}>
      <Swipeable
        onSwipedRight={swipeRight}
        onSwipedLeft={swipeLeft}
        {...config}
      >
        <Paper
          className={classes.paper}
          elevation={3}
          style={{minWidth: '400px'}}
        >
          {voters.length > 0 ? <VotingBubbles voters={voters} /> : null}
        </Paper>
      </Swipeable>
      {smallScreen ?
        <SmallScreenAccordion title={proposal.title}>
          <ProposalDescription proposal={proposal} />
        </SmallScreenAccordion>
      : null}
      {!smallScreen ?
        <Grid item xs={12} lg={7}>
          <Paper
            className={classes.paper}
            elevation={3}
            style={{marginTop: "20px",}}
          >
            <ProposalDescription proposal={proposal} />
          </Paper>
        </Grid>
      : null}
    </div>
  )
}

const ProposalDescription = ({ proposal }) => {
  const converter = new Showdown.Converter();

  return (
    <div style={{height:"100%", textAlign: "left", padding: "1em"}}>
      <h3>Details</h3>
      {proposal.description && proposal.description.split("\n\n").map((p, i) => {
        // Hacky
        const html = converter.makeHtml(p).replace("<img","<img style='width:100%'");
        return (
          <p dangerouslySetInnerHTML={{__html:html}} key={i} />
        )
      })}
    </div>
  )
}

export default MainPanel;
