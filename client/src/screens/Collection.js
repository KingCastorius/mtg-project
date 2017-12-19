import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import {Grid, Row, Cell} from 'react-inline-grid';
import Styles from '../styles'
let key = 0
const mtg = require('mtgsdk')

class CollectionPage extends React.Component{

  state = {
    payload: null,
    myCards: []
  }
  

  deleteCard(e) {
    const authToken = localStorage.getItem('token');
    const payload = (authToken) ? JSON.parse(window.atob(authToken.split('.')[1])) : null;
    axios.delete('/cards/${payload.id}').then((res) => {
      console.log(this.state.myCards)
    })
  }

  componentDidMount() {
    const authToken = localStorage.getItem('token');
    const payload = (authToken) ? JSON.parse(window.atob(authToken.split('.')[1])) : null;
    axios.get(`/cards/${payload.id}`).then((res) => {
      let myCards = res.data.map(card =>
        <div key={key++} style={Styles.arial}>
          <h4>{card.name}</h4>
          <img src={card.imageUrl} />
          <div>
            <Button onClick={(e) => this.deleteCard(e)}>Remove from Collection</Button>
          </div>
        </div>
      );
      this.setState({myCards: myCards});
    })
  }

  render() {
    return(
      <span>
        <ul>
          {this.state.myCards}
        </ul>
      </span>
    )
  }
}

export default CollectionPage;
