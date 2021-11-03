import { Trans } from "@lingui/react";
import React from "react";
import { useFastestAsteroid } from "../../hooks/useFastestAsteroid";
import { AccordionContent } from "./AsteroidsAccordionSection/AccordionContent";
import { Item } from "./Item";

export const FastestAsteroid = () => {
  const fastestAsteroid = useFastestAsteroid();
  const dayKey = fastestAsteroid.close_approach_data[0].close_approach_date;

  return (
    <Item>
      <AccordionContent dayData={fastestAsteroid} dayKey={dayKey} desc={<Trans id="fastest_asteroid" />} />
    </Item>
  );
};
