import {Header} from '../../components/Header';
import {SearchHeaderBackground, BackgroundColorFill} from './styles';
import {SearchBar} from '../../components/SearchBar';
import {SearchCard} from '../../components/SearchCard';
import { Footer } from '../../components/Footer';


export const SearchPage: React.FC = () => {
    return (     <div>
       <BackgroundColorFill>
        <SearchHeaderBackground>
        <Header/>
        <SearchBar/>
        <SearchCard/>
        <Footer/>
        </SearchHeaderBackground>
        </BackgroundColorFill>

    </div>
    )
}