"use strict";

import constants from "./constants.js";

const { GAME, FEATURE, BOARD } = constants;

class Game {
  constructor() {
    this.gameCards = [];
    this.responseSets = [];
    this.numbers = [1, 2, 3];
    this.colors = ["RED", "PURPLE", "GREEN"];
    this.shapes = ["SQUIGGLES", "DIAMONDS", "OVALS"];
    this.shades = ["SOLID", "STRIPED", "OUTLINED"];
  }

  createGameCard = () => {
    const card = {};

    card.id = this.getNewValidId();
    card.number = this.getCardNumberById(card.id);
    card.color = this.getCardColorById(card.id);
    card.shape = this.getCardShapeById(card.id);
    card.shading = this.getCardShadingById(card.id);
    card.image = this.getCardImageById(card.id);

    this.gameCards.push(card);

    return card;
  };

  createCardById = (id) => {
    const card = {};

    card.id = id;
    card.number = this.getCardNumberById(id);
    card.color = this.getCardColorById(id);
    card.shape = this.getCardShapeById(id);
    card.shading = this.getCardShadingById(id);
    card.image = this.getCardImageById(id);

    return card;
  };

  getNewValidId = () => {
    let newId;

    do {
      newId = this.getRandomId();
    } while (!this.isValidId(newId));

    return newId;
  };

  getCardNumberById = (id) => {
    let featureIndex = 0;

    for (let i = 1; i <= id; i++) {
      if (i === id) {
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

  getCardColorById = (id) => {
    let featureIndex = 0;

    for (let i = 1; i <= id; i++) {
      if (i === id) {
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

  getCardShapeById = (id) => {
    let featureIndex = 0;

    for (let i = 1; i <= id; i++) {
      if (i === id) {
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

  getCardShadingById = (id) => {
    let featureIndex = 0;

    for (let i = 1; i <= id; i++) {
      if (i === id) {
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

  getCardImageById = (id) => `./assets/${id}.png`;

  getRandomId = () =>
    Math.floor(Math.random() * (GAME.MAX_ID - GAME.MIN_ID)) + GAME.MIN_ID;

  isValidId = (id) => {
    if (this.gameCards.length > 0) {
      const exists = this.findGameCardById(id);

      if (exists) {
        return false;
      }
    }

    return true;
  };

  isMultiple = (value, multiple) => value % multiple === 0;

  isSet = (set) => {
    const features = {
      numbers: [],
      colors: [],
      shapes: [],
      shadings: [],
    };

    set.forEach((card) => {
      features.numbers.push(card["number"]);
      features.colors.push(card["color"]);
      features.shapes.push(card["shape"]);
      features.shadings.push(card["shading"]);
    });

    for (const feat in features) {
      if (!this.quickCheck(features[feat])) {
        return false;
      }
    }

    return true;
  };

  quickCheck = (array) =>
    this.areTheSameOnEachCard(array) || this.areDifferentOnEachCard(array);

  isAlreadySetFound = (set) => {
    let alreadyFound = false;

    this.responseSets.forEach((alreadyFoundSet) => {
      let foundCards = 0;

      alreadyFoundSet.forEach((alreadyFoundCard) => {
        const exists = set.find((card) => card.id === alreadyFoundCard.id);

        if (exists) {
          foundCards++;
        }
      });

      if (foundCards === BOARD.SET) {
        alreadyFound = true;
        return;
      }
    });

    return alreadyFound;
  };

  isWon = () => this.responseSets.length === BOARD.RESPONSES_SET;

  addResponseSet = (set) => {
    this.responseSets.push(set);
  };

  allEqual = (array) => array.every((e, index, array) => e === array[0]);

  allDifferent = (array) =>
    array.every((e, index, array) => {
      if (index > 0) {
        return e !== array[0];
      }

      return true;
    });

  findGameCardById = (id) => this.gameCards.find((card) => card.id === id);

  areTheSameOnEachCard = (array) => array.every((value) => value === array[0]);

  areDifferentOnEachCard = (array) => new Set(array).size === BOARD.SET;
}

export default Game;
