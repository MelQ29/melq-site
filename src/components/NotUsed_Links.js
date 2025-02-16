import React from "react";
import styled from "styled-components";
import telegramIcon from "../assets/images/icons/telegram.png";
import twitchIcon from "../assets/images/icons/twitch.png";
import githubIcon from "../assets/images/icons/github.png";

const LinksContainer = styled.div`
     margin: 20px 0;
     padding: 20px;
     background-color: rgba(36, 36, 36, 0.89);
     border-radius: 8px;
     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const LinksSocServLink = styled.a`
     margin: 0 10px;
     color: rgb(255, 52, 52);
     font-weight: bold;
     transition: color 0.2s;

     &:hover {
     color: rgb(200, 0, 0);
     }
`;

const LinksText = styled.p`
     line-height: 1.6;
     font-size: 16px;
`;

const Icon = styled.img`
     width: 24px; /* Задайте нужный размер иконок */
     height: 24px;
     vertical-align: middle;
     margin-left: 5px;
`;

const Links = () => {
     return (
     <LinksContainer>
         <h2>Социальные сети</h2>
         <LinksText>
         Для связи можно писать в Telegram:
         <LinksSocServLink
             href="https://t.me/melq29"
             target="_blank"
             rel="noopener noreferrer"
         >
             <Icon src={telegramIcon} alt="Telegram" />
         </LinksSocServLink>
         </LinksText>
         <LinksText>
         Переодически провожу стримы по играм:
         <LinksSocServLink
             href="https://www.twitch.tv/melq29"
             target="_blank"
             rel="noopener noreferrer"
         >
             <Icon src={twitchIcon} alt="Twitch" />
         </LinksSocServLink>
         </LinksText>
         <LinksText>
         Мой GitHub:
         <LinksSocServLink
             href="https://discordapp.com/users/"
             target="_blank"
             rel="noopener noreferrer"
         >
             <Icon src={githubIcon} alt="GitHub" />
         </LinksSocServLink>
         </LinksText>
     </LinksContainer>
     );
};

export default Links;