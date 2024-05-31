import { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, handleReset}, ref){
    const dialog = useRef()
    const userLost = remainingTime <= 0;
    const userWon = remainingTime > 0
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2)
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) *100)
    console.log(score)

    useImperativeHandle(ref, () => {
        return{
            open() {
                dialog.current.showModal()
            }
        }
    })
    return createPortal(
        <dialog ref={dialog} className='result-modal' onClose={handleReset}>
            {userLost && <h2>You lost!</h2>}
            {userWon && <h2>You won!...</h2>}
            <p>The target time was <strong>{targetTime} second{targetTime > 1 ? 's' : ''}</strong></p>  
            <p>You clicked with <strong>{formattedRemainingTime } seconds left</strong></p>
            {userWon && <p><strong>You got {score} points!</strong></p>}
        <form method='dialog'>
            <button onClick={handleReset}>Close</button>
        </form>
        </dialog>, 
        document.getElementById('modal')
    )
})
export default ResultModal;