import { useState, useRef, useImperativeHandle, forwardRef } from 'react'

export default function Player() {
  const playerName = useRef()
  const [enteredPlayerName, setEnteredPlayerName] = useState('Unknown entity')
  
    function handleClick(){
      setEnteredPlayerName(playerName.current.value)
      playerName.current.value = ''
    }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'Unknown player' }</h2>
      <p>
        <input ref={playerName} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}