import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const HeaderContainer = styled.div`
background-color: #333;
padding: 10px 0;
text-align: center;
`;

const NavLink = styled(Link)`
margin: 0 20px;
color: #fff;
cursor: pointer;
text-decoration: none;
transition: color 0.2s;

&:hover {
    color: #ff0000; /* Красный цвет при наведении */
}
`;

const Header = () => {
return (
    <HeaderContainer>
     <NavLink to="home" smooth={true} duration={500}>
        Главная
     </NavLink>
     <NavLink to="about" smooth={true} duration={500}>
        Обо мне
     </NavLink>
     <NavLink to="projects" smooth={true} duration={500}>
        Проекты
     </NavLink>
     <NavLink to="links" smooth={true} duration={500}>
        Социальные сети
     </NavLink>
    </HeaderContainer>
);
};

export default Header;