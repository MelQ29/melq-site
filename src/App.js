import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import ProjectSlider from "./components/ProjectSlider";
import Footer from "./components/Footer";
//import backgroundImage from "./assets/images/background.jpg";
import { motion } from "framer-motion";

// Глобальные стили
const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(to bottom, #151515, #1d1d1d, #222);
    color: #e6e6e6;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }

a {
    color: rgb(255, 0, 0);
    text-decoration: none;
    transition: color 0.2s;
}

a:hover {
    text-decoration: underline;
    color: #ff4d4d;
  }

h1, h2, h3 {
    font-family: 'Roboto', sans-serif;
    color: #fff;
  }

@media (max-width: 768px) {
  body {
    font-size: 16px;
  }
}
`;



const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  z-index: 2;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Section = styled(motion.div)`
  margin-bottom: 50px;
  flex: 1;
`;

const App = () => {
return (
    <>
     <GlobalStyle />
     <Header />
      <AppContainer>
        <Section id="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        </Section>
        <Section id="about" initial={{ opacity: 0 }} animate={{ opacity: 1, y: [50, 0] }} transition={{ duration: 1 }}>
         <AboutMe />
        </Section>
        <Section id="projects" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
         <ProjectSlider />
        </Section>
        </AppContainer>
        <Footer />
    </>
);
};

export default App;