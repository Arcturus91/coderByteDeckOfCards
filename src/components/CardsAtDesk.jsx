import { useEffect, useState } from "react";
const CardsAtDesk = ({ cardData }) => {
  console.log("soy card data", cardData);
  let heartsSuit = cardData.filter((card) => card.suit === "HEARTS");
  let spadesSuit = cardData.filter((card) => card.suit === "SPADES");
  let clubsSuit = cardData.filter((card) => card.suit === "CLUBS");
  let diamondsSuit = cardData.filter((card) => card.suit === "DIAMONDS");

  let queenAmount = cardData.filter(card=>card.value==="QUEEN").length
  console.log(queenAmount)
  

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

export default CardsAtDesk;
