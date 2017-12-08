import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import {Grid, Row, Cell} from 'react-inline-grid';
import Styles from '../styles'
let key = 0
const mtg = require('mtgsdk')

class HomePage extends React.Component{

  state = {
    cardInfo: '',
    returnedCards: [],
    query: '',
    category: ''
  }

  setValue(e) {
  this.setState({[e.target.name]: e.target.value})
  console.log(this.state)
}

  getCards(e) {
    e.preventDefault();
    mtg.card.where({ [e.target.name]: this.state.cardInfo }).then((result) => {
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
              <h1 style={Styles.listColor}>MTG Collection Gallery</h1>
            </Cell>
          </Row>
        </Grid>

        <Grid>
          <Row>
            <Cell is="desktop-12" style={Styles.arial} >
              <form onSubmit={(e) => this.getCards(e)}>

                <select value={this.state.category} onChange={(e)=> this.setValue(e)} name="category">

                  <option value="name" >Name</option>
                  <option value="cmc" >Converted Mana Cost</option>
                  <option value="colors" >Color</option>
                  <option value="type" >Type</option>
                  <option value="subtypes" >Subtypes</option>
                  <option value="power" >Power</option>
                  <option value="toughness" >Toughness</option>
                </select>
                <input
                  name="cardInfo"
                  type="text"
                  placeholder="search..."
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

export default HomePage;

// getCardsCmc(e) {
//   e.preventDefault();
//   mtg.card.where({ cmc: this.state.cardName }).then((result) => {
//     let returnedCards = result.map(card =>
//       <div style={Styles.arial}>
//         <h4>{card.name}</h4>
//         <img src={card.imageUrl} />
//         <div>
//           <Button>Add to Collection</Button>
//         </div>
//       </div>
//     );
//     this.setState({returnedCards: returnedCards});
//   })
// }
//
