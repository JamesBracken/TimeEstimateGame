import { useState } from "react"

export default function TimerChallenge({title, targetTime}){
    const [timerStarted, setTimerStarted] = useState(false)
    const [timerExpired, setTimerExpired] = useState(false)

    function handleChallengeStart(){
        setTimerStarted(true)
        setTimeout( () => {
            setTimerExpired(true)
            setTimerStarted(false)
        }, targetTime*1000);
    }
    function handleChallengeEnd(){
        setTimerExpired(false)
    }
    return( <section className='challenge'>
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
        <p className='challenge-time'>
            {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
            <button onClick={timerExpired ? handleChallengeEnd : handleChallengeStart  }>{timerStarted ? 'End' : 'Start'} challenge</button>
        </p>
        <p className={timerStarted ? 'active' : undefined}>
            {timerStarted ? 'Time is running' : 'Time is not running'}
        </p>
    </section>)
}