import React from "react";
import styled from "styled-components";

const LinksContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  background-color:rgba(36, 36, 36, 0.89);
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const LinksText = styled.p`
  line-height: 1.6;
  font-size: 16px;
`;

const Links = () => {
  return (
    <LinksContainer>
      <h2>Социальные сети</h2>
      <LinksText>
        ССЫЛОЧКИИИ
      </LinksText>
    </LinksContainer>
  );
};

export default Links;