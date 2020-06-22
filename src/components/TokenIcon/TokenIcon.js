import React from 'react'

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

const TokenIcon = ({ src, alt }) => {
  const classes = useStyles()

  return (
    <img className={classes.tokenIcon} src={src} alt={''} />
  )
}

export default TokenIcon
