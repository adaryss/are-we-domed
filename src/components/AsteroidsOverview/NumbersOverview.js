import { Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { Item } from "./Item";
import { usePotentiallyDangerousItems } from "../../hooks/usePotentiallyDangerousItems";
import { Trans } from "@lingui/react";

export const NearbyAsteroids = ({ asteroidsData }) => (
  <Item>
    <Typography variant="h2" sx={{ color: "rgba(0, 0, 0, 0.8)" }}>
      {asteroidsData.element_count}
    </Typography>
    <Typography variant="subtitle1">
      <Trans id="nearby_asteroids" />
    </Typography>
  </Item>
);

NearbyAsteroids.propTypes = {
  asteroidsData: PropTypes.object.isRequired,
};

export const DangerousAsteroids = () => {
  const dangerousAsteroids = usePotentiallyDangerousItems();

  return (
    <Item>
      <Typography variant="h2" sx={{ color: "rgba(0, 0, 0, 0.8)" }}>
        {dangerousAsteroids.length}
      </Typography>
      <Typography variant="subtitle1">
        <Trans id="potentially_dangerous_asteroids" />
      </Typography>
    </Item>
  );
};
