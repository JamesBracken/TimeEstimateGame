export default function ResultModal({result, targetTime, time}){
    return (
        <dialog className='result-modal' open>
            <h2>You {result}</h2>
            <p>The target time was <strong>{targetTime} second{targetTime > 1 ? 's' : ''}</strong></p>
            <p>You clicked with <strong>X second{time > 1 ? 's' : ''} left</strong></p>
        <form method='dialog'>
            <button>Close</button>
        </form>
        </dialog>
    )
}