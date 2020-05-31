import React from 'react'

import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  tokenIcon: {
    alignItems: 'center',
    backgroundColor: theme.palette.grey[400],
    borderRadius: 48,
    display: 'flex',
    height: 44,
    width: 44,
  },
}))

const TokenIcon = () => {
  const classes = useStyles()
  return (
    <Box className={classes.tokenIcon}></Box>
  )
}

export default TokenIcon