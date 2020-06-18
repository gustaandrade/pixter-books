import React from "react";

import { Container, LogoArea, TabsArea, Logo, Tab } from "./styles";

import LogoImg from "../../assets/logo.png";

const Header: React.FC = () => {
  return (
    <Container>
      <LogoArea>
        <Logo src={LogoImg} alt="pixter" />
      </LogoArea>

      <TabsArea>
        <Tab>Books</Tab>
        <Tab>Newsletter</Tab>
        <Tab>Address</Tab>
      </TabsArea>
    </Container>
  );
};

export default Header;
