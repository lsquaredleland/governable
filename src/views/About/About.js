import React, { useEffect, useState } from 'react';

import marked from "marked";
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";

import Container from '../../components/Container';


const classes = {
  paper: {
    margin: "20px",
    fontFamily: "Roboto",
    padding: "10px 20px 20px 20px",
  },
}

// Shift back to Reader instead of ReactMarkdown => has much less dependencies
const About = () => {
  const [ markdown, setMarkdown ] = useState('');

  useEffect(() => {
    const readmePath = require("../../ABOUT.md");

    fetch(readmePath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        setMarkdown(marked(text))
      })
  }, [])

  return (
    <Container>
      <Grid item xs={12} style={{maxWidth: '650px'}}>
        <Paper elevation={3} style={classes.paper}>
          <article dangerouslySetInnerHTML={{__html: markdown}} />
          <p>Hash: {process.env.REACT_APP_GIT_SHA}</p>
        </Paper>
      </Grid>
    </Container>
  );
};

export default About
