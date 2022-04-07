import { Header } from "../../components/Header";
import {
  HomeHeaderBackground,
  BannerText,
  BannerTitle,
  BannerIcon,
  BannerDesc,
  BannerIconSpace,
  ButtonBottomMargin,
} from "./style";
import { Container, Row, Col, Nav } from "react-bootstrap";
import BannerLine from "../../assets/images/Rectangle5iconBanner.svg";
import BannerIconImage from "../../assets/images/VectoriconBanner.svg";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { About } from "../../components/About";
import { Slider } from "../../components/Slider";

export const Home: React.FC = () => {
  return (
    <div>
      <HomeHeaderBackground>
        <Header />
        <BannerText>
          <Container fluid>
            <Row>
              <Col>
                <BannerTitle>coffee experience</BannerTitle>
              </Col>
            </Row>
            <Row>
              <Col>
                <BannerIcon>
                  <img src={BannerLine} alt="" width={"40px"} />
                  <BannerIconSpace />
                  <img src={BannerIconImage} alt="" width={"18vw"} />
                  <BannerIconSpace />
                  <img src={BannerLine} alt="" width={"40px"} />
                </BannerIcon>
              </Col>
            </Row>
            <Row>
              <Col>
                <BannerDesc>
                  Nós produzimos cafés para coffee lovers que amam café em todos
                  os sentidos, do olfato ao tato
                </BannerDesc>
              </Col>
            </Row>
            <Row>
              <Col>
                <Nav.Link href="/searchpage">
                  <Button />
                  <ButtonBottomMargin />
                </Nav.Link>
              </Col>
            </Row>
          </Container>
        </BannerText>
      </HomeHeaderBackground>
      <About />
      <Slider />
      <Footer />
    </div>
  );
};
