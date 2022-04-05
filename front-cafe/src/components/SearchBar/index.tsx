import { Container, Row, Col, Card } from 'react-bootstrap';
import { SearchBarTitleStyle, SearchBarContainer, SearchBarInput, Form } from './styles';
import SearchIcon from '../../assets/images/SearchIcon.svg'
import { DataProps } from '../../Interfaces/DataProps';
import { api } from '../../serve';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  SearchBarTitle?: string;
  SearchBarPlaceholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ SearchBarTitle, SearchBarPlaceholder }) => {
  const [data, setData] = useState<DataProps[]>([])
  const [palavra, setPalavra] = useState("")
  const push = useNavigate()
  const carregar = async () => {
    try {
      const resposta = await api.get("/cafes")

      setData(resposta.data)
      console.log("=============================")
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }
  const pesquisar = async () => {
    try {
      const resposta = await api.get("/search-cafe?valorDaPesquisa="+palavra)

      setData(resposta.data)
      console.log("Pesquisa")
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    carregar()
  }, [])
  return (
    <div>
      <SearchBarContainer >
        <Container fluid >
          <Row xs="auto" style={{ width:"100%", maxWidth: 800, margin:"auto"}}>
            <Col>
              <SearchBarTitleStyle>Nossos cafés</SearchBarTitleStyle></Col>
          </Row>
          <Row style={{ width:"100%", maxWidth: 800, margin:"auto"}}>
            <Col>
              <Form>

                <SearchBarInput onChange={(e: React.FormEvent<HTMLInputElement>) =>{setPalavra(e.currentTarget.value)}} placeholder='Busque o seu café' />
                <img style={{cursor:"pointer"}} onClick={()=>pesquisar()} src={SearchIcon} alt='' />
              </Form>


            </Col>
          </Row>
          

        </Container>

        <Container style={{ marginTop: 20, display: 'flex', flexWrap:"wrap" }}>
        {
            data.map(e => {
              return (
                <Card  onClick={()=>push("/productpage/"+e.id)} style={{ width: '18rem', margin:"auto", marginTop:20, cursor: 'pointer' }}>
                  <div style={{height:300,}}>
                    <Card.Img variant="top" src={e.foto_cafe} style={{maxHeight:300,margin:"auto",justifyContent: 'center',alignItems:"center",}} />
                  </div>
                  <Card.Body>
                    <Card.Title className="texto">{e.nome}</Card.Title>
                  </Card.Body>
                </Card>
              )
            })
          }
        </Container>
      </SearchBarContainer>



    </div>
  )
}
