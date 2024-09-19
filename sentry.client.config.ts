// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://a837f0cd86493b7de759120455f3ed70@o4507651375235072.ingest.de.sentry.io/4507651379232848",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
