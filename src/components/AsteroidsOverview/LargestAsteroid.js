import React from "react";
import { useLargestAsteroid } from "../../hooks/useLargestAsteroid";
import { AccordionContent } from "./AsteroidsAccordionSection/AccordionContent";
import { Item } from "./Item";

export const LargestAsteroid = () => {
  const largestAsteroid = useLargestAsteroid();
  const dayKey = largestAsteroid.close_approach_data[0].close_approach_date;

  return (
    <Item>
      <AccordionContent
        dayData={largestAsteroid}
        dayKey={dayKey}
        desc="The largest asteroid"
      />
    </Item>
  );
};
