// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'http://localhost:55279/',
  categoriesUrl: "category/",
  orderUrl: "orders/",
  availableOrdersUrl: "available/",
  completedOrdersUrl: "completed/",
  productsUrl: "products/",
  usersUrl: "users/",
  userRegisterUrl: "register/",
  userLoginUrl: "authenticate/",
  statisticsUrl: 'stats/',
  totalWorthUrl: 'totalworth/',
  couriersUrl: "couriers/",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
