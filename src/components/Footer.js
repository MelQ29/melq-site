import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  margin-top: 40px;
  text-align: center;
  padding: 10px 0;
  background-color:rgba(36, 36, 36, 0.89);
  border-radius: 8px;
`;

const FooterLink = styled.a`
  margin: 0 10px;
  color: rgb(255, 0, 0);
  font-weight: bold;
  transition: color 0.2s;

  &:hover {
    color:rgb(200, 0, 0);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLink
        href="https://t.me/melq29"
        target="_blank"
        rel="noopener noreferrer"
      >
        Telegram
      </FooterLink>
      |
      <FooterLink
        href="https://www.twitch.tv/melq29"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitch
      </FooterLink>
      |
      <FooterLink
        href="https://github.com/MelQ29"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </FooterLink>
    </FooterContainer>
  );
};

export default Footer;