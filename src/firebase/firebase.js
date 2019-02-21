import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE__BUCKET,
  messagingSenderId: process.env.FIREBASE__MESSAGING_SENDER_ID
};
firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((snapChild) => {
//     expenses.push({
//       id: snapChild.key,
//       ...snapChild.val()
//     });
//   });
//   console.log(expenses);
// }, (e) => {
//   console.log("Error occured", e)
// });

// database.ref('expenses').push({
//   description: 'rent',
//   note: 'last month rent settled',
//   amount: 24500,
//   createdAt: 31000
// });

// database.ref().set({
//   name: 'nicholas',
//   age: 23,
//   stressLevel: 6,
//   job: {
//     title: 'software developer',
//     company: 'Google'
//   },
//   isSingle: false,
//   location: {
//     city: 'nairobi',
//     country: 'kenya'
//   }
// });

// database.ref('location/city').set('London');
// database.ref('attributes').set({
//   height: 170,
//   weight: 142
// }).then(() => {
//   console.log('Data saved correctly');
// }).catch((e) => {
//   console.log('An error occured', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });


// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val()
//   const name = val.name;
//   const job = val.job.title;
//   const company = val.job.company;

//   console.log(`${name} is a ${job} at ${company}`)
// }, (e) => {
//   console.log('Error occured', e);
// });