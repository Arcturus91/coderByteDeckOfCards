import { createAndShuffleWs, drawCardWs } from "./services/deck-ws";
import "./App.css";
import { useState } from "react";

function App() {
  const [deckID, setdeckID] = useState("");

  const [imgUrl, setimgUrl] = useState("");
  const [cardData, setcardData] = useState();
  const [showCards, setshowCards] = useState(false);

  //i need a button run that automates everything
  //once you press the run button, it will only stop until it has drawn a QUEEN of every suit

  /* Once you've drawn all of the QUEENS please display the results of the draw in the following way:

Show all of the cards that were drawn for each suit, and sort the cards by value (Aces are high)
 Example: Hearts: [2, 3, 7, Jack, Queen] */

  const createAndShuffleDeck = () => {
    createAndShuffleWs().then((res) => {
      console.log("cree un nuevo deck", res);
      const { data } = res;
      setdeckID(data.deck_id); // zcc8owxe23xq
    });
  };

  const getOneCard = () => {
    drawCardWs(deckID).then((res) => {
      const { cards, deck_id, remaining } = res.data;
      console.log("yo soy cards del API", cards); //cards es un array
      setcardData((prevValue) => {
        if (!prevValue) {
          return cards;
        } else {
          prevValue.push(cards[0]); //remember array.push returns the length of the array.
          return prevValue;
        }
      });

      console.log("yo soy las cartas en mesa", cardData);
      setshowCards(true);
    });
  };

  return (
    <div className="App">
      <h1>hello world</h1>

      <button onClick={createAndShuffleDeck}>create deck and shuffle</button>

      <button onClick={getOneCard}>get One card from the deck</button>

      {!showCards
        ? null
        : cardData.map((card) => {
            return (
              <div key={card.code}>
                <img src={card.image} alt={card.code} />
              </div>
            );
          })}
    </div>
  );
}

export default App;
