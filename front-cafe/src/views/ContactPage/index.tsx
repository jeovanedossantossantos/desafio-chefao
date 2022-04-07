import { ContactHeaderBackground } from "./styles";
import { Header } from "../../components/Header";
import { Contact } from "../../components/Contact";
import { Footer } from "../../components/Footer";

export const ContactPage: React.FC = () => {
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
