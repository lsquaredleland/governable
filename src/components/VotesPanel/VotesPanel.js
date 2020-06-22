import React from 'react';

import Paper from "@material-ui/core/Paper";
import { TwitterTweetEmbed } from 'react-twitter-embed';

import VoterTable from '../../components/VoterTable';


const classes = {
  stick: {
    position: "sticky",
    top: "20px"
  }
};

const VotesPanel = ({ tweets, side, percentage, color }) => {

  return (
    <>
      <div style={tweets.length === 0 ? classes.stick : {}}>
        <Paper
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
      </div>
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
