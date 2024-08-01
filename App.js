


import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useMediaQuery } from 'react-responsive';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f9;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Header = styled.header`
  background-color: #4CAF50;
  color: white;
  width: 100%;
  padding: 10px 0;
  text-align: center;
`;

const Main = styled.main`
  background: white;
  max-width: 800px;
  width: 100%;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  margin-top: 20px;
`;

const Footer = styled.footer`
  background-color: #4CAF50;
  color: white;
  width: 100%;
  padding: 10px 0;
  text-align: center;
  position: fixed;
  bottom: 0;
`;

const Title = styled.h1`
  font-size: ${(props) => (props.isMobile ? '24px' : '36px')};
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: ${(props) => (props.isMobile ? '16px' : '18px')};
  line-height: 1.6;
`;

const App = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <h1>My Static Page</h1>
        </Header>
        <Main>
          <Title isMobile={isMobile}>Welcome to My Static Page</Title>
          <Paragraph isMobile={isMobile}>
            This is a simple static page built with React and styled-components. 
            It is fully responsive and adjusts its layout based on the screen size. 
            You can customize the colors, fonts, and overall appearance as needed.
          </Paragraph>
        </Main>
        <Footer>
          2024 My Static Page. All rights reserved.
        </Footer>
      </Container>
    </>
  );
}

export default App;


