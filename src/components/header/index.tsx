import React from 'react';
import logo from '../../assets/logo.png';
import { Header, Logo, LogoNameContainer, Name, SubTitle, Menu, Li, MenuLink, LogoBox } from './styles';

export function Head() {
  return (
    <Header>
      <LogoBox>
        <Logo src={logo} alt='Zutterman Logo'/>
        <LogoNameContainer>
          <Name>zutterman</Name>
          <SubTitle>Measure Tapes</SubTitle>
        </LogoNameContainer>
      </LogoBox>
        <Menu>
          <Li><MenuLink href="#">About Us</MenuLink></Li>
          <Li><MenuLink href="#">Models</MenuLink></Li>
          <Li><MenuLink href="#">Guarantee</MenuLink></Li>
        </Menu>
    </Header>
  )
};