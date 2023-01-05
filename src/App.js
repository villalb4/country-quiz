import { useEffect } from 'react';
import './App.css';
import Home from './views/Home';
import { useDispatch } from 'react-redux';
import { getCountrys } from './redux/thunk/getCountrys';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCountrys())
  })

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
