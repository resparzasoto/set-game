"use strict";

import { Game, constants } from "./modules/index.js";

const { BOARD } = constants;

// TODO: crear una nueva clase de board

const game = new Game();

const createGameBoard = () => {
  const $boardGame = document.getElementById("board-game");

  for (let rowIndex = 1; rowIndex <= BOARD.ROWS; rowIndex++) {
    const $rowNode = document.createElement("div");
    $rowNode.className = "row";

    for (let colIndex = 1; colIndex <= BOARD.COLUMNS; colIndex++) {
      const $colNode = document.createElement("div");
      $colNode.className = "col text-center";

      $colNode.addEventListener("click", cardClicked);

      const $imgNode = document.createElement("img");

      const newCard = game.createCardGame();

      $imgNode.id = newCard.id;
      $imgNode.src = newCard.image;
      $imgNode.alt = `${newCard.id}.png`;
      $imgNode.className = "img-fluid";

      $boardGame.appendChild($rowNode);
      $rowNode.appendChild($colNode);
      $colNode.appendChild($imgNode);
    }
  }

  // // true sets
  // game.cards = [
  //   // CASE 1
  //   {
  //     id: 74,
  //     number: 2,
  //     color: "RED",
  //     shape: "ROUNDED",
  //     shading: "OUTLINE",
  //   },
  //   {
  //     id: 47,
  //     number: 2,
  //     color: "RED",
  //     shape: "ROUNDED",
  //     shading: "SHAPED",
  //   },
  //   {
  //     id: 20,
  //     number: 2,
  //     color: "RED",
  //     shape: "ROUNDED",
  //     shading: "SOLID",
  //   },
  //   // CASE 2
  //   {
  //     id: 34,
  //     number: 1,
  //     color: "GREEN",
  //     shape: "SQUEEZES",
  //     shading: "SHAPED",
  //   },
  //   {
  //     id: 50,
  //     number: 2,
  //     color: "PURPLE",
  //     shape: "ROUNDED",
  //     shading: "SHAPED",
  //   },
  //   {
  //     id: 39,
  //     number: 3,
  //     color: "RED",
  //     shape: "DIAMOND",
  //     shading: "SHAPED",
  //   },
  //   // CASE 3
  //   {
  //     id: 49,
  //     number: 1,
  //     color: "PURPLE",
  //     shape: "ROUNDED",
  //     shading: "SHAPED",
  //   },
  //   {
  //     id: 17,
  //     number: 2,
  //     color: "GREEN",
  //     shape: "DIAMOND",
  //     shading: "SOLID",
  //   },
  //   {
  //     id: 57,
  //     number: 3,
  //     color: "RED",
  //     shape: "SQUEEZES",
  //     shading: "OUTLINE",
  //   },
  // ];

  // game.isSet([game.cards[0].id, game.cards[1].id, game.cards[2].id]);
  // game.isSet([game.cards[3].id, game.cards[4].id, game.cards[5].id]);
  // game.isSet([game.cards[6].id, game.cards[7].id, game.cards[8].id]);

  // game.cards = [
  //   // CASE 1
  //   {
  //     id: 16,
  //     number: 1,
  //     color: "GREEN",
  //     shape: "DIAMOND",
  //     shading: "SOLID",
  //   },
  //   {
  //     id: 67,
  //     number: 1,
  //     color: "PURPLE",
  //     shape: "DIAMOND",
  //     shading: "OUTLINE",
  //   },
  //   {
  //     id: 64,
  //     number: 1,
  //     color: "RED",
  //     shape: "DIAMOND",
  //     shading: "OUTLINE",
  //   },
  //   // CASE 2
  //   {
  //     id: 2,
  //     number: 2,
  //     color: "RED",
  //     shape: "SQUEEZES",
  //     shading: "SOLID",
  //   },
  //   {
  //     id: 29,
  //     number: 2,
  //     color: "RED",
  //     shape: "SQUEEZES",
  //     shading: "SHAPED",
  //   },
  //   {
  //     id: 62,
  //     number: 2,
  //     color: "GREEN",
  //     shape: "SQUEEZES",
  //     shading: "OUTLINE",
  //   },
  // ];

  // game.isSet([game.cards[0].id, game.cards[1].id, game.cards[2].id]);
  // game.isSet([game.cards[3].id, game.cards[4].id, game.cards[5].id]);
};

const cardClicked = (e) => {
  console.log(e.target.id);
};

createGameBoard();
