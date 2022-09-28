

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CheckIcon from '@mui/icons-material/Check';
import Typography from '@mui/material/Typography';

const SortedCards = ({ cardData }) => {


  console.log("entre",cardData)

  cardData.forEach(element => {
   /*  if(element.value !== "ACE" || element.value !== "QUEEN" || element.value !== "KING" || element.value !== "JACK"){
    element.value = Number(element.value)} */

    switch (element.value) {
      case "ACE":
        element.value = 14;
        break;

        case "JACK":
          element.value =11
          break;

          case "QUEEN":
            element.value = 12
            break;

            case "KING":
              element.value =13;
              break;
    
      default:
        break;
    }
  });
 
  let heartsSuit = cardData.filter((card) => card.suit === "HEARTS").sort((a,b)=>b.value - a.value);
  let spadesSuit = cardData.filter((card) => card.suit === "SPADES").sort((a,b)=>b.value - a.value)
  let clubsSuit = cardData.filter((card) => card.suit === "CLUBS").sort((a,b)=>b.value - a.value)
  let diamondsSuit = cardData.filter((card) => card.suit === "DIAMONDS").sort((a,b)=>b.value - a.value)


 
  console.log("hearts sorted",heartsSuit)
  console.log("spadesSorted",spadesSuit)
  console.log("clubSorted", clubsSuit)
  console.log("diamondSorted",diamondsSuit)
  

  return (
    <div>

<>
<Typography variant="h6" color="white">
<span style={{color:"red"}}>Estado: Juego terminado.</span> <CheckIcon />
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

export default SortedCards;
