import { createAndShuffleWs, drawCardWs } from "./services/deck-ws";
import "./App.css";
import { useState, useEffect } from "react";
import CardsAtDesk from "./components/CardsAtDesk";

function App() {
  const [deckID, setdeckID] = useState("");
  const [cardData, setcardData] = useState([
    { image: "https://deckofcardsapi.com/static/img/back.png", code: "init" },
  ]);
  const [remainingCards, setremainingCards] = useState(52);
  const [showCards, setshowCards] = useState(false);
  /* // i need a button run that automates everything once you press the run button, 
  it will only stop until it has drawn a QUEEN of every suit
   Once you've drawn all of the QUEENS please display the results of the draw in the following way:
Show all of the cards that were drawn for each suit, and sort the cards by value (Aces are high)
 Example: Hearts: [2, 3, 7, Jack, Queen] */

  const createAndShuffleDeck = () => {
    createAndShuffleWs().then((res) => {
      console.log("cree un nuevo deck", res);
      const { data } = res;
      setdeckID(data.deck_id); // zcc8owxe23xq
      setshowCards(true);
    });
  };

  const getOneCard = () => {
    drawCardWs(deckID).then((res) => {
      const { data, status, errorMessage } = res;

      if (status) {
        const { cards, deck_id, remaining } = data;
        cardData.push(cards[0]);
        setremainingCards(remaining);
        setcardData(cardData);
        
      } else {
        console.log(errorMessage);
      }
    });

  };

  useEffect(() => {
    setTimeout(() => {
      if (remainingCards > 0) {
        getOneCard();
      }
    }, "1000");
  }, [remainingCards]);

  return (
    <div className="App">
      <h1>Bienvenido Fair Play</h1>

      <button onClick={() => createAndShuffleDeck()}>
        create deck and shuffle
      </button>

      <button onClick={() => getOneCard()}>get One card from the deck</button>
      <h6>cards en mesa {remainingCards}</h6>
      {!showCards ? null : <CardsAtDesk cardData={cardData} />}
    </div>
  );
}

export default App;
