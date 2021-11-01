import React from "react";
import { Typography, Grid } from "@mui/material";
import { LeftColItems } from "./LeftColItems";
import PropTypes from "prop-types";
import { RightColItems } from "./RightColItems";
import { Box } from "@mui/system";

export const AccordionContent = ({ dayData, dayKey, desc }) => {
  const title = desc ? (
    <div>
      <Typography
        variant="h6"
        color="#13294B"
        sx={{ textTransform: "uppercase" }}
      >
        {desc}
      </Typography>
      <Typography sx={{ color: "rgba(0, 0, 0, 0.87)" }} variant="body1">
        Name: {dayData.name}
      </Typography>
    </div>
  ) : (
    <Typography variant="h6">Asteroid name: {dayData.name}</Typography>
  );

  return (
    <Box>
      <Box sx={{ textAlign: "center", margin: "0 0 28px" }}>{title}</Box>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ borderRight: "1px solid rgba(0, 0, 0, 0.12)" }}
        >
          <LeftColItems dayData={dayData} dayKey={dayKey} />
        </Grid>
        <Grid item xs={12} md={6}>
          <RightColItems dayData={dayData} />
        </Grid>
      </Grid>
    </Box>
  );
};

AccordionContent.propTypes = {
  dayData: PropTypes.object.isRequired,
  dayKey: PropTypes.string.isRequired,
  desc: PropTypes.string,
};
