/*
import { useEffect, useState } from "react";
import Card from "./Card1";
import { generateDeckAndShufle } from "./deck";

export default function App() {
  const [deck, setDeck] = useState(generateDeckAndShufle());
  const [card, setCard] = useState(null);
 

  const pickCard = () => {
    const newCard = deck.pop();
    const newDeck = [...deck];
    console.log(newCard)
    console.log(deck)
    console.log(deck.length)
    setCard(newCard);
    setDeck(newDeck);
  };

  useEffect(() => {
    pickCard();
  },[]);


  return (
    <div>
      <button type="button" onClick={pickCard} disabled={deck && !deck.length}>
        New Card
      </button>
      {card && <Card card={card} />}
    </div>
  );
}
*/

import { useEffect, useState } from "react";
import Card from "./Card1";
import { generateDeckAndShufle } from "./deck";
import styled from 'styled-components';
import bj_background from "./";
import CardList from "./CardList";
import'./App.css'; // Import the CSS file for app styles
//import ButtonGroup from "./Buttons"; */

export default function App() {
  const [deck, setDeck] = useState(generateDeckAndShufle());
  //console.log(deck);
  const [card, setCard] = useState(null);
  const [dealersCards, setDealersCards] = useState([]);
  const [dealerCount, setDealerCount] = useState(0);
  const [playersCards, setPlayersCards] = useState([]);
  const [playerCount, setPlayerCount] = useState(0);
  const [player_ace, setplayer_ace] = useState(false);
  const [dealers_ace, setdealers_ace] = useState(false);
  const [isplayerturn,setisplayerturn] = useState(true);
  const [startingplayer,setstartingplayer]=useState(0);
  const [playerloss,setplayerloss]=useState(0);
  const [isdealersturn,setisdealersturn]=useState(false);
  const [newgame,setnewgame]=useState(false);
  const [isgameended,setisgameended]=useState(false);
  



  const pickCardd = () => {
    //console.log(deck.length);
    const newCard = deck.pop();
    setCard(newCard);
    setDealersCards([...dealersCards, newCard]);
    //console.log(newCard)
    const newDeck = [...deck];
    setDeck(newDeck);
    //console.log(newCard)
    //console.log(deck)
    //console.log(deck.length)
  };

  const pickCardp = () => {
    //console.log(deck.length);
    const newCard = deck.pop();
    setCard(newCard)
      setPlayersCards([...playersCards, newCard]);
      console.log(newCard);
    //console.log(newCard)
    const newDeck = [...deck];
    setDeck(newDeck);
    //console.log(newCard)
    //console.log(deck)
    //console.log(deck.length)
  };
  
  useEffect(() => {
    if(startingplayer==0){
      pickCardd();
      setstartingplayer(startingplayer+1);
    }
  },[]);

  useEffect(() => {
    if(startingplayer==1){
      pickCardp();
      setstartingplayer(startingplayer+1);
    }
  },[startingplayer]);

  useEffect(() => {
    if(startingplayer==2){
      pickCardp();
      setstartingplayer(startingplayer+1);
    }
  },[startingplayer]);

  useEffect(() => {
    if(newgame==true){
      if(startingplayer==0){
        pickCardd();
        setstartingplayer(startingplayer+1);
        setnewgame(false);
        console.log(deck);
      }
    }
  },[newgame]);




  

  const end_player_turn = () => {
    setisplayerturn(false);
    setisdealersturn(true);
  };

  const new_game = () => {
    setDeck(generateDeckAndShufle());
    setCard(null);
    setDealersCards([]);
    setDealerCount(0);
    setPlayersCards([]);
    setPlayerCount(0);
    setplayer_ace(false);
    setdealers_ace(false);
    setisplayerturn(true);
    setisdealersturn(false);
    setplayerloss(0);
    setstartingplayer(0);
    console.log(deck,card,dealersCards,dealerCount,playersCards,playerCount,player_ace,dealers_ace,isdealersturn,isdealersturn,playerloss,startingplayer);
    }
    ;

    /*const handleReset = () => {

      const originalUseEffect = useEffect;
      useEffect = () => {};
    
      
      new_game();
    
      console.log(deck,card,dealersCards,dealerCount,playersCards,playerCount,player_ace,dealers_ace,isdealersturn,isdealersturn,playerloss,startingplayer);
      useEffect = originalUseEffect;

      pickCardd();
      setstartingplayer(1);

    };*/

    const handleReset = () => {
      setDeck([]);
      setDeck(generateDeckAndShufle());
      setCard(null);
      setDealersCards([]);
      setDealerCount(0);
      setPlayersCards([]);
      setPlayerCount(0);
      setplayer_ace(false);
      setdealers_ace(false);
      setisplayerturn(true);
      setstartingplayer(0);
      setplayerloss(0);
      setisdealersturn(false);
      setisgameended(false);
      setnewgame(true);
    };
    


  useEffect(() => {

    if (card!=null){
      console.log(card.value);
      switch(card.value){
        case 'Two':
          setPlayerCount(playerCount+2);
          break;
        case 'Three':
          setPlayerCount(playerCount+3);
          break;
        case 'Four':
          setPlayerCount(playerCount+4);
          break;
        case 'Five':
          setPlayerCount(playerCount+5);
          break;
        case 'Six':
          setPlayerCount(playerCount+6);
          break;
        case 'Seven':
          setPlayerCount(playerCount+7);
          break;
        case "Eight": 
          setPlayerCount(playerCount+8);
          break;
        case "Nine":
          setPlayerCount(playerCount+9);
          break;
        case "Ten":
          setPlayerCount(playerCount+10);
          break;
        case "Jack":
          setPlayerCount(playerCount+10);
          break;
        case "Queen":
          setPlayerCount(playerCount+10);
          break;
        case "King":
          setPlayerCount(playerCount+10);
          break;
        case "Ace":
          setPlayerCount(playerCount+11);
          setplayer_ace(true);
          break;
    }
    console.log(playerCount);
  }}, [playersCards]);

  useEffect(() => {
    console.log(card);
    console.log(dealersCards)
    if (card!=null){
      console.log(card.value);
      switch(card.value){
        case 'Two':
          setDealerCount(dealerCount+2);
          break;
        case 'Three':
          setDealerCount(dealerCount+3);
          break;
        case 'Four':
          setDealerCount(dealerCount+4);
          break;
        case 'Five':
          setDealerCount(dealerCount+5);
          break;
        case 'Six':
          setDealerCount(dealerCount+6);
          break;
        case 'Seven':
          setDealerCount(dealerCount+7);
          break;
        case "Eight": 
          setDealerCount(dealerCount+8);
          break;
        case "Nine":
          setDealerCount(dealerCount+9);
          break;
        case "Ten":
          setDealerCount(dealerCount+10);
          break;
        case "Jack":
          setDealerCount(dealerCount+10);
          break;
        case "Queen":
          setDealerCount(dealerCount+10);
          break;
        case "King":
          setDealerCount(dealerCount+10);
          break;
        case "Ace":
          setDealerCount(dealerCount+11);
          setdealers_ace(true);
          break;
    }
  }}, [dealersCards.length]);

  useEffect(() => {
    if (dealerCount > 21 && dealers_ace) {
      setDealerCount(dealerCount - 10);
      setdealers_ace(false);
    }
  }, [playerCount]);

    useEffect(() => {
      if (playerCount > 21 && player_ace) {
        setPlayerCount(playerCount - 10);
        setplayer_ace(false);
      }
    }, [playerCount]);

  useEffect(() => {
     if(playerCount>21){
      setplayerloss(1);
     }
   },[playerCount]);

   useEffect(() => {
    if(dealerCount>21){
     setplayerloss(2);
    }
  },[dealerCount]);

  /*useEffect(() => {
    if(dealerCount<17 && playerloss==0 && isplayerturn==false){
      pickCardd();
    }
  },[dealerCount]);*/


  /*useEffect(() => {
    console.log(playerCount,dealerCount);
    if(dealerCount<17 && playerloss==0 && isplayerturn==false){
      pickCardd();
    }else{
      setisdealersturn(false);
    }
  },[dealerCount,isplayerturn==false]);*/

  useEffect(() => {
    console.log(playerCount,dealerCount);
    console.log(dealerCount,playerloss,isplayerturn);
    if(playerCount>dealerCount){
      if(dealerCount<17 && playerloss==0 && isplayerturn==false){
        pickCardd();
      }else{
        setisdealersturn(false);
      }
    }else{
      setisdealersturn(false);
    }
  },[dealerCount,isplayerturn==false]);
  


  useEffect(() => {
    if(isdealersturn==false && isplayerturn==false 
      && dealerCount<22 && playerCount<22){
      if(playerCount>dealerCount){
        setplayerloss(2);
      }else{setplayerloss(1); }
      
    }
  },[isdealersturn]);
  
  useEffect(() => {
    if(playerloss==1){

    }
  },[playerloss]);


  return (
    <>
    <button className='button1' onClick={pickCardp} disabled={playerloss!=0}>
      hit
    </button>
    <button className='button2' onClick={end_player_turn} disabled={playerloss!=0}>
      stand
    </button>
    <button className='button3' onClick={handleReset} disabled={playerloss==0}>
      new game
    </button>
    <div>
      {<CardList cards50={dealersCards}/>}
    </div>
    < div className='count_box'>
      {dealerCount}
    </div>
    <div>
      {<CardList cards50={playersCards}/>}
    </div>
    <div className='count_box'>
      {playerCount}
    </div>
    {playerloss==1 && <div className='messege'> Dealer won</div>}
    {playerloss==2 && <div className='messege'> You won</div>}
    </>
    
  );
};