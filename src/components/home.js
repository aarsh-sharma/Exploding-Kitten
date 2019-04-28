import { Link } from 'react-router-dom';

import React, { Component } from 'react'

export default class home extends Component {
  render() {
    return (
      <div className="container">
        <div><h1>Welcome to the Exploding Kittens Game</h1></div>
        <br/><br/><br/>
        <div align="left">
          This will be an online single player card game which consists of 4 different type of cards – 

          <ul>
            <li>Cat card</li>
            <li>Defuse card</li>
            <li>Shuffle card</li>
            <li>Exploding kitten card</li>
          </ul>

          There will be a button to start the game. When the game is started there will be a deck of 5 cards. Each time user clicks on the deck a card is revealed and that card is removed from the deck. Player wins the game once he draws all the 5 cards from the deck and there is no card left to draw. <br/>

          Rules – 
          <ul>
            <li>If the card drawn from deck is a cat card then the card is removed from deck. </li>
            <li>If the card is exploding kitten (bomb) then the player loses the game. </li>
            <li>If the card is defuse card then the card is removed from the deck. Also that card can be used to defuse one bomb that may come in subsequent cards drawn from deck. </li>
            <li>If the card is shuffle card then the game is restarted and the deck is filled with 5 cards again. </li>

          </ul>
        </div>
        <br/>
        <Link to="/game" className="btn btn-lg btn-info mr-2">
          Start Game
        </Link>
      </div>
    )
  }
}
