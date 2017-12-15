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
    cardInfo: '',
    returnedCards: [],
    query: ''
  }

  setValue(e) {
  this.setState({[e.target.name]: e.target.value})
}

  getCards(e) {
    e.preventDefault();
    mtg.card.where({ cmc: this.state.cardInfo }).then((result) => {
      let returnedCards = result.map(card =>
        <div style={Styles.arial}>
          <h4>{card.name}</h4>
          <img src={card.imageUrl} />
          <div>
            <Button>Add to Collection</Button>
          </div>
        </div>
      );
      this.setState({returnedCards: returnedCards});
    })
  }

  render() {
    return(
      <div style={Styles.bgColor}>
        <Grid>
          <Row>
            <Cell is="desktop-12" style={Styles.arial}>
              <h1 style={Styles.listColor}>My Card Collection</h1>
            </Cell>
          </Row>
        </Grid>

        <Grid>
          <Row>
            <Cell is="desktop-12" style={Styles.arial} >
              <form onSubmit={(e) => this.getCards(e)}>

                <select onChange="javascript:location.href = this.value;">

                  <option value="cmc"  >Converted Mana Cost</option>
                  <option value="name"  >Name</option>
                  <option value="colors" >Color</option>
                  <option value="type" >Type</option>
                  <option value="subtypes" >Subtypes</option>
                  <option value="power" >Power</option>
                  <option value="toughness" >Toughness</option>
                </select>
                <input
                  name="cardInfo"
                  type="text"
                  placeholder="Converted Mana Cost"
                  value={this.state.cardInfo}
                  onChange={(e) => this.setValue(e)}
                />
                <div>
                  <Button color="primary" type="submit" >Submit</Button>
                </div>
              </form>
            </Cell>
          </Row>
        </Grid>

          <ul>
            {this.state.returnedCards}
          </ul>
      </div>

    )
  }
}

export default CollectionPage;
