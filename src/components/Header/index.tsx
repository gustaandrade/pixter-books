import React from "react";
import { Link } from "react-router-dom";

import { Container, LogoArea, TabsArea, Logo, Tab } from "./styles";

import LogoImg from "../../assets/logo.png";

const Header: React.FC = () => {
  return (
    <Container>
      <LogoArea>
        <Logo src={LogoImg} alt="pixter" />
      </LogoArea>

      <TabsArea>
        <Link to="/books">
          <Tab>Books</Tab>
        </Link>
        <Link to="/">
          <Tab>Newsletter</Tab>
        </Link>
        <Link to="/detail">
          <Tab>Address</Tab>
        </Link>
      </TabsArea>
    </Container>
  );
};

export default Header;
