import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #506FA9;
  display: flex;
  text-align: center;
`;

export const Title = styled.h1`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  font-size 82.2px;
  line-height: 70px;
  color: #FFF;
`

export const Content = styled.main`
  max-width: 40%;
  text-align: center;
  padding: 100px 100px;
`

export const Text = styled.p`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 300;
  font-size 32px;
  line-height: 32px;
  color: #FFF;
  padding-top: 50px;
`;

export const Image = styled.img`
  max-height: 400px;
  max-width: 600px;
  padding: 100px 100px 50px 0;
  mix-blend-mode: multiply;
`