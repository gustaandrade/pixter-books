import React from "react";

import Hero from "../../components/Hero";
import Content from "../../components/Content";
import Footer from "../../components/Footer";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Hero />
      <Content />
      <Footer />
    </Container>
  );
};

export default Home;
