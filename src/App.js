import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getAsteroids } from "./fetcher/getAsteroids";
import { selectAsteroids } from "./selectors/asteroids";
import { SearchButton } from "./components/SearchButton/SearchButton";
import { AsteroidsOverview } from "./components/AsteroidsOverview/AsteroidsOverview";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

const App = () => {
  const { asteroidsData, error, isFetching } = useSelector(selectAsteroids);
  const dispatch = useDispatch();
  const hasData = Boolean(asteroidsData);

  const handleButtonClick = () => {
    dispatch(getAsteroids());
  };

  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          minHeight: "100vh",
          background: "#13294B",
          display: "flex",
          alignItems: "center",
          justifyContent: hasData ? "flex-start" : "center",
          flexDirection: "column",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h1"
            sx={{ color: "#cecece", textAlign: "center" }}
          >
            Are we doomed?
          </Typography>
        </Container>
        {Boolean(asteroidsData) ? (
          <AsteroidsOverview asteroidsData={asteroidsData} />
        ) : (
          <SearchButton
            handleButtonClick={handleButtonClick}
            isFetching={isFetching}
            hasError={error}
          />
        )}
      </Container>
      <footer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "16px 0",
            background: "#cececea8",
          }}
        >
          <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.87)" }}>
            Made with 😱 of asteroids | Powered by NASA
          </Typography>
        </Box>
      </footer>
    </>
  );
};

export default App;
