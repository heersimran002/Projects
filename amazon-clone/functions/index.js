/* eslint-disable max-len */
const express = require("express");
const functions = require("firebase-functions");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51M3BiKB3zG9bNnfSTUH89S0JXIr4bnxHXZZ0GMXBZ3WeKNeaOZgfsWFc1jR3L2THf5EhD18vdYGYgKOiewnHrgr500VPVoyRYW"
);

const app = express();
// eslint-disable-next-line object-curly-spacing
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment request recieved", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  console.log(paymentIntent);
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
