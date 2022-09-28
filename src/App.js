import { createAndShuffleWs, drawCardWs } from "./services/deck-ws";
import "./App.css";
import { useState, useEffect } from "react";
import CardsAtDesk from "./components/CardsAtDesk";
import SortedCards from "./components/SortedCards";
import Button from '@mui/material/Button';
import Footer from "./components/Footer"
import Box from '@mui/material/Box';

function App() {
  const [deckID, setdeckID] = useState("");
  const [cardData, setcardData] = useState([
    { image: "https://deckofcardsapi.com/static/img/back.png", code: "init" },
  ]);
  const [remainingCards, setremainingCards] = useState(52);
  const [showCards, setshowCards] = useState(false);
  const [shuffle,setShuffle] = useState(true);
  const [SortCards, setSortCards] = useState(false);
  /* // i need a button run that automates everything once you press the run button, 
  it will only stop until it has drawn a QUEEN of every suit
   Once you've drawn all of the QUEENS please display the results of the draw in the following way:
Show all of the cards that were drawn for each suit, and sort the cards by value (Aces are high)
 Example: Hearts: [2, 3, 7, Jack, Queen] */

  const createAndShuffleDeck = () => {
    createAndShuffleWs().then((res) => {
     
      const { data } = res;
      setdeckID(data.deck_id); // zcc8owxe23xq
      setshowCards(true);
    });
  };

  const getOneCard = () => {
    if(shuffle){
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
  }
  };

  useEffect(() => {
    setTimeout(() => {
      if (remainingCards > 0) {
        getOneCard();
      }
    }, "500");//shall be 1000

let queenAmount = cardData.filter(card=>card.value==="QUEEN").length


  if(queenAmount===4){
    setShuffle(false)
    return ()=>{
      console.log("unmount")
      setshowCards(false)
      setSortCards(true)
    }
  }

  }, [remainingCards]);

  return (
    <div className="App">
        <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '90vh',
      }}
    >

    
      <h1>Bienvenido Fair Play</h1>



      <Button variant="contained" onClick={() => createAndShuffleDeck()}>
        create deck and shuffle
      </Button>

      <Button variant="contained" onClick={() => getOneCard()}>get One card from the deck</Button>




      <h6>cards en mesa {remainingCards}</h6>
      {!showCards ? null : <CardsAtDesk cardData={cardData} />}
      {!SortCards ? null : <SortedCards cardData={cardData} />}
</Box>

      <Footer/>
      
    </div>
  );

  
}

export default App;

