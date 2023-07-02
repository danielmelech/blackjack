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
  const [startingplayer,setstartingplayer]=useState(0);//with that we construct every game
  const [isdealersturn,setisdealersturn]=useState(false);
  const [newgame,setnewgame]=useState(false);
  const [split,setsplit] = useState(0);//the split situation, there are 4 diffrent situations
  const [playerCountfirst, setPlayerCountfirst] = useState(0);//if split happend, another count
  const [playercardssplit,setplayercardssplit]=useState([]);//if split happend, another cardslist
  const [splitcard,setsplitcard] = useState(null);
  const [playercardsas,setplayercardsas]=useState([]);
  const [endgame,setendgame]= useState(false);
  const [betamout,setbetamount] = useState(0);
  const [earnings,setearnings] = useState(0);
  const [wallet,setwallet] = useState(100);
  const [numberValue, setNumberValue] = useState(0);

  
//gives the dealer a card
  const pickCardd = () => {
    const newCard = deck.pop();
    setCard(newCard);
    setDealersCards([...dealersCards, newCard]);
    const newDeck = [...deck];
    setDeck(newDeck);
  };
//gives the player a card
  const pickCardp = () => {
    const newCard = deck.pop();
    setCard(newCard)
      setPlayersCards([...playersCards, newCard]);
      console.log(newCard);
    const newDeck = [...deck];
    setDeck(newDeck);
  };
  
  const end_player_turn = () => {
    if(split!=2){
      setisdealersturn(true);
    }
    if(split==2){
      setsplit(3);
    }

  };

  const splitcards = () => {
    setsplit(2);
    setCard(null);
    setbetamount(betamout*2);
    if(playersCards[0].value=="Ace"){
      setPlayerCount(11);
      setPlayerCountfirst(11);
      setplayer_ace(true);
    }else{
      setPlayerCount(playerCount/2);
      setPlayerCountfirst(playerCount/2);
    }
    setsplitcard(playersCards[1]);
    setplayercardssplit([playersCards[1]]);
    setPlayersCards([playersCards[0]]);
  };

  //loads a new game
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
    setstartingplayer(0);
    setisdealersturn(false);
    setnewgame(true);
    setsplit(0);
    setPlayerCountfirst(0);
    setplayercardssplit([]);
    setplayercardssplit([]);
    setsplitcard(null);
    setplayercardsas([]);
    setendgame(false);
    setbetamount(0);
    setearnings(0);
  };

  //constructing a game
  useEffect(() => {
    if(startingplayer==0){
      pickCardd();
      setstartingplayer(startingplayer+1);
    }
  },[]);

  useEffect(() => {
    if(split==2){
      setwallet(wallet-betamout/2);
    }else{
      setwallet(wallet-betamout);
    }
  },[betamout]);

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
  //here the constructing ends

  //checks if a split is possible
  useEffect(() => {
    if(playersCards.length==2){
      if(playersCards[0].value==playersCards[1].value){
        console.log(playersCards[0].value);
        console.log(playersCards[1].value);
       setsplit(1);
    }
  }
  },[playersCards]);


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


    
  //assings value to player count
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

  //assings value to dealers count
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

  //checks if the player has an ace and what the ace value should be
  useEffect(() => {
    if (dealerCount > 21 && dealers_ace) {
      setDealerCount(dealerCount - 10);
      setdealers_ace(false);
    }
  }, [dealerCount]);

    //checks if the dealer has an ace and what the ace value should be
    useEffect(() => {
      if (playerCount > 21 && player_ace) {
        setPlayerCount(playerCount - 10);
        setplayer_ace(false);
      }
    }, [playerCount]);

    //sets all the values for the player to ploay his second hand if a split happaned
    useEffect(() => {
      if(split==3){
        setCard(null);
        setPlayersCards([splitcard]);
        setPlayerCount(playerCountfirst);
        setPlayerCountfirst(playerCount);
        setplayercardsas([...playersCards]);
        if(splitcard.value=="Ace"){
          setplayer_ace(true);
        }
      }
    },[split]);

    //checks if a player is busted
   useEffect(() => {
    if(split==2){
      if(player_ace==false){
        if(playerCount>21){
          setsplit(3);
       }}
    } else{if(player_ace==false){
      if(playerCount>21){
        console.log(3);
      setendgame(true);
     }}  
    }
  }
,[playerCount]);

//checks if a dealer is busted
useEffect(() => {
  if(dealers_ace==false){
    if(dealerCount>21){
      console.log(dealerCount);
      setendgame(true);
   }}
  }
,[dealerCount]);


  useEffect(() => {
    if((dealers_ace && dealerCount>21)==false){
      if(dealerCount<17 && isdealersturn==true){
        pickCardd();
      }else{if(isdealersturn==true){
        setisdealersturn(false);
        setendgame(true);
      }
    }
    }
  },[dealerCount,isdealersturn]);
  
  //calculates player eranings
  useEffect(() => {
    if(endgame==true){
      if(split==3){
        setearnings(outcome(playerCount,playersCards.length,dealerCount,dealersCards.length,betamout/2) +
        outcome(playerCountfirst,playercardssplit.length,dealerCount,dealersCards.length,betamout/2));
      }else{
        setearnings(outcome(playerCount,playersCards.length,dealerCount,dealersCards.length,betamout));

      }
    }
  },[endgame]);


  useEffect(() => {
    setwallet(wallet+earnings);
  },[earnings]);

  //gets player and dealer hands and bet amount to calculate how much the player earned
  function outcome (playerc,playerl,dealerc,dealerl,bet){
    if(playerc>21){
      return 0;
    }
    if(playerc==21 & playerl==2){
      if(dealerc==21 & dealerl==2){
        return bet;
      }
      return bet*2.5;
    }else { if(dealerc==21 & dealerl==2){
      return 0;
    }
    }
    if(dealerc>21){
      return bet*2;
    }

    if(dealerc>playerc){
      return 0;
    }
    
    if(dealerc==playerc){
      return bet;
    }

    if(dealerc<playerc){
      return bet*2;
    }
    }

    const handleChange = (event) => {
      const inputValue = event.target.value;
      const numericValue = Number(inputValue);
      setNumberValue(numericValue);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Submitted value:", numberValue);
      setbetamount(numberValue);
    };

  return (
    <>
    <div className="flex-middle">
      <div className="wallet">
        wallet {wallet} 
      </div>
      <div className="wallet">
        Bet {betamout}
      </div>    
    </div>
    <div>
      {<CardList cards50={dealersCards}/>}
    </div>
    <div className="flex-middle">
      <div className="count_box">
        {dealerCount}
        </div>
    {betamout==0 && <form  className="inputamount" onSubmit={handleSubmit}>
      <label>
       Bet size
        <input
        min={1}
        max={wallet}
          type="number"
          value={numberValue}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>}
      {(endgame && earnings>0) && <div className='messege'> you won {earnings} </div>}
      {(endgame && earnings==0) && <div className='messege'> you lost </div>}
    </div>
      {split==1 && playersCards.length==2 && <button className='button4' onClick={splitcards} disabled={betamout==0}> Split</button>}
    
    {(split==0 || split==1) && <div>
      {<CardList cards50={playersCards}/>}
    </div>}
    {(split==0 || split==1) && <div className='count_box'> {playerCount}</div>}

    {split==2 && <div>
      {<CardList cards50={playersCards}/>}
    </div>}
    {split==2 && <div className='count_box'> {playerCount}</div>}

    {split==2 && <div>
      {<CardList cards50={playercardssplit}/>}
    </div>}
    {split==2 && <div className='count_box'> {playerCountfirst}</div>}

    {split==3 && <div>
      {<CardList cards50={playercardsas}/>}
    </div>}
    {split==3 && <div className='count_box'> {playerCountfirst}</div>}

    {split==3 && <div>
      {<CardList cards50={playersCards}/>}
    </div>}
    {split==3 && <div className='count_box'> {playerCount}</div>}

    <div className='flex_buttons'>
      <button className='button1' onClick={pickCardp} disabled={endgame||betamout==0}>
      Hit
      </button>
      <button className='button2' onClick={end_player_turn} disabled={endgame||betamout==0}>
      Stand
      </button>
      <button className='button3' onClick={handleReset} disabled={endgame==false}>
      New game
      </button>
      </div>
    </>
    
  );
};