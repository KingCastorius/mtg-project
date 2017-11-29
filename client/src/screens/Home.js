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
    cardName: '',
    returnedCards: []
  }

  setValue(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  getCards(e) {
    e.preventDefault();
    mtg.card.where({ name: this.state.cardName }).then((result) => {
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
                <input
                  name="cardName"
                  type="text"
                  placeholder="card name"
                  value={this.state.cardName}
                  onChange={(e) => this.setValue(e)}
                />
                <select>
                  <option value="name" onChange="">Name</option>
                  <option value="cmc" onChange="">Converted Mana Cost</option>
                  <option value="colors" onChange="">Color</option>
                  <option value="type" onChange="">Type</option>
                  <option value="subtypes" onChange="">Subtypes</option>
                  <option value="power" onChange="">Power</option>
                  <option value="toughness" onChange="">Toughness</option>
                </select>
                {/* asdfasasfafaadd */}
                <div>
                  <button type="submit" >Submit</button>
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
// getCards(e) {
//   e.preventDefault();
//   mtg.card.where({ Colors: this.state.cardName }).then((result) => {
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
