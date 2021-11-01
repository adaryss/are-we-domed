import React from "react";
import { Typography, Box } from "@mui/material";
import PropTypes from "prop-types";

export const InfoItem = ({ title, content }) => (
  <Box sx={{ marginBottom: "12px" }}>
    <Typography
      variant="body1"
      sx={{ fontWeight: "700", color: "rgba(0, 0, 0, 0.87)" }}
    >
      {title}:{" "}
    </Typography>
    <Typography sx={{ color: "rgba(0, 0, 0, 0.87)" }}>{content}</Typography>
  </Box>
);

InfoItem.propItems = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};
