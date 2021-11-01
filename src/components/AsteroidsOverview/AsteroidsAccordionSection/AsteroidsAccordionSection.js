import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { formatDay } from "../../../utils/formatDay";
import { Divider } from "@mui/material";
import { AccordionContent } from "./AccordionContent";
import { isDayContainsDangerousAsteroids } from "../../../utils/isDayContainsDangerousAsteroids";

export const AsteroidsAccordionSection = ({ nearObjects }) => {
  const nearObjectsKeys = Object.keys(nearObjects).sort();

  return (
    <Box component="div" sx={{ margin: "40px 0" }}>
      <Typography
        variant="h6"
        sx={{
          display: "block",
          textAlign: "center",
          color: "#FFFFFF",
          marginBottom: "16px",
        }}
      >
        Detailed data for next 7 days
      </Typography>
      {nearObjectsKeys.map((dayKey, index) => (
        <Accordion key={`${dayKey}-${index}`}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            id={`${dayKey} ${index}-accordion`}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: '100%'
              }}
            >
              <Typography variant="h6" color="#13294B">
                {formatDay(dayKey)}
              </Typography>
              {isDayContainsDangerousAsteroids(nearObjects[dayKey]) && (
                <Box
                  sx={{
                    width: "12px",
                    height: "12px",
                    background: "#bb0a0a",
                    borderRadius: "50%",
                    marginRight: '16px',
                  }}
                />
              )}
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            {nearObjects[dayKey].map((dayData, index) => (
              <div key={dayData.id}>
                <Divider
                  orientation="horizontal"
                  sx={{ margin: index === 0 ? "0 0 12px" : "12px 0 12px" }}
                />
                <AccordionContent dayData={dayData} dayKey={dayKey} />
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

AsteroidsAccordionSection.propType = {
  nearObjects: PropTypes.array.isRequired,
};
