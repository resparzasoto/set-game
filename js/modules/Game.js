"use strict";

import constants from "./constants.js";

const { GAME, FEATURE } = constants;

class Game {
  constructor() {
    this.cards = [];
    this.numbers = [1, 2, 3];
    this.colors = ["RED", "PURPLE", "GREEN"];
    this.shapes = ["SQUIGGLES", "DIAMONDS", "OVALS"];
    this.shades = ["SOLID", "STRIPED", "OUTLINED"];
  }

  createCardGame = () => {
    const card = {};

    card.id = this.getNewCardId();
    card.number = this.getCardNumberByCardId(card.id);
    card.color = this.getCardColorByCardId(card.id);
    card.shape = this.getCardShapeByCardId(card.id);
    card.shading = this.getCardShadingByCardId(card.id);
    card.image = this.getCardImageByCardId(card.id);

    this.cards.push(card);

    return card;
  };

  getNewCardId = () => {
    let newCardId;

    do {
      newCardId = this.getRandomCardId();
    } while (!this.isValidCardId(newCardId));

    return newCardId;
  };

  getCardNumberByCardId = (cardId) => {
    let featureIndex = 0;

    for (let i = 1; i <= cardId; i++) {
      if (i === cardId) {
        break;
      }

      if (this.isMultiple(i, FEATURE.CONDITIONS.NUMBER)) {
        featureIndex = 0;
      } else {
        featureIndex++;
      }
    }

    return this.numbers[featureIndex];
  };

  getCardColorByCardId = (cardId) => {
    let featureIndex = 0;

    for (let i = 1; i <= cardId; i++) {
      if (i === cardId) {
        break;
      }

      if (this.isMultiple(i, FEATURE.CONDITIONS.COLOR)) {
        if (featureIndex === 2) {
          featureIndex = 0;
        } else {
          featureIndex++;
        }
      }
    }

    return this.colors[featureIndex];
  };

  getCardShapeByCardId = (cardId) => {
    let featureIndex = 0;

    for (let i = 1; i <= cardId; i++) {
      if (i === cardId) {
        break;
      }

      if (this.isMultiple(i, FEATURE.CONDITIONS.SHAPE)) {
        if (featureIndex === 2) {
          featureIndex = 0;
        } else {
          featureIndex++;
        }
      }
    }

    return this.shapes[featureIndex];
  };

  getCardShadingByCardId = (cardId) => {
    let featureIndex = 0;

    for (let i = 1; i <= cardId; i++) {
      if (i === cardId) {
        break;
      }

      if (this.isMultiple(i, FEATURE.CONDITIONS.SHADE)) {
        if (featureIndex === 2) {
          featureIndex = 0;
        } else {
          featureIndex++;
        }
      }
    }

    return this.shades[featureIndex];
  };

  getCardImageByCardId = (cardId) => {
    return `../assets/${cardId}.png`;
  };

  getRandomCardId = () =>
    Math.floor(Math.random() * (GAME.MAX_CARD_ID - GAME.MIN_CARD_ID)) +
    GAME.MIN_CARD_ID;

  isValidCardId = (cardId) => {
    if (this.cards.length > 0) {
      const exists = this.findCardGameByCardId(cardId);

      if (exists) {
        return false;
      }
    }

    return true;
  };

  isMultiple = (value, multiple) => value % multiple === 0;

  isSet = (cardsId) => {
    const allFeatures = [];
    const arrayNumbers = [];
    const arrayColors = [];
    const arrayShapes = [];
    const arrayShadings = [];
    const arrayCards = this.findCardsGameByCardId(cardsId);

    arrayCards.forEach((card) => {
      arrayNumbers.push(card["number"]);
      arrayColors.push(card["color"]);
      arrayShapes.push(card["shape"]);
      arrayShadings.push(card["shading"]);
    });

    allFeatures.push(arrayNumbers.every(this.allEqual));
    allFeatures.push(arrayColors.every(this.allEqual));
    allFeatures.push(arrayShapes.every(this.allEqual));
    allFeatures.push(arrayShadings.every(this.allEqual));

    if (
      this.allDifferentFeatures(allFeatures) ||
      this.haveOnlyOneDifferentFeature(allFeatures)
    ) {
      return true;
    }

    return false;
  };

  findCardGameByCardId = (cardId) =>
    this.cards.find((card) => card.id === cardId);

  findCardsGameByCardId = (cardsId) => {
    const arrayCards = [];

    cardsId.forEach((cardId) => {
      arrayCards.push(this.findCardGameByCardId(cardId));
    });

    return arrayCards;
  };

  allEqual = (e, index, array) => e === array[0];

  haveOnlyOneDifferentFeature = (array) =>
    array.filter((value) => value === true).length === 1 ||
    array.filter((value) => value === false).length === 1;

  allDifferentFeatures = (array) => array.every(this.allEqual);
}

export default Game;
