import { useEffect } from 'react';
import './App.css';
import Game from './views/Game/Game';
import { useDispatch } from 'react-redux';
import { getCountrys } from './redux/thunk/getCountrys';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCountrys())
  })

  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
