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
  })

  const pased = useSelector(e => e.play.pased)

  return (
    <div className="App">
      {
        pased === null || pased === true
        ? <div className='App_divGame'><Game /></div>
        : <div className='App_divResults'><Results /></div>
      }
    </div>
  );
}

export default App;
