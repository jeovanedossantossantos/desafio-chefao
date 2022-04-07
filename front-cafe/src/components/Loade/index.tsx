import React from "react";
import { Container } from "./style";
import Lottie from "react-lottie";
import animation from "../Animeite/88540-loader.json";

const Loader: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
  };
  return (
    <Container>
      <div>
        <h1>Carregando...</h1>
        <Lottie options={defaultOptions} height={200} width={200} />
      </div>
    </Container>
  );
};

export default Loader;
