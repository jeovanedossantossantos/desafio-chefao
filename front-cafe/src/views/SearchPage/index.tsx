import {Header} from '../../components/Header';
import {SearchHeaderBackground} from './styles';
import {SearchBar} from '../../components/SearchBar';
import {SearchCard} from '../../components/SearchCard';
import { Footer } from '../../components/Footer';

export const SearchPage: React.FC = () => {
    return ( <div>
       
        <SearchHeaderBackground>
        <Header/>
        <SearchBar/>
        <SearchCard/>
        <Footer></Footer>
        </SearchHeaderBackground>
    </div>
    )
}