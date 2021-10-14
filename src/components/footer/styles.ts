import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  height: 226px;
  background: #E9E9E9;
  display: flex;
`;
export const ContentBox = styled.div`
  padding-top: 47px;
  padding-left: 151px;
`;
export const Title = styled.h1`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  font-size: 27.2px;
  line-height: 32px;
  color: #716565;
`;
export const Networks = styled.nav`
  display: flex;
`;

export const Link = styled.li`
  width: 65px;
  padding-top: 14px;
`;

export const A = styled.a`

`;

export const Icon = styled.img`
  &:hover {
    filter: brightness(60%);
    transition: 0.8s;
  }
`;

export const Text = styled.p`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  font-size: 16.2px;
  line-height: 19px;
  color: #716565;
  padding-top: 15px;
  max-width: 121px;  
`;

export const ContactBox = styled.div`
  padding-top: 47px;
  padding-left: 260px;
`;