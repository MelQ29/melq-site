import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import ProjectSlider from "./components/ProjectSlider";
import Footer from "./components/Footer";
import backgroundImage from "./assets/images/background.jpg";

// Глобальные стили
const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background: url(${backgroundImage}) no-repeat center center fixed;
    background-size: cover;
    color: #e6e6e6;
    position: relative;
    z-index: 1;
}

body::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(26, 26, 26, 0.76); /* Полупрозрачный черный слой */
    z-index: -1;
}

a {
    color: rgb(255, 0, 0);
    text-decoration: none;
    transition: color 0.2s;
}

a:hover {
    color: rgb(200, 0, 0); /* Красный цвет при наведении */
    text-decoration: underline;
}

h1, h2, h3 {
    color: #fff;
}
`;

const AppContainer = styled.div`
max-width: 800px;
margin: 0 auto;
padding: 20px;
position: relative;
z-index: 2;
`;

/* Расстояние между блоками */
const Section = styled.div`
margin-bottom: 100px;
`;

const App = () => {
return (
    <>
     <GlobalStyle />
     <Header />
     <AppContainer>
        <Section id="home">
        </Section>
        <Section id="about">
         <AboutMe />
        </Section>
        <Section id="projects">
         <ProjectSlider />
        </Section>
        <Section id="links">
        </Section>
        <Footer />
     </AppContainer>
    </>
);
};

export default App;