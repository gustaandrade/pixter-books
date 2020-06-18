import React from "react";

import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Content from "../../components/Content";
import Footer from "../../components/Footer";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <Content />
      <Footer />
    </Container>
  );
};

export default Home;
