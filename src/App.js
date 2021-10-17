import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { getAsteroids } from './fetcher/getAsteroids';
import { useEffect } from 'react';
import { asteroidsFetching } from "./actions/fetchAsteroidsActions";

const App = () => {
  const asteroids = useSelector(state => state.asteroids);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('asteroids', asteroids);
  }, [asteroids]);
  const handleButtonClick = () => {
    dispatch(asteroidsFetching(true));
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
