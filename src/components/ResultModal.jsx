import { forwardRef, useImperativeHandle, useRef } from 'react'

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime}, ref){
    const result = (remainingTime <= 0 ? 'You won!' : 'You lost')
    const dialog = useRef()

    useImperativeHandle(ref, () => {
        return{
            open() {
                dialog.current.showModal()
            }
        }
    })
    return (
        <dialog ref={dialog} className='result-modal'>
            <h2>{result}</h2>
            <p>The target time was <strong>{targetTime} second{targetTime > 1 ? 's' : ''}</strong></p>  
            <p>You clicked with <strong>X seconds left</strong></p>
        <form method='dialog'>
            <button>Close</button>
        </form>
        </dialog>
    )
})
export default ResultModal;