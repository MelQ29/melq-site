import React from "react";
import styled from "styled-components";
import telegramIcon from "../assets/images/icons/telegram.png";
import twitchIcon from "../assets/images/icons/twitch.png";
import githubIcon from "../assets/images/icons/github.png";
import DiscordIcon from "../assets/images/icons/discord.png";

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

const Icon = styled.img`
     width: 24px;
     height: 24px;
     vertical-align: middle;
     margin-left: 5px;
     margin: 0 5px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLink
        href="https://t.me/melq29"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon src={telegramIcon} alt="Telegram" />
        Telegram
      </FooterLink>
      |
      <FooterLink
        href="https://www.twitch.tv/melq29"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon src={twitchIcon} alt="Twitch" />
        Twitch
      </FooterLink>
      |
      <FooterLink
        href="https://github.com/MelQ29"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon src={githubIcon} alt="GitHub" />
        GitHub
      </FooterLink>
      |
      <FooterLink
        href="https://discordapp.com/users/MelQ29"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon src={DiscordIcon} alt="Discord" />
        Discord
      </FooterLink>
    </FooterContainer>
  );
};

export default Footer;