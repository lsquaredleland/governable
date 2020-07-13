import React, { useContext } from 'react'

import { AppContext } from '../../App'

import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'


const StyledHero = styled.div`
  background: #000;
  display: flex;
  margin-top: -80px;
  min-height: calc(40vh - 80px);
  position: relative;
  touch-action: none;
`

const StyledContent = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`

const StyledWrapper = styled.div`
  align-items: center;
  color: #FFF;
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
`

const Hero = ({ proposal }) => {
  const { id, title } = proposal;

  // Add navigation arrows here...
  const { setCurrentProposal, proposals } = useContext(AppContext);

  return (
    <StyledHero id="hero">
      <StyledWrapper>
        <StyledContent>
            <div style={{ textAlign: 'center' }}>
              <h1 style={{
                margin: 0,
                padding: 0,
                // fontSize: '2vmax',
                fontWeight: 500,
                textShadow: '0px 4px 4px black',
              }} >
                Compound Divided
              </h1>
            </div>
            <div style={{ display: 'flex' }}>
              {id > 1 ?
                <IconButton
                  style={{float: "left", height: "20px"}}
                  onClick={() => id > 1 ? setCurrentProposal(id-1) : null}
                >
                  <ArrowBackIcon
                    style={{
                      color: '#FFF',
                      fontSize: 24,
                    }}
                  />
                </IconButton> : null
              }
              <h3 style={{
                margin: 0,
                padding: 0,
                // fontSize: '1vmax',
                fontWeight: 500,
                textShadow: '0px 4px 4px black',
                display: 'flex',
              }}>
                <div><a style={{color: "grey"}}>{('00' + id).slice(-3)}</a>  {title}</div>
              </h3>
              {id < proposals.length ?
                <IconButton
                  style={{float: "right", height: "20px"}}
                  onClick={() => id < proposals.length ? setCurrentProposal(id+1) : null}
                >
                  <ArrowForwardIcon
                    style={{
                      color: '#FFF',
                      fontSize: 24,
                    }}
                  />
                </IconButton> : null
              }
            </div>
        </StyledContent>
        <div style={{
          position: 'relative',
          top: -80,
        }}>
        </div>
      </StyledWrapper>
    </StyledHero>
  )
}

export default Hero
