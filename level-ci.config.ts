import type { Config } from "@level-ci/cli";

export default {
 organization: "daria-osokina-1-levelaccess-com-kofcj",
 project: "level-ci-playwright-sample-github",
 token: process.env.LEVEL_CI_TOKEN,
 server: "https://api.dev.userway.dev",
 override: {
    "branch-cat": {
      scope: "delta",
    },
  },
 reportPaths: ['./level-ci-reports']
} satisfies Config;