import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title='Easy' targetTime={1}/>
        <TimerChallenge title='Challenge' targetTime={5}/>
        <TimerChallenge title='Getting tough' targetTime={10}/>
        <TimerChallenge title='Chronos, is that you?' targetTime={20}/>


      </div>
    </>
  );
}

export default App;
