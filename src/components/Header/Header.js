import React from 'react';
import {
  Link,
} from 'react-router-dom';
import styled from 'styled-components';

import Container from '../Container';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from '@material-ui/core/IconButton';


const StyledHeader = styled.div`
  align-items: center;
  display: flex;
  height: 80px;
  justify-content: space-between;
  position: relative;
  z-index: 2;
`

const StyledLogo = styled.div`
  align-items: center;
  display: flex;
  font-size: 24px;
  font-weight: 700;
`

const StyledWrapper = styled.header`
  background-color: ${props => props.transparent ? 'transparent' : 'black'};
  color: #FFF;
`

const StyledLink = styled(Link)`
  color: #FFF;
  padding: 0 12px;
  text-decoration: none;
`

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  margin: 0 -12px;
`

const Header = () => {
  const githubUrl = "https://github.com/lsquaredleland/governable";
  const twitterUrl = "https://twitter.com/lsquaredleland";

  return (
    <StyledWrapper transparent={false}>
      <Container>
        <StyledHeader>
          <StyledLink to="/">
            <StyledLogo>
              <AccountBalanceIcon style={{position: "relative", top:"-2px"}}/>
              <AccountBalanceIcon style={{transform: 'rotate(180deg)', position: "relative", top:"2px"}}/>
              <div style={{ width: 4 }} />
              <span>A House Divided</span>
            </StyledLogo>
            {/*<StyledLogo>
              <div style={{display:"grid"}}>
                <AccountBalanceIcon />
                <AccountBalanceIcon style={{transform: 'rotate(180deg)'}} />
              </div>
              <div style={{ width: 4 }} />
              <div style={{display:"grid"}}>
                <span>A House</span>
                <span>Divided</span>
              </div>
            </StyledLogo>*/}
          </StyledLink>
          <StyledNav>
            <StyledLink to="/Compound">Compound</StyledLink>
            <StyledLink to="/about">About</StyledLink>
            <IconButton onClick={() => window.open(githubUrl, '_blank')}>
              <GitHubIcon style={{color:"white"}} />
            </IconButton>
            <IconButton onClick={() => window.open(twitterUrl, '_blank')}>
              <TwitterIcon style={{color:"white"}} />
            </IconButton>
          </StyledNav>
        </StyledHeader>
      </Container>
    </StyledWrapper>
  )
}


export default Header
