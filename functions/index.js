/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

const functions = require("firebase-functions");
const express = require("express");
// const cors = require("cors")({ origin: true });
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NcBmGDRT8J0h34zcicu5HYw2LW8ya6qiBFKcLLHBzPqs9pPmwSYRkJVJO3wus3vY9ax3f4QYGfFBAVBrT4QJNal00IvX7Xelx"
);

const app = express();
const corsOptions = {
  origin: true, // Pass the function reference
  // ...
};

app.use(cors(corsOptions));
// app.use(cors());
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world "));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request received for this amount >>>", total);
  const PaymentIntent = await stripe.PaymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: PaymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
// http://127.0.0.1:5001/clone-c10b3/us-central1/api
