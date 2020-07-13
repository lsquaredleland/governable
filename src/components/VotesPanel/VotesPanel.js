import React from 'react';

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { TwitterTweetEmbed } from 'react-twitter-embed';

import VoterTable from '../../components/VoterTable';
import SmallScreenAccordion from '../../components/SmallScreenAccordion'


const classes = {
  stick: {
    position: "sticky",
    top: "20px"
  },
};

const VotesPanel = ({ tweets, side, percentage, voteCount, color, mobileView }) => {

  return (
    <>
      <div style={tweets.length === 0 ? classes.stick : null}>
        <Paper elevation={3}>
          <VoterTable
            side={side}
            percentage={percentage}
            voteCount={voteCount}
            color={color}
          />
        </Paper>
      </div>
      {mobileView ?
        <SmallScreenAccordion title={`Latest "${side}" Tweets (${tweets.length})`}>
        <Grid item xs={12}>
          <Tweets tweets={tweets} />
          </Grid>
        </SmallScreenAccordion>
      :
        <>
          <br />
          <div>Latest "{side}" Tweets ({tweets.length})</div>
          <Tweets tweets={tweets} style={classes.stick} />
        </>
      }
    </>
  )
}

const Tweets = ({ tweets }) => (
  tweets.map((tweetId, i) => (
    <div
      key={i}
      style={i === tweets.length-1 ? classes.stick : null}
    >
      <TwitterTweetEmbed
        tweetId={tweetId}
      />
    </div>
  ))
)

export default VotesPanel
