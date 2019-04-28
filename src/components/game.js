import React, { Component } from "react";

const cards = {
  CAT: 0,
  DEFUSE: 1,
  SHUFFLE: 2,
  EXPLODE: 3,
  START: 4,
  LOST: 5,
  WON: 6
};

export default class game extends Component {
  constructor() {
    super();
    this.state = {
      names: {
        0: "Cat Card",
        1: "Defuse card",
        2: "Shuffle card",
        3: "Exploding kitten card",
        4: "Start",
        5: "You Lost",
        6: "You Won"
      },
      order: [cards.START],
      defuse: 0,
      len: 5
    };

    this.shuffle = this.shuffle.bind(this);
    this.onClick = this.onClick.bind(this);
    this.shuffle();
  }

  onClick(e) {
    let card = this.state.order[0];
    if (card === cards.START || card === cards.SHUFFLE) {
      // create a new ordering of cards
      this.shuffle();
    } else if (card === cards.CAT) {
      // shift one card
      let temporder = [...this.state.order];
      temporder.shift();
      this.setState({ order: temporder });
    } else if (card === cards.DEFUSE) {
      // get one defuse card, and shift cards
      this.setState({ defuse: this.state.defuse + 1 });
      let temporder = [...this.state.order];
      temporder.shift();
      this.setState({ order: temporder });
    } else if (card === cards.EXPLODE) {
      // check whether any defuse card is left
      if (!this.state.defuse) {
        // no defuse card left; game lost
        this.setState({ order: [cards.LOST] });
      } else {
        // shift one card
        let temporder = [...this.state.order];
        temporder.shift();
        this.setState({ order: temporder });
        // one defuse card used up
        this.setState({ defuse: this.state.defuse - 1 });
      }
    } else {
      // game has ended
      this.shuffle();
    }
  }

  shuffle() {
    // create a temporary array of "len" size
    let temporder = [];
    for (let i = 0; i < this.state.len; i++) {
      // find a random card and push it into the array
      let idx = Math.floor(Math.random() * 4);
      temporder.push(idx);
    }
    this.setState({ order: temporder });
    this.setState({ defuse: 0 });
  }

  render() {
    // if no cards are left, you won the game
    // otherwise check the first card and show it
    return (
      <div className="container">
        <div>
          <button className="btn btn-primary" onClick={this.onClick}>
            {this.state.order.length === 0
              ? "You Won!"
              : this.state.names[this.state.order[0]]}
          </button>
          <div />
        </div>
      </div>
    );
  }
}
