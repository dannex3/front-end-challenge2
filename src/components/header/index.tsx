import logo from '../../assets/logo.png';
import { Header, Logo, LogoNameContainer, Name, SubTitle, Menu, Li, MenuLink, LogoBox } from './styles';

export function Head() {
  return (
    <Header>
      <LogoBox>
        <a href='/'><Logo src={logo} alt='Zutterman Logo'/></a>
        <LogoNameContainer>
          <Name>zutterman</Name>
          <SubTitle>Measure Tapes</SubTitle>
        </LogoNameContainer>
      </LogoBox>
        <Menu>
          <Li><MenuLink href="/about">About Us</MenuLink></Li>
          <Li><MenuLink href="#">Models</MenuLink></Li>
          <Li><MenuLink href="#">Guarantee</MenuLink></Li>
        </Menu>
    </Header>
  )
};