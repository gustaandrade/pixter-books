import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import { Container, LogoArea, TabsArea, Logo, Tab } from "./styles";

import LogoImg from "../../assets/logo.png";

const Header: React.FC = () => {
  return (
    <Container>
      <LogoArea>
        <Logo src={LogoImg} alt="pixter" />
      </LogoArea>

      <TabsArea>
        <Link to="#content">
          <Tab>Books</Tab>
        </Link>
        <Link to="#footer">
          <Tab>Newsletter</Tab>
        </Link>
        <Link to="#footer">
          <Tab>Address</Tab>
        </Link>
      </TabsArea>
    </Container>
  );
};

export default Header;
