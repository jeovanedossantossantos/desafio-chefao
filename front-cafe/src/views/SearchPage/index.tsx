import {Header} from '../../components/Header';
import {SearchHeaderBackground} from './styles';
import {SearchBar} from '../../components/SearchBar';
import {SearchCard} from '../../components/SearchCard';

export const SearchPage: React.FC = () => {
    return ( <div>
        <SearchHeaderBackground>
        <Header/>
        <SearchBar/>
        <SearchCard/>
        </SearchHeaderBackground>
    </div>
    )
}