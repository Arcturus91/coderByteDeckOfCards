

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress'

const CardsAtDesk = ({ cardData }) => {
  
 
  let heartsSuit = cardData.filter((card) => card.suit === "HEARTS");
  let spadesSuit = cardData.filter((card) => card.suit === "SPADES");
  let clubsSuit = cardData.filter((card) => card.suit === "CLUBS");
  let diamondsSuit = cardData.filter((card) => card.suit === "DIAMONDS");

  let queenAmount = cardData.filter(card=>card.value==="QUEEN").length
 
  

  return (
    <div>

<>
<Typography variant="h6" color="white">
Reinas encontradas: {queenAmount}. <span style={{color:"red"}}>Estado: Juego en curso.</span> <CircularProgress />
      </Typography>
      </>



<div style={{ display: "flex", justifyContent: "space-evenly" }}>
    <ImageList sx={{ width: 226, height: 1000 }} cols={1} rowHeight={164} >

{heartsSuit.map((card) => (
  <ImageListItem key={card.code}>
    <img
      src={`${card.image}?w=164&h=164&fit=crop&auto=format`}
      srcSet={`${card.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
      alt={card.code}
      loading="lazy"
    />
  </ImageListItem>
))}
</ImageList>

<ImageList sx={{ width: 226, height: 1000 }} cols={1} rowHeight={164} >

{spadesSuit.map((card) => (
  <ImageListItem key={card.code}>
    <img
      src={`${card.image}?w=164&h=164&fit=crop&auto=format`}
      srcSet={`${card.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
      alt={card.code}
      loading="lazy"
    />
  </ImageListItem>
))}
</ImageList>

<ImageList sx={{ width: 226, height: 1000 }} cols={1} rowHeight={164} >

{clubsSuit.map((card) => (
  <ImageListItem key={card.code}>
    <img
      src={`${card.image}?w=164&h=164&fit=crop&auto=format`}
      srcSet={`${card.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
      alt={card.code}
      loading="lazy"
    />
  </ImageListItem>
))}
</ImageList>

<ImageList sx={{ width: 226, height: 1000 }} cols={1} rowHeight={164} >

{diamondsSuit.map((card) => (
  <ImageListItem key={card.code}>
    <img
      src={`${card.image}?w=164&h=164&fit=crop&auto=format`}
      srcSet={`${card.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
      alt={card.code}
      loading="lazy"
    />
  </ImageListItem>
))}
</ImageList>
</div>
</div>
    
  );
};

export default CardsAtDesk;






{/* <div style={{ display: "flex", justifyContent: "space-evenly" }}>
</div> */}