import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Styles from '../styles'

class HomePage extends React.Component{
  render() {
    return(
      <div style={Styles.bgColor}>
        <Container>
          <Row>
            <Col>
              <h1 style={Styles.listColor}>MTG Collection Gallery</h1>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default HomePage;
