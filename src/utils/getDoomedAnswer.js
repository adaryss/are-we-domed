import React from 'react'
import { Trans } from "@lingui/react";

export const getDoomedAnswer = (distance) => {
  const distanceNum = parseInt(distance);
  let answer = <Trans id="doomed_answer_probably_not_yet" />;

  if (distanceNum > 10000 && distanceNum < 190000) {
    answer = <Trans id="doomed_answer_probably_no" />;
  }

  if (distance < 10000) {
    answer = <Trans id="doomed_answer_maybe" />;
  }

  if (distance < 5000) {
    answer = <Trans id="doomed_answer_probably_yes" />;
  }

  if (distance === 0) {
    answer = <Trans id="yes" />;
  }

  return answer;
};
