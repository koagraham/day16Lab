import playerData from './playerData.js';
import { useState } from 'react'

const cards = playerData.map((card) => <BaseballCard name={card.name} team={card.team} pos={card.position} stats={card.stats} url={card.imgUrl} key={card.cardId} />)

function BaseballCard(props) {
  let [showPicture, setPicture] = useState(true)
  function toggleCard() {
    if (showPicture) {
      setPicture(showPicture = false)
    }
    else {
      setPicture(showPicture = true)
    }
  }
  if (showPicture) {
    return (
      <div className="card" onClick={toggleCard}>
        <h2>{props.name}</h2>
        <img src={props.url}/>
      </div>
    );
  }
  else {
    const statsDisplay = []
    for (const [key, value] of Object.entries(props.stats)) {
      statsDisplay.push(<p>{key}: {value}</p>)
    }
    return (
      <div className="card" onClick={toggleCard}>
        <h2>{props.name}</h2>
        <p>{props.team}</p>
        <p>{props.pos}</p>
        <p>{statsDisplay}</p>
      </div>
    )
  }
}

function App() {
  return <>{cards}</>;
}

export default App;
