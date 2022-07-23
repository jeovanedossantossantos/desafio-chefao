import { Header } from "../../components/Header";
import { SearchHeaderBackground, BackgroundColorFill } from "./styles";
import { SearchBar } from "../../components/SearchBar";
import { SearchCard } from "../../components/SearchCard";
import { Footer } from "../../components/Footer";
import GlobalCSSFixSearchPage from "../../assets/styles/GlobalBackGroundFIx";

export const SearchPage: React.FC = () => {
  return (
    <div>
      <GlobalCSSFixSearchPage />
      <BackgroundColorFill>
        <SearchHeaderBackground>

          <Header />
          
          <SearchBar />
          <SearchCard />
          <Footer />
        </SearchHeaderBackground>
      </BackgroundColorFill>
    </div>
  );
};
