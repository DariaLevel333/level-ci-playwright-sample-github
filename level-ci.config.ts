import type { Config } from "@level-ci/cli";
import { ngrokConnection } from '@level-ci/ngrok';
export default {
 organization: "daria-osokina-1-levelaccess-com-kofcj",
 project: "daria-manual-website-1-mirko-dev",
 token: process.env.LEVEL_CI_TOKEN,
 server: "https://api.dev.userway.dev",
 connection: ngrokConnection({
    authtoken: process.env.NGROK_AUTHTOKEN,
    addr: 'http://localhost:1342',

    }),
  pages: [
      {url: "/index.html", devices: ["desktop"]}
    ],
 reportPaths: ['./level-ci-reports']
} satisfies Config;

//ngrok
// import type { Config } from '@level-ci/cli'
// import { ngrokConnection } from '@level-ci/ngrok'
 
// export default {
//   organization: 'volodymyr-kulyk-40-userway-org-lando',
//   project: 'sample-project-ngrok',
//   token: process.env.LEVEL_CI_TOKEN,
//   server: "https://api.dev.userway.dev",
//   connection: ngrokConnection({
//     addr: 'http://localhost:1342',
//     authtoken: "2hpftK26ATCj6DnGdXhcpoRnLDB_3Sda24QiS8fGYYRWTFgxd",
//   }),
//   pages: [{ url: '/article.html' }],
// } satisfies Config