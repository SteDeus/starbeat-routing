
import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@starbeat/sidenav",
  app: () => System.import("@starbeat/sidenav"),
  activeWhen: "/",
});

// registerApplication({
//   name: "sidenav",
//   app: () =>
//     System.import(
//       "http://localhost:4200/main.js"
//     ),
//   activeWhen: ["/"]
// });

// singleSpa.registerApplication(
//   'equipment',
//   () => System.import('equipment'),
//   location => location.pathname.startsWith('/equipment')
// );

// registerApplication({
//   name: "sidenav",
//   app: () => 
//     System.import("sidenav"),
//   activeWhen: ["/"]
// });

// applications.forEach(registerApplication);

start({
  urlRerouteOnly: true,
});
