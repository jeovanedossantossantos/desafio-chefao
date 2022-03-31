import { Container, Row, Col } from 'react-bootstrap';
import {SearchBarTitleStyle, SearchBarContainer, SearchBarInput, Form } from './styles';
import SearchIcon from '../../assets/images/SearchIcon.svg'


interface SearchBarProps {
    SearchBarTitle?: string;
    SearchBarPlaceholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({SearchBarTitle, SearchBarPlaceholder}) => {
  
  return ( <div>
      <SearchBarContainer>
      <Container fluid >
  <Row xs="auto">
    <Col>
<SearchBarTitleStyle>Nossos cafés</SearchBarTitleStyle></Col>
  </Row>
  <Row>
    <Col>
    <Form>

    <SearchBarInput placeholder='Busque o seu café'/>
    <img src={SearchIcon} alt=''/>
    </Form>


    </Col>
  </Row> 
  </Container>
  </SearchBarContainer>



    </div>
    )
}
