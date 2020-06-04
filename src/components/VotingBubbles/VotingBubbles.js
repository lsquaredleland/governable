import React, { useContext, useState, useEffect, useRef } from 'react'

import { AppContext } from '../../App'
import { ResponsiveBubble } from '@nivo/circle-packing'

import TokenIcon from '../TokenIcon'


// https://observablehq.com/@d3/clustered-bubbles
const VotingBubbles = () => {
  const { voters } = useContext(AppContext)

  const root = {
    "address": "All Votes",
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
  const totalForVotes = voters.reduce((agg, v) => agg + (v.support === true ? v.votes : 0), 0)
  const totalNegVotes = voters.reduce((agg, v) => agg + (v.support === false ? v.votes : 0), 0)

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
            return voter && voter['display_name'] != null ? voter['display_name'] : e.id.slice(0,5)
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
          tooltip={(e) => {
            const isChild = ["All Votes", "Pro", "Neg"].indexOf(e.id) === -1;
            let percentage = e.value / (e.data.support ? totalForVotes : totalNegVotes) * 100;
            if (!isChild) {
              percentage = e.value / (totalForVotes + totalNegVotes) * 100;
            }
            const value = e.value.toString().split('.')[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            return (
              <div style={{display:"inline-flex"}}>
                {isChild ? <TokenIcon
                  src={e.data.image_url}
                  style={{float:"left"}}
                /> : ''}
                <div style={{textAlign:"left"}}>
                  <strong>
                    {e.label || e.id}:
                  </strong>
                  <div>{value} ({percentage.toFixed(2)}%)</div>
                  {isChild ? <div>{"date"}: {e.data.time}</div> : ''}
                </div>
              </div>
            )
          }}
        />
      </div>
    </>
  )
}

export default VotingBubbles
