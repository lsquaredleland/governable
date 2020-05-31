import React, { useContext } from 'react'

import { AppContext } from '../../App'

import styled from 'styled-components'


const StyledHero = styled.div`
  background: #000;
  display: flex;
  margin-top: -80px;
  min-height: calc(50vh - 80px);
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

const Hero = ({ tflValue }) => {
  const { proposal: { number, title} } = useContext(AppContext)

  return (
    <StyledHero id="hero">
      <StyledWrapper>
        <StyledContent>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{
                margin: 0,
                padding: 0,
                fontSize: '2vmax',
                fontWeight: 500,
                textShadow: '0px 4px 4px black',
              }}>
                A House Divided
              </h2>
            </div>
            <div style={{ textAlign: 'left' }}>
              <h2 style={{
                margin: 0,
                padding: 0,
                fontSize: '1vmax',
                fontWeight: 500,
                textShadow: '0px 4px 4px black',
                display: 'flex',
              }}>
                <div><a style={{color: "grey"}}>{('00' + number).slice(-3)}</a>  {title}</div>
              </h2>
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
