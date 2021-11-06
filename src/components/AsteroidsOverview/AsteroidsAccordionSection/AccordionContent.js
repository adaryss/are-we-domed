import React from "react";
import { Typography, Grid } from "@mui/material";
import { LeftColItems } from "./LeftColItems";
import PropTypes from "prop-types";
import { RightColItems } from "./RightColItems";
import { Box } from "@mui/system";
import { Trans } from "@lingui/react";

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
      <Typography sx={{ color: "rgba(0, 0, 0, 0.87)" }} strong variant="body1">
        <strong>
          {" "}
          <Trans id="name" />
        </strong>{" "}
        {dayData.name}
      </Typography>
    </div>
  ) : (
    <Typography variant="h6">
      <strong>
        <Trans id="asteroid_name" />
      </strong>{" "}
      {dayData.name}
    </Typography>
  );

  return (
    <Box>
      <Box sx={{ textAlign: "center", margin: "0 0 28px" }}>{title}</Box>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            borderRight: "1px solid rgba(0, 0, 0, 0.12)",
            "@media (max-width: 899px)": {
              borderRight: 0,
            },
          }}
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
