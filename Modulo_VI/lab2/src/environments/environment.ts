// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyCgu97CNDTOKJG9ag_1uZKfhmn2pWtWEKQ",
    authDomain: "fir-auth-apm6.firebaseapp.com",
    databaseURL: "https://fir-auth-apm6.firebaseio.com",
    projectId: "fir-auth-apm6",
    storageBucket: "fir-auth-apm6.appspot.com",
    messagingSenderId: "356900685465"
  }
};