import React from "react";
import { roundNumberTwoDecimals } from "../../../utils/roundNumberTwoDecimals";
import { InfoItem } from "./InfoItem";
import PropTypes from "prop-types";
import { Trans } from "@lingui/react";

export const RightColItems = ({ dayData: { close_approach_data } }) => (
  <>
    <InfoItem
      title={<Trans id="miss_distance" />}
      content={
        <>
          {Math.round(
            close_approach_data[0].miss_distance.kilometers
          ).toLocaleString("cs-CZ")}{" "}
          km |{" "}
          {Math.round(
            close_approach_data[0].miss_distance.miles
          ).toLocaleString("en-US")}{" "}
          mi.
        </>
      }
    />
    <InfoItem
      title={<Trans id="speed" />}
      content={
        <>
          {roundNumberTwoDecimals(
            close_approach_data[0].relative_velocity.kilometers_per_hour
          ).toLocaleString("cs-CZ")}{" "}
          km/h |{" "}
          {roundNumberTwoDecimals(
            close_approach_data[0].relative_velocity.miles_per_hour
          ).toLocaleString("en-US")}{" "}
          mi./h
        </>
      }
    />
  </>
);

RightColItems.propTypes = {
	dayData: PropTypes.object.isRequired,
}
