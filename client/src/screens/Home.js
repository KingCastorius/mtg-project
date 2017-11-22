import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Styles from '../styles'
let key = 0
const mtg = require('mtgsdk')

class HomePage extends React.Component{

  state = {
    cardName: '',
    returnedCards: []
  }

  setValue(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  getCards() {
    mtg.card.all({ name: {e}, pageSize: 1 }).on('data', card => {
      
    })
  }

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
          <form onSubmit={(e) => this.getCards(e)}>
            <Row>
              <input
                name="cardName"
                type="text"
                placeholder="card name"
                value={this.state.cardName}
                onChange={(e) => this.setValue(e)}
              />
              <select>
                <option value="name">Name</option>
                <option value="cmc">Converted Mana Cost</option>
                <option value="colors">Color</option>
                <option value="type">Type</option>
                <option value="subtypes">Subtypes</option>
                <option value="power">Power</option>
                <option value="toughness">Toughness</option>
              </select>
            </Row>
            <Row>
              <button type="submit" >Submit</button>
            </Row>
          </form>

          <ul>
            {this.state.returnedCards}
          </ul>
      </div>

    )
  }
}

export default HomePage;
