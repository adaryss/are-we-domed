import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { usePotentiallyDangerousItems } from "../../hooks/usePotentiallyDangerousItems";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionContent } from "./AsteroidsAccordionSection/AccordionContent";
import { Box } from "@mui/system";

export const DangerousAsteroidsAccordion = () => {
  const dangerousAsteroids = usePotentiallyDangerousItems();

  return (
    <Box sx={{ marginTop: "28px" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id={`dangerous-asteroids-accordion`}
        >
          <Typography variant="h6" color="#13294B">
            Potentially dangerous asteroids
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {dangerousAsteroids.map((item, index) => (
            <div key={item.id}>
              <Divider
                orientation="horizontal"
                sx={{ margin: index === 0 ? "0 0 12px" : "12px 0 12px" }}
              />
              <AccordionContent
                dayData={item}
                dayKey={item.close_approach_data[0].close_approach_date}
              />
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
