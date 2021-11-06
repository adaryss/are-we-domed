import React from "react";
import PropTypes from "prop-types";

import { Container, Box, Grid } from "@mui/material";
import { AsteroidsAccordionSection } from "./AsteroidsAccordionSection/AsteroidsAccordionSection";

import { ClosestAsteroid } from "./ClosestAsteroid";
import { FastestAsteroid } from "./FastestAsteroid";
import { LargestAsteroid } from "./LargestAsteroid";
import { DangerousAsteroids, NearbyAsteroids } from "./NumbersOverview";
import { DoomedAnswer } from "./DoomedAnswer";
import { DangerousAsteroidsAccordion } from "./DangerousAsteroidsAccordion";

export const AsteroidsOverview = ({ asteroidsData }) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: "32px 0 32px 0",
        }}
      >
        <DoomedAnswer />
      </Box>

      <Container
        maxWidth="md"
        sx={{
          "@media (max-width: 1199px)": {
            padding: 0,
          },
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <NearbyAsteroids asteroidsData={asteroidsData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <DangerousAsteroids />
          </Grid>

          <Grid item xs={12}>
            <ClosestAsteroid />
          </Grid>

          <Grid item xs={12}>
            <FastestAsteroid />
          </Grid>

          <Grid item xs={12}>
            <LargestAsteroid />
          </Grid>
        </Grid>
      </Container>

      <DangerousAsteroidsAccordion />

      <AsteroidsAccordionSection
        nearObjects={asteroidsData.near_earth_objects}
      />
    </Box>
  );
};

AsteroidsOverview.propTypes = {
  asteroidsData: PropTypes.object.isRequired,
};
