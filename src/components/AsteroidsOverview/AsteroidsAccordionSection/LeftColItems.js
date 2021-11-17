import React from "react";
import { formatDay } from "../../../utils/formatDay";
import { getAverageDiameter } from "../../../utils/getAverageDiameter";
import { getClosestApproachTime } from "../../../utils/getClosestApproachTime";
import { roundNumberTwoDecimals } from "../../../utils/roundNumberTwoDecimals";
import { InfoItem } from "./InfoItem";
import PropTypes from "prop-types";
import { Trans } from "@lingui/react";
import { useSelector } from "react-redux";
import { selectLang } from "../../../selectors/lang";

export const LeftColItems = ({
  dayData: {
    close_approach_data,
    estimated_diameter,
    is_potentially_hazardous_asteroid,
  },
  dayKey,
}) => {
  const appLang = useSelector(selectLang);

  return (
    <>
      <InfoItem
        title={<Trans id="closest_approach" />}
        content={
          <>
            {getClosestApproachTime(
              close_approach_data[0].close_approach_date_full
            )}{" "}
            ({formatDay(dayKey, "noYear", appLang)})
          </>
        }
      />
      <InfoItem
        title={<Trans id="average_diameter" />}
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
        title={<Trans id="potentially_dangerous" />}
        content={
          <>
            {is_potentially_hazardous_asteroid ? (
              <Trans id="yes" />
            ) : (
              <Trans id="no" />
            )}
          </>
        }
      />
    </>
  );
};

LeftColItems.propTypes = {
  dayData: PropTypes.object.isRequired,
  dayKey: PropTypes.string.isRequired,
};
