import { Trans } from "@lingui/react";
import { Typography } from "@mui/material";
import React from "react";
import { useClosestAsteroid } from "../../hooks/useClosestAsteroid";
import { getDoomedAnswer } from "../../utils/getDoomedAnswer";
import { Item } from "./Item";

export const DoomedAnswer = () => {
  const closestAsteroid = useClosestAsteroid();

  const closestAsteroidDistance =
    closestAsteroid.close_approach_data[0].miss_distance.kilometers;

  return (
    <>
      <Item>
        <Typography
          variant="h4"
          sx={{
            color: "rgba(0, 0, 0, 0.8)",
            textTransform: "uppercase",
            padding: "16px 32px",
            fontWeight: "700",
            width: "auto",
          }}
        >
          {getDoomedAnswer(closestAsteroidDistance)}
        </Typography>
      </Item>
      <Typography
        variant="subtitle1"
        sx={{ textAlign: "center", color: "#FFFFFF" }}
      >
        <Trans id="doomed_answer_period" />
      </Typography>
    </>
  );
};
