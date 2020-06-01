import React, { useContext } from 'react'

import { AppContext } from '../../App'

import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

import TokenIcon from '../TokenIcon'

const VoterTable = ({ side, percentage, color }) => {
  const { voters } = useContext(AppContext)

  const orderedVotes = voters
    .filter(d => side === "For" ? d.support === true : d.support === false )
    .sort((a, b) => b.votes - a.votes);
  const itemsToShow = 4;

    return (
    <>
      <HeaderRow key={"Votes"}>
        <ProgressBar
          side={side}
          percentage={percentage}
          color={color}
        />
      </HeaderRow>
      <Row key={"Header"}>
        <TokenCell
          name={"Address"}
        />
        <AmountCell amount={"Votes"} />
        <DateCell time={"Time"} />
      </Row>
      {orderedVotes.slice(0,itemsToShow).map((voter, i) => {
        const name = voter.display_name ? voter.display_name : voter.address.slice(0, 10)
        return (
          <Row key={voter.address}>
            <TokenCell
              name={name}
              tokenIcon={<TokenIcon src={voter.image_url}/>}
            />
            <AmountCell amount={voter.votes} />
            <DateCell time={voter.time} />
          </Row>
        )
      })}
      {orderedVotes.length > itemsToShow ?
        <Row key={"Expand"}>
          <Box style={{margin: "0 auto", fontWeight: 500}}>Show More</Box>
        </Row>
      : ''}
    </>
  )
}

const useProgressBarStyles = makeStyles(theme => ({
  progressBar: {
    height: "30px",
    width: "100%"
  },
  bar: {
    position: "absolute",
    height: 10,
    borderRadius: 5
  }
}))
const ProgressBar = ({ side, percentage, color }) => {
  const classes = useProgressBarStyles()
  return (
    <Box className={classes.progressBar}>
      <div style={{width: "100%", height: "30px"}}>
        <h3 style={{float:"left"}}>{side}</h3>
        <h3 style={{float:"right"}}>{percentage}%</h3>
      </div>
      <div style={{position: "relative", marginTop: 20}}>
        <div className={classes.bar}
          style={{width:"100%", background:"lightgrey", right: 0}}
        />
        <div className={classes.bar}
          style={{width:`${percentage}%`, background:color}}
        />
      </div>
    </Box>
  )
}

const useHeaderRowStyles = makeStyles(theme => ({
  headerRow: {
    alignItems: 'center',
    borderBottom: `1px solid ${theme.palette.grey[100]}`,
    height: 80,
    paddingLeft: 24,
    paddingRight: 24,
    '&:hover': {
    }
  }
}))
const HeaderRow = ({ children }) => {
  const classes = useHeaderRowStyles()
  return (
    <Box className={classes.headerRow}>
      {children}
    </Box>
  )
}

const useRowStyles = makeStyles(theme => ({
  row: {
    alignItems: 'center',
    borderBottom: `1px solid ${theme.palette.grey[100]}`,
    display: 'flex',
    height: 50,
    paddingLeft: 24,
    paddingRight: 24,
    '&:hover': {
    }
  }
}))
const Row = ({ children }) => {
  const classes = useRowStyles()
  return (
    <Box className={classes.row}>
      {children}
    </Box>
  )
}

const useTokenCellStyles = makeStyles(theme => ({
  name: {
    marginLeft: theme.spacing(2),
  },
  tokenCell: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
  },
}))
const TokenCell = ({ name, tokenIcon }) => {
  const classes = useTokenCellStyles()
  return (
    <Box className={classes.tokenCell}>
      {tokenIcon}
      <span className={classes.name}>{name}</span>
    </Box>
  )
}

const useDateCellStyles = makeStyles(theme => ({
  tflCell: {
    fontWeight: 300,
  }
}))
const DateCell = ({ time }) => {
  const classes = useDateCellStyles()
  return (
    <Box className={classes.tflCell}>
      {time}
    </Box>
  )
}

const useAmountCellStyles = makeStyles(theme => ({
  tflCell: {
    fontWeight: 500,
    width: 140
  }
}))
const AmountCell = ({ amount }) => {
  const classes = useAmountCellStyles()
  return (
    <Box className={classes.tflCell}>
      {amount.toString().split('.')[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
    </Box>
  )
}

export default VoterTable
