import { useEffect } from 'react';
import './App.css';
import Game from './views/Game/Game';
import Results from './views/Results/Results';
import { useDispatch, useSelector } from 'react-redux';
import { getCountrys } from './redux/thunk/getCountrys';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCountrys())
  }, [dispatch])

  const gameOver = useSelector(e => e.play.gameOver)

  return (
    <div className="App">
      {
        gameOver === false
        ? <div className='App_divGame'><Game /></div>
        : <div className='App_divResults'><Results /></div>
      }
    </div>
  );
}

export default App;
