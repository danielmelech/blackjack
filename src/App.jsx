import { useEffect, useState } from "react";
import { generateDeckAndShufle } from "./deck";
import CardList from "./CardList";
import'./App.css';

export default function App() {
  const [deck, setDeck] = useState(generateDeckAndShufle());
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
  

  const pickCardd = () => {
    const newCard = deck.pop();
    setCard(newCard);
    setDealersCards([...dealersCards, newCard]);
    const newDeck = [...deck];
    setDeck(newDeck);
  };

  const pickCardp = () => {
    const newCard = deck.pop();
    setCard(newCard)
      setPlayersCards([...playersCards, newCard]);
      console.log(newCard);
    const newDeck = [...deck];
    setDeck(newDeck);
  };
  
  const end_player_turn = () => {
    setisplayerturn(false);
    setisdealersturn(true);
  };

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
    setnewgame(true);
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
    

  useEffect(() => {

    if (card!=null){
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
  }}, [playersCards]);

  useEffect(() => {
    if (card!=null){
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
  }, [dealerCount]);

    useEffect(() => {
      if (playerCount > 21 && player_ace) {
        setPlayerCount(playerCount - 10);
        setplayer_ace(false);
      }
    }, [playerCount]);

   useEffect(() => {
    if(player_ace==false){
      if(playerCount>21){
      setplayerloss(1);
     }}
    }
,[playerCount]);

useEffect(() => {
  if(dealers_ace==false){
    if(dealerCount>21){
    setplayerloss(2);
   }}
  }
,[dealerCount]);


  useEffect(() => {
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


  return (
    <>
    <button className='button1' onClick={pickCardp} disabled={playerloss!=0}>
      Hit
    </button>
    <button className='button2' onClick={end_player_turn} disabled={playerloss!=0}>
      Stand
    </button>
    <button className='button3' onClick={handleReset} disabled={playerloss==0}>
      New game
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