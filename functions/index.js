const functions = require("firebase-functions");
const express = require("express");
const admin = require("firebase-admin");
// to fix cors error
const cors = require("cors");

// use express
const app = express();
app.use(cors({ origin: true }));
// initialize app
admin.initializeApp({
  credential: admin.credential.applicationDefault(), //admin.credential.cert("./serviceAccountKey.json"),
  databaseURL: "https://odontomanager-95368-default-rtdb.firebaseio.com",
});
// use firestore database
const db = admin.firestore();

// import crud form patients
app.use(require("./routes/Patients.routes"));
// import crud form inventory
app.use(require("./routes/Stock.routes"));

// function app
exports.app = functions.https.onRequest(app);
