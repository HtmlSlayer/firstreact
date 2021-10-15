import React, { Component } from "react";
import "../css/emojiclicker.css";
import "animate.css";
import arrow from "../img/arrow.png";

class Emojiclicker extends Component {
  state = {
    isVisible: true,
    emojiSize: 100,
    score: 0,
    emojis: [
      { emoji: "😭", id: 1, score: 0 },
      { emoji: "😢", id: 2, score: 10 },
      { emoji: "😐", id: 3, score: 20 },
      { emoji: "🙂", id: 4, score: 30 },
      { emoji: "😀", id: 5, score: 40 },
      { emoji: "😂", id: 6, score: 50 },
      { emoji: "🤣", id: 7, score: 60 },
      { emoji: "🤡", id: 8, score: 100}
    ],
  };
  // FIXME: Trop de if ! comment on pourrait le refactorer ?
  emojisView = () => {
    const { emojis, score } = this.state;
    let index = 0;
    if (score >= 10) index = 1;
    if (score >= 20) index = 2;
    if (score >= 30) index = 3;
    if (score >= 40) index = 4;
    if (score >= 50) index = 5;
    if (score >= 60) index = 6;
    if (score >= 100) index = 7;
    return <p>{emojis[index].emoji}</p>;
  };

  handleScore = () => {
    this.setState({
      emojiSize: this.state.emojiSize + 2,
      score: this.state.score + 1,
      isVisible: false,
    });
  };

  //   FIXME: Trop de if ! comment on pourrait le refactorer ?
  handleAnimationStyle = () => {
    const { score } = this.state;
    let classe = "container";
    if (score >= 10) classe = "container animate__animated animate__bounce";
    if (score >= 20) classe = "container animate__animated animate__flash";
    if (score >= 30) classe = "container animate__animated animate__rubberBand";
    if (score >= 40) classe = "container animate__animated animate__headShake";
    if (score >= 50) classe = "container animate__animated animate__swing";
    if (score >= 60) classe = "container animate__animated animate__heartBeat";
    if (score >= 100) classe = "container animate__animated animate__bounce";
    return classe;
  };

  theSecret() {
    //   TODO: Transformer l'emoji en Clown à partir de 100 de score : 🤡 OK
  }

  handleResetScore = () => {
    //  TODO: Ajouter un bouton qui permet de réinitialiser le mini-jeu (réfléchissez aux valeurs qui doivent être remises par defaut)
    
    this.setState({
      emojiSize: 100,
      score: 0,
      emojis: [
        { emoji: "😭", id: 1, score: 0 },
        { emoji: "😢", id: 2, score: 10 },
        { emoji: "😐", id: 3, score: 20 },
        { emoji: "🙂", id: 4, score: 30 },
        { emoji: "😀", id: 5, score: 40 },
        { emoji: "😂", id: 6, score: 50 },
        { emoji: "🤣", id: 7, score: 60 },
        { emoji: "🤡", id: 8, score: 100}
      ],
    })

    
  };

  handleTransformToEmojiAlien = () => {
    // TODO: Ajouter un bouton qui transforme l'émoji actuel en emoji alien : 👽
    let index = 0
    if(this.state.score >= 10)
    index = 1

    const emojis = [...this.state.emojis]
  
    for (let i = 0; i < emojis.length; i++) {
      if( i === index) {
        emojis[i].emoji = "👽"
      }
      
    }
  

  this.setState({emojis})
  }
  handleScoreIntefarce() {
    // TODO: Ajouter un affichage du score dynamique, si le score est à 0, on indique qu'il faut cliquer sur l'emoji 
    //       sinon on affiche le score actuel
    
  }

  render() {
    const { score } = this.state;

    return (
      <>
       

        <div className="container">
          <h1 id="score">Score : {score}</h1>
          <div id="emojiclicker">
            <div
              style={{ fontSize: this.state.emojiSize }}
              onClick={this.handleScore}
              className={this.handleAnimationStyle()}
            >
              {this.emojisView()}
            </div>

          <button onClick={this.handleResetScore}>Reset</button>
          <button onClick={this.handleTransformToEmojiAlien}>Alien</button>
          </div>
        </div>
      </>
    );
  }
}


export default Emojiclicker;
