import { useState, useRef } from "react"
import ResultModal from "./ResultModal";

export default function TimerChallenge({title, targetTime}){
    const timer = useRef()
    const dialog = useRef()


    const [timerStarted, setTimerStarted] = useState(false)
    const [timerExpired, setTimerExpired] = useState(false)


    function handleChallengeStart(){
        timer.current =
        setTimeout( () => {
            setTimerExpired(true)
            dialog.current.showModal();
        }, targetTime*1000);
        setTimerStarted(true)
    }
    function handleChallengeEnd(){
        clearTimeout(timer.current)
    }
    return( 
    <>
        <ResultModal ref={dialog} result="Lost" targetTime={targetTime}/>
        <section className='challenge'>
            <h2>{title}</h2>
            <p className='challenge-time'>
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerStarted ? handleChallengeEnd : handleChallengeStart  }>{timerStarted ? 'End' : 'Start'} challenge</button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Time is running' : 'Time is not running'}
            </p>
        </section>
    </>
    )

}