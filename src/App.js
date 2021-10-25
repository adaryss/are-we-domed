import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getAsteroids } from "./fetcher/getAsteroids";
import { selectAsteroids } from "./selectors/asteroids";
import { useEffect } from "react";
import { SearchButton } from "./components/SearchButton/SearchButton";
import { Container, Typography } from "@mui/material";

const App = () => {
  const { asteroidsData, error, isFetching } = useSelector(selectAsteroids);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("asteroids", asteroidsData);
  }, [asteroidsData]);

  const handleButtonClick = () => {
    dispatch(getAsteroids());
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        background: "#13294B",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h1" sx={{ color: "#cecece", textAlign: "center" }}>
          Are we doomed?
        </Typography>
      </Container>
      {Boolean(asteroidsData) ? (
        <div>{JSON.stringify(asteroidsData)}</div>
      ) : (
        <SearchButton
          handleButtonClick={handleButtonClick}
          isFetching={isFetching}
          hasError={error}
        />
      )}
    </Container>
  );
};

export default App;
