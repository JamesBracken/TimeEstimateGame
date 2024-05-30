import { useState, useRef } from "react"
import ResultModal from "./ResultModal";

export default function TimerChallenge({title, targetTime}){
    const timer = useRef()
    const dialog = useRef()
  
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000


    if (timeRemaining <= 0) {
        clearInterval(timer.current)
        setTimeRemaining(targetTime * 1000)
        dialog.current.open()
    }
    function handleChallengeStart(){
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10)
        }, 10 )
    }
    function handleChallengeEnd(){
        dialog.current.open()
        clearInterval(timer.current)
    }
    console.log(timerIsActive)
    return( 
    <>
        <ResultModal 
            ref={dialog} 
            targetTime={targetTime}
            remainingTime={timeRemaining}
        />
        <section className='challenge'>
            <h2>{title}</h2>
            <p className='challenge-time'>
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerIsActive ? handleChallengeEnd : handleChallengeStart}>
                    {timerIsActive ? 'End' : 'Start'} challenge</button>
            </p>
            <p className={timerIsActive ? 'active' : undefined}>
                {timerIsActive ? 'Time is running' : 'Time is not running'}
            </p>
        </section>
    </>
    )

}