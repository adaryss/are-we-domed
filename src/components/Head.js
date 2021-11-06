import React from "react";
import { Helmet } from "react-helmet";
import { t } from "@lingui/macro"

export const Head = () => {
  return (
    <Helmet>
      <title>
        {t`title`}
      </title>
      <meta
        name="description"
        content={t`app_description`}
      />

      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
  );
};
