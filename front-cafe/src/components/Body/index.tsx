import React from 'react';
import {Container, Row} from 'react-bootstrap';
import { BodyContent } from './styles'
import Content from '../../assets/images/homeContent.webp';



export const Body: React.FC = () => {
    return (
      
        <div>
            <BodyContent>
            <Row> <img src={Content} alt='' />


            </Row>
            </BodyContent>
  
            </div>

    );

}