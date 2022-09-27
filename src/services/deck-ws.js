import { api } from "./api";
import { successStatus, internalServerError } from "../utils/format-response";

//SHUFFLE
//https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1

//DRAW A CARD
//https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2

//first i need to create the deck. From here i get deck id
export const createAndShuffleWs = () =>
  api
    .get("/new/shuffle/?deck_count=1")
    .then(successStatus)
    .catch(internalServerError);

export const drawCardWs = (deckID) =>
  api
    .get(`/${deckID}/draw/?count=1`)
    .then(successStatus)
    .catch(internalServerError);

//ncl5n38ipkyw, id created
//request: https://deckofcardsapi.com/api/deck/ncl5n38ipkyw/draw/?count=1

//response: (nota como te bota imágenes)
/* {"success": true, "deck_id": "ncl5n38ipkyw", 
"cards": [{"code": "4D", "image": "https://deckofcardsapi.com/static/img/4D.png", 
"images": {"svg": "https://deckofcardsapi.com/static/img/4D.svg", 
"png": "https://deckofcardsapi.com/static/img/4D.png"}, 
"value": "4", "suit": "DIAMONDS"}], "remaining": 51} */
