import React from "react";
import { FiLoader } from "react-icons/fi";

import { Container } from "./styles";

const Loading: React.FC = () => {
  return (
    <Container>
      <FiLoader size="96" color="#fcdb00" />
    </Container>
  );
};

export default Loading;
