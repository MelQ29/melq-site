import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { motion } from "framer-motion";

const HeaderContainer = styled(motion.div)`
  background-color: rgba(36, 36, 36, 0.9);
  padding: 15px 30px;
  text-align: center;
  border-radius: 20px;
  width: 60%;
  margin: 20px auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  position: sticky;
  top: 20px;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.8);
  }
`;

const NavLink = styled(Link)`
  margin: 0 25px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #ff5555;
  }
`;

const Header = () => {
return (
    <HeaderContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
     <NavLink to="home" smooth={true} duration={500}>
        Главная
     </NavLink>
     <NavLink to="about" smooth={true} duration={500}>
        Обо мне
     </NavLink>
     <NavLink to="projects" smooth={true} duration={500}>
        Проекты
     </NavLink>
     <NavLink to="footer" smooth={true} duration={500}>
        Социальные сети
     </NavLink>
    </HeaderContainer>
);
};

export default Header;