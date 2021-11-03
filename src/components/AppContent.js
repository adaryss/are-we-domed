import { useSelector, useDispatch } from "react-redux";
import { getAsteroids } from "../fetcher/getAsteroids";
import { selectAsteroids } from "../selectors/asteroids";
import { SearchButton } from "../components/SearchButton/SearchButton";
import { AsteroidsOverview } from "../components/AsteroidsOverview/AsteroidsOverview";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Trans } from "@lingui/react";
import { LangSelect } from "../components/LangSelect/LangSelect";

const AppContent = ({ handleLanguageChange }) => {
  const { asteroidsData, error, isFetching } = useSelector(selectAsteroids);
  const dispatch = useDispatch();
  const hasData = Boolean(asteroidsData);

  const handleButtonClick = () => {
    dispatch(getAsteroids());
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Container
        maxWidth={false}
        sx={{
          minHeight: "calc(100vh - 56px)",
          background: "#13294B",
          display: "flex",
          alignItems: "center",
          justifyContent: hasData ? "flex-start" : "center",
          flexDirection: "column",
          paddingTop: hasData ? "40px" : 0,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h1"
            sx={{ color: "#cecece", textAlign: "center" }}
          >
            <Trans id="title" />
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
          <Typography variant="body1" sx={{ color: "#13294B" }}>
            <Trans id="footer_text" />
          </Typography>
        </Box>
      </footer>
      <LangSelect handleLanguageChange={handleLanguageChange} />
    </Box>
  );
};

export default AppContent;
