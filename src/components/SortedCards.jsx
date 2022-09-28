import { useEffect, useState } from "react";
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
 
  let heartsSuit = cardData.filter((card) => card.suit === "HEARTS").sort((a,b)=>a.value - b.value);
  let spadesSuit = cardData.filter((card) => card.suit === "SPADES").sort((a,b)=>a.value - b.value)
  let clubsSuit = cardData.filter((card) => card.suit === "CLUBS").sort((a,b)=>a.value - b.value)
  let diamondsSuit = cardData.filter((card) => card.suit === "DIAMONDS").sort((a,b)=>a.value - b.value)

  let queenAmount = cardData.filter(card=>card.value==="QUEEN").length
 
  console.log("hearts sorted",heartsSuit)
  console.log("spadesSorted",spadesSuit)
  console.log("clubSorted", clubsSuit)
  console.log("diamondSorted",diamondsSuit)
  

  return (
    <div>
    <div>Amount of queens {queenAmount}</div>
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
    
      <div>
        {heartsSuit.map((card) => {
          return (
            <div key={card.code}>
              <img src={card.image} alt={card.code} />
            </div>
          );
        })}
      </div>
      <div>
        {spadesSuit.map((card) => {
          return (
            <div key={card.code}>
              <img src={card.image} alt={card.code} />
            </div>
          );
        })}
      </div>
      <div>
        {clubsSuit.map((card) => {
          return (
            <div key={card.code}>
              <img src={card.image} alt={card.code} />
            </div>
          );
        })}
      </div>
      <div>
        {diamondsSuit.map((card) => {
          return (
            <div key={card.code}>
              <img src={card.image} alt={card.code} />
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default SortedCards;
