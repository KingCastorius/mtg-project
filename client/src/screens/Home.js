import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Styles from '../styles'
let key = 0

class HomePage extends React.Component{
  state = {
    cardName: '',
    returnedCards: []
  }

  getCards(e) {
    e.preventDefault()
    axios.get('https://api.magicthegathering.io/search/cards?q=' + this.state.cardName.then((res) => {
      let cards = res.data.items.map(item => <li key={key++}>{item.mtg_url}</li>)
      this.setState({returnedCards: cards})
    }))
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
            <input
              name="cardName"
              type="text"
              placeholder="card name"
              value={this.state.cardName}
              onChange={(e) => this.setState({[e.target.name]: e.target.value})} />
            <button type="submit">Submit</button>
          </form>

          <ul>
            {this.state.returnedCards}
          </ul>
      </div>

    )
  }
}

export default HomePage;
