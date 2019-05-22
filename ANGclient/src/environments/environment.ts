// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  post_register: 'https://mcba.dwsapp.io/api/auth/register',
  post_login: 'https://mcba.dwsapp.io/api/auth/login',
  get_authenticate: 'https://mcba.dwsapp.io/api/user/me',
  get_merchant: 'https://mcba.dwsapp.io/api/merchant'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
