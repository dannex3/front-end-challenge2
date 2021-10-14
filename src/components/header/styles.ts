import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: space-between;
`;

export const LogoNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const LogoBox = styled.div`
  display: flex;
`;

export const Logo = styled.img`
  width: 71px;
  height: 70px;
  padding: 20px 24px 20px 53px;
`;

export const Name = styled.h1`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 41.2px;
  font-weight: 700;
  line-height: 48.3px;
  color: #846219;
  padding-top: 20px;
`;

export const SubTitle = styled.h2`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 16.2px;
  font-weight: 300;
  line-height: 19px;
  color: #846219;
  letter-spacing: 5px;
  text-align: center;
`;

export const Menu = styled.nav`
`;

export const Li = styled.li`
  width: 200px;
  text-align: center;
  display: inline-block;
  padding-top: 47px;
`;

export const MenuLink = styled.a`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 16.2px;
  font-weight: 300;
  line-height: 19px;
  color: #846219;
  letter-spacing: 5px;
  text-transform: uppercase;

  &:hover {
    filter: brightness(150%);
    transition: 1s;
  }
`;