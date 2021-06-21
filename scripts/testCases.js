"use strict";

import Game from "../js/modules/Game.js";

const game = new Game();

// true sets
game.cards = [
  // CASE 1
  {
    id: 74,
    number: 2,
    color: "RED",
    shape: "ROUNDED",
    shading: "OUTLINE",
  },
  {
    id: 47,
    number: 2,
    color: "RED",
    shape: "ROUNDED",
    shading: "SHAPED",
  },
  {
    id: 20,
    number: 2,
    color: "RED",
    shape: "ROUNDED",
    shading: "SOLID",
  },
  // CASE 2
  {
    id: 34,
    number: 1,
    color: "GREEN",
    shape: "SQUEEZES",
    shading: "SHAPED",
  },
  {
    id: 50,
    number: 2,
    color: "PURPLE",
    shape: "ROUNDED",
    shading: "SHAPED",
  },
  {
    id: 39,
    number: 3,
    color: "RED",
    shape: "DIAMOND",
    shading: "SHAPED",
  },
  // CASE 3
  {
    id: 49,
    number: 1,
    color: "PURPLE",
    shape: "ROUNDED",
    shading: "SHAPED",
  },
  {
    id: 17,
    number: 2,
    color: "GREEN",
    shape: "DIAMOND",
    shading: "SOLID",
  },
  {
    id: 57,
    number: 3,
    color: "RED",
    shape: "SQUEEZES",
    shading: "OUTLINE",
  },
];

console.log(
  "case1 is set",
  game.isSet([game.cards[0], game.cards[1], game.cards[2]])
);
console.log(
  "case2 is set",
  game.isSet([game.cards[3], game.cards[4], game.cards[5]])
);
console.log(
  "case3 is set",
  game.isSet([game.cards[6], game.cards[7], game.cards[8]])
);

game.cards = [
  // CASE 1
  {
    id: 16,
    number: 1,
    color: "GREEN",
    shape: "DIAMOND",
    shading: "SOLID",
  },
  {
    id: 67,
    number: 1,
    color: "PURPLE",
    shape: "DIAMOND",
    shading: "OUTLINE",
  },
  {
    id: 64,
    number: 1,
    color: "RED",
    shape: "DIAMOND",
    shading: "OUTLINE",
  },
  // CASE 2
  {
    id: 2,
    number: 2,
    color: "RED",
    shape: "SQUEEZES",
    shading: "SOLID",
  },
  {
    id: 29,
    number: 2,
    color: "RED",
    shape: "SQUEEZES",
    shading: "SHAPED",
  },
  {
    id: 62,
    number: 2,
    color: "GREEN",
    shape: "SQUEEZES",
    shading: "OUTLINE",
  },
];

console.log(
  "case1 not set",
  game.isSet([game.cards[0], game.cards[1], game.cards[2]])
);
console.log(
  "case2 not set",
  game.isSet([game.cards[3], game.cards[4], game.cards[5]])
);
