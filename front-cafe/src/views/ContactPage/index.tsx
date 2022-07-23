import { ContactHeaderBackground } from "./styles";
import { Header } from "../../components/Header";
import { Contact } from "../../components/Contact";
import { Footer } from "../../components/Footer";
import { AuthorizationContext } from "../../hooks/context";
import { useContext, useEffect } from "react";

export const ContactPage: React.FC = () => {
  const { setPaginaAtual } = useContext(AuthorizationContext)
  useEffect(() => {
    setPaginaAtual("/contact")
  },[])
  return (
    <div>
      <ContactHeaderBackground>
        <Header />
        <Contact></Contact>
      </ContactHeaderBackground>
      <Footer />
    </div>
  );
};
