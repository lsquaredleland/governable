import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InfoIcon from '@material-ui/icons/Info';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import BuildIcon from '@material-ui/icons/Build';
import LaunchIcon from '@material-ui/icons/Launch';

import { githubUrl, twitterUrl } from '../../common/constants';


const StyledLink = styled(Link)`
  color: #FFF;
  padding: 0 12px;
  text-decoration: none;
`;

const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
`;

const buttonStyle = {
  color: 'white',
  borderRadius: 3,
  border: 0,
  margin: '12px',
  fontWeight: 500,
}

const ProtocolDrawer = () => {
  const [open, setOpen] = useState(false);
  const [protocol, setProtocol] = useState('Compound');

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(open);
  };

  const ListItemLink = ({ title, link, disabled=false, icon=<AccountBalanceIcon /> }) => (
    <ListItem button key={title} disabled={disabled}>
      <ListItemIcon>
        {disabled ? <BuildIcon /> : icon}
      </ListItemIcon>
      <StyledLink
        onClick={() => title !== 'About' ? setProtocol(title) : null}
        style={{color:'black'}}
        to={`/${link}`}
      >
        {title}
      </StyledLink>
    </ListItem>
  )

  const ListItemOutlink = ({ title, outlink, icon }) => (
    <ListItem button key={title}>
      <ListItemIcon>{icon}</ListItemIcon>
      <StyledLink
        onClick={() => window.open(outlink, '_blank')}
        style={{color:'black'}}
      >
        {title}
      </StyledLink>
      <ListItemIcon><LaunchIcon /></ListItemIcon>
    </ListItem>
  )

  return (
    <>
      <StyledButton onClick={toggleDrawer(true)} style={buttonStyle}>
        {protocol}
      </StyledButton>
      <Drawer anchor={'right'} open={open} onClose={toggleDrawer(false)}>
      <div
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        style={{width:'250px'}}
      >
        <List>
          <ListItemLink link="Compound" title="Compound" />
          <ListItemLink link="yEarnFinance" title="yEarn Finance" disabled />
          <ListItemLink link="UMA" title="UMA" disabled />
          <ListItemLink link="ZRX" title="ZRX" disabled />
          <ListItemLink link="MakerDAO" title="MakerDAO" disabled />
          <ListItemLink link="Aave" title="Aave" disabled />
          <ListItemLink link="KyberDAO" title="KyberDAO" disabled />
          <ListItemLink link="Balancer" title="Balancer" disabled />
          <ListItemLink link="Curve" title="Curve" disabled />
          <ListItemLink link="mStable" title="mStable" disabled />
          <ListItemLink link="bZx" title="bZx" disabled />
          <ListItemLink link="Synthetix" title="Synthetix" disabled />
        </List>
        <Divider />
        <List>
          <ListItemLink link="about" title="About" icon={<InfoIcon />} />
          <ListItemOutlink outlink={githubUrl} title="Github" icon={<GitHubIcon />} />
          <ListItemOutlink outlink={twitterUrl} title="Twitter" icon={<TwitterIcon />} />
        </List>
      </div>
      </Drawer>
    </>
  );
}

export default ProtocolDrawer
