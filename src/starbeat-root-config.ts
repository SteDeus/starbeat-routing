
import { registerApplication, start } from "single-spa";
// import {
//   constructRoutes,
//   constructApplications,
//   constructLayoutEngine,
// } from "single-spa-layout";

registerApplication({
  name: "@starbeat/sidenav",
  app: () => System.import("@starbeat/sidenav"),
  activeWhen: "/",
});

registerApplication({
  name: "@starbeat/equipment",
  app: () => System.import("@starbeat/equipment"),
  activeWhen: ["/equipment", "/adapterequipment"],
});

registerApplication({
  name: "@starbeat/adapter",
  app: () => System.import("@starbeat/adapter"),
  activeWhen: ["/adapter", "/adapterequipment"],
});

start({
  urlRerouteOnly: true,
});

// import {
//   constructRoutes,
//   constructApplications,
//   constructLayoutEngine,
// } from "single-spa-layout";
// import { registerApplication, start } from "single-spa";

// const routes = constructRoutes(document.querySelector("#single-spa-layout"));
// const applications = constructApplications({
//   routes,
//   loadApp: ({ name }) => System.import(name),
// });
// // Delay starting the layout engine until the styleguide CSS is loaded
// const layoutEngine = constructLayoutEngine({
//   routes,
//   applications,
//   active: false,
// });

// applications.forEach(registerApplication);

// System.import("@react-mf/styleguide").then(() => {
//   // Activate the layout engine once the styleguide CSS is loaded
//   layoutEngine.activate();
//   start();
// });
