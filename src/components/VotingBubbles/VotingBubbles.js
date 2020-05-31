import React, { useContext } from 'react'

import { AppContext } from '../../App'


// https://observablehq.com/@d3/clustered-bubbles
const VotingBubbles = () => {
  const { voters } = useContext(AppContext)

    return (
    <>
      <div style={{height:"450px"}} />
    </>
  )
}

export default VotingBubbles
