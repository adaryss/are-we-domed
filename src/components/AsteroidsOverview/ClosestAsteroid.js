import { Trans } from "@lingui/react";
import React from "react";
import { useClosestAsteroid } from "../../hooks/useClosestAsteroid";
import { AccordionContent } from "./AsteroidsAccordionSection/AccordionContent";
import { Item } from "./Item";

export const ClosestAsteroid = () => {
  const closestAsteroid = useClosestAsteroid();
  const dayKey = closestAsteroid.close_approach_data[0].close_approach_date;

  return (
    <Item>
      <AccordionContent dayData={closestAsteroid} dayKey={dayKey} desc={<Trans id="closest_asteroid" />} />
    </Item>
  );
};
