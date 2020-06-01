import React from 'react'

import Paper from "@material-ui/core/Paper";
import { TwitterTweetEmbed } from 'react-twitter-embed';

import VoterTable from '../../components/VoterTable'


const classes = {
  paper: {
    padding: 20,
    textAlign: "center",
    fontFamily: "Roboto"
  },
  stick: {
    position: "sticky",
    top: "20px"
  }
};

const VotesPanel = ({ tweets, side, percentage, color }) => {

  return (
    <>
      <Paper
        className={classes.paper}
        elevation={3}
      >
        <VoterTable
          side={side}
          percentage={percentage}
          color={color}
        />
      </Paper>
      <br />
      <div>Latest "{side}" Tweets ({tweets.length})</div>
      {tweets.map((tweetId, i) => {
        return (
          <div
            key={i}
            style={i === tweets.length-1 ? classes.stick : {}}
          >
            <TwitterTweetEmbed
              tweetId={tweetId}
            />
          </div>
        )
      })}
    </>
  )
}

export default VotesPanel
