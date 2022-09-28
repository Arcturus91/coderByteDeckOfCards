import { createAndShuffleWs, drawCardWs } from "./services/deck-ws";
import "./App.css";
import { useState, useEffect } from "react";
import CardsAtDesk from "./components/CardsAtDesk";
import SortedCards from "./components/SortedCards";
import Button from '@mui/material/Button';
import Footer from "./components/Footer"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function App() {
  const [deckID, setdeckID] = useState("");
  const [cardData, setcardData] = useState([
    { image: "https://deckofcardsapi.com/static/img/back.png", code: "init" },
  ]);
  const [remainingCards, setremainingCards] = useState(52);
  const [showCards, setshowCards] = useState(false);
  const [shuffle,setShuffle] = useState(true);
  const [SortCards, setSortCards] = useState(false);
  const [startGame, setStartGame] = useState(false);


  const createAndShuffleDeck = () => {
    createAndShuffleWs().then((res) => {
     
      const { data } = res;

      setdeckID(data.deck_id); // zcc8owxe23xq
      setshowCards(true);
      setStartGame(true)
      return data
    }).then((data)=>getOneCard (data))
  };

  const getOneCard = (data) => {
    
    if(shuffle){
    drawCardWs(deckID || data.deck_id).then((res) => {
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
    }, "1000");//shall be 1000

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
<Typography variant="h1" color="white">
      Bienvenido Fair Play
      </Typography>


      {startGame ? null :
<Container>
      <Button variant="contained" onClick={() => createAndShuffleDeck()}>
        Comienza el juego <PlayArrowIcon sx={{ height: 38, width: 38 }} />
      </Button>
</Container>}



{!showCards ? null :

<>
<Typography variant="h6" color="white">
Cartas restantes en mesa {remainingCards}
      </Typography>
      </>
}

{!SortCards ? null :

<>
<Typography variant="h6" color="white">
Cartas restantes en mesa {remainingCards}
      </Typography>
      </>
}

      {!showCards ? null : <CardsAtDesk cardData={cardData} />}
      {!SortCards ? null : <SortedCards cardData={cardData} />}
</Box>

      <Footer/>
      
    </div>
  );

  
}

export default App;

