import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { getAsteroids } from './fetcher/getAsteroids';
import { useEffect } from 'react';
import { isFetching as asteroidsFetching } from "./features/asteroidsSlice";
import { selectAsteroids } from './selectors/asteroids';

const App = () => {
  const asteroids = useSelector(selectAsteroids);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('asteroids', asteroids);
  }, [asteroids]);

  const handleButtonClick = () => {
    dispatch(getAsteroids());
    dispatch(asteroidsFetching(true));
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
