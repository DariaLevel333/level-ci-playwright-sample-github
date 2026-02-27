import type { Config } from "@level-ci/cli";
import { ngrokConnection } from '@level-ci/ngrok';
export default {
 organization: "daria-osokina-1-levelaccess-com-kofcj",
 project: "level-ci-playwright-sample-github",
 token: process.env.LEVEL_CI_TOKEN,
 server: "https://api.dev.userway.dev",
 reportPaths: ['./level-ci-reports']
} satisfies Config;


// import type { Config } from "@level-ci/cli";
// import { ngrokConnection } from '@level-ci/ngrok';
// export default {
//  organization: "daria-osokina-1-levelaccess-com-kofcj",
//  project: "level-ci-playwright-sample-github",
//  token: process.env.LEVEL_CI_TOKEN,
//  server: "https://api.dev.userway.dev",
//  connection: ngrokConnection({
//     authtoken: process.env.NGROK_AUTHTOKEN,
//     addr: 'http://localhost:1342',
//     }),
//   pages: [
//       {url: "/index.html", devices: ["desktop"]}
//     ],
//  reportPaths: ['./level-ci-reports']
// } satisfies Config;