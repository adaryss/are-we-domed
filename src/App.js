import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { getAsteroids } from './fetcher/getAsteroids';
import { selectAsteroids } from './selectors/asteroids';

const App = () => {
  const asteroids = useSelector(selectAsteroids);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(getAsteroids());
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleButtonClick}>Load asteroids</button>
        <div>{JSON.stringify(asteroids)}</div>
      </header>
    </div>
  );
}

export default App;
