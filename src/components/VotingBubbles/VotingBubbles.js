import React, { useContext, useState, useEffect, useRef } from 'react'

import { AppContext } from '../../App'
import { ResponsiveBubble } from '@nivo/circle-packing'

// https://observablehq.com/@d3/clustered-bubbles
const VotingBubbles = () => {
  const { voters } = useContext(AppContext)

  const root = {
    "address": "all votes",
    "color": "#ffe0c7",
    "children": [
      {
        "address": "Pro",
        "color": "#04D394",
        "children": voters.filter(v => v.support === true).map(v => ({...v, color:"yellow"}))
      }, {
        "address": "Neg",
        "color": "#DE5F67",
        "children": voters.filter(v => v.support === false).map(v => ({...v, color:"#DE5F67"}))
      }
    ]
  }
  console.log(root)

  return (
    <>
      <div style={{height:"500px"}}>
        <ResponsiveBubble
          root={root}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          identity="address"
          value="votes"
          colors={(e) => e.color}
          padding={6}
          label={(e) => {
            const voter = voters.find(v => v.address === e.id)
            return voter ? voter['display_name'] : e.id.slice(0,5)
          }}
          labelTextColor={'black'}
          borderWidth={2}
          borderColor={{ from: 'color' }}
          defs={[
            {
              id: 'lines',
              type: 'patternLines',
              background: 'none',
              color: 'inherit',
              rotation: -45,
              lineWidth: 5,
              spacing: 8
            }
          ]}
          fill={[ { match: { depth: 1 }, id: 'lines' } ]}
          animate={false}
        />
      </div>
    </>
  )
}

export default VotingBubbles
