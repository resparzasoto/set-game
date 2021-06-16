"use strict";

const fs = require("fs");
const path = require("path");
const Axios = require("axios").default;

const downloadImages = async () => {
  for (let index = 1; index <= 81; index++) {
    const response = await Axios({
      url: `https://www.setgame.com/sites/all/modules/setgame_set/assets/images/new/${index}.png`,
      method: "GET",
      responseType: "stream",
    });

    response.data.pipe(
      fs
        .createWriteStream(path.resolve(__dirname, "../assets", `${index}.png`))
        .on("finish", () => {
          console.log(`${index}.png downloaded`);
        })
    );
  }
};

downloadImages();
