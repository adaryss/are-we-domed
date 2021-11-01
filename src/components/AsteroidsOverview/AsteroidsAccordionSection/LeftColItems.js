import React from "react";
import { formatDay } from "../../../utils/formatDay";
import { getAverageDiameter } from "../../../utils/getAverageDiameter";
import { getClosestApproachTime } from "../../../utils/getClosestApproachTime";
import { roundNumberTwoDecimals } from "../../../utils/roundNumberTwoDecimals";
import { InfoItem } from "./InfoItem";
import PropTypes from "prop-types";

export const LeftColItems = ({
  dayData: {
    close_approach_data,
    estimated_diameter,
    is_potentially_hazardous_asteroid,
  },
  dayKey,
}) => (
  <>
    <InfoItem
      title="The closest approach"
      content={
        <>
          {getClosestApproachTime(
            close_approach_data[0].close_approach_date_full
          )}{" "}
          ({formatDay(dayKey, 'noYear')})
        </>
      }
    />
    <InfoItem
      title="Average diameter"
      content={
        <>
          {roundNumberTwoDecimals(
            getAverageDiameter(
              estimated_diameter.meters.estimated_diameter_min,
              estimated_diameter.meters.estimated_diameter_max
            )
          ).toLocaleString("cs-CZ")}{" "}
          m |{" "}
          {roundNumberTwoDecimals(
            getAverageDiameter(
              estimated_diameter.feet.estimated_diameter_min,
              estimated_diameter.feet.estimated_diameter_max
            )
          ).toLocaleString("en-US")}{" "}
          ft
        </>
      }
    />
    <InfoItem
      title="Potentially dangerous"
      content={<>{is_potentially_hazardous_asteroid ? "Yes" : "No"}</>}
    />
  </>
);

LeftColItems.propTypes = {
  dayData: PropTypes.object.isRequired,
  dayKey: PropTypes.string.isRequired,
};
