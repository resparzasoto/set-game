"use strict";

import { Game, constants } from "./modules/index.js";

const { BOARD } = constants;

let set = [];
let game = new Game();

const createGameBoard = () => {
  const $boardGame = document.getElementById("board-game");

  for (let rowIndex = 1; rowIndex <= BOARD.ROWS; rowIndex++) {
    const $rowNode = document.createElement("div");
    $rowNode.className = "row";

    for (let colIndex = 1; colIndex <= BOARD.COLUMNS; colIndex++) {
      const $colNode = document.createElement("div");
      $colNode.className = "col text-center board-game-card";

      $colNode.addEventListener("click", cardClicked);

      const $imgNode = document.createElement("img");

      const newCard = game.createGameCard();

      $imgNode.id = newCard.id;
      $imgNode.src = newCard.image;
      $imgNode.alt = `${newCard.id}.png`;
      $imgNode.className = "img-fluid";

      $boardGame.appendChild($rowNode);
      $rowNode.appendChild($colNode);
      $colNode.appendChild($imgNode);
    }
  }
};

const cardClicked = async (e) => {
  const id = Number(e.target.id);

  if (!isCardSelected(id)) {
    const card = game.findGameCardById(id);
    set.push(card);
  }

  if (set.length == BOARD.SET) {
    if (game.isSet(set)) {
      if (game.isAlreadySetFound(set)) {
        await Swal.fire("SETGAME", "ALREADY FOUND SET", "info");
      } else {
        await Swal.fire("SETGAME", "SET FOUND", "success");

        game.addResponseSet(set);
        addSetToResponseBoard(set);

        if (game.isWon()) {
          await Swal.fire("SETGAME", "WON!", "success");
        }
      }
    } else {
      await Swal.fire("SETGAME", "NOT A SET", "error");
    }

    set = [];
  }
};

const isCardSelected = (targetId) => {
  if (set.length > 0) {
    return set.find((card) => card.id === targetId);
  }

  return false;
};

const addSetToResponseBoard = () => {
  const $boardResponse = document.getElementById("board-response");

  const $rowNode = document.createElement("div");
  $rowNode.className = "row";

  for (let i = 0; i < set.length; i++) {
    const $colNode = document.createElement("div");
    $colNode.className = "col text-center board-game-card";

    $colNode.addEventListener("click", cardClicked);

    const $imgNode = document.createElement("img");

    const card = set[i];

    $imgNode.id = card.id;
    $imgNode.src = card.image;
    $imgNode.alt = `${card.id}.png`;
    $imgNode.className = "img-fluid";

    $boardResponse.appendChild($rowNode);
    $rowNode.appendChild($colNode);
    $colNode.appendChild($imgNode);
  }
};

createGameBoard();
