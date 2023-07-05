const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const { auth } = require("express-oauth2-jwt-bearer");
const authConfig = require("./src/auth_config.json");
const bodyParser = require("body-parser");
const stripe = require("stripe")("sk_test_51NPL3cSDIiXAZf0pUItTYAUNd8AbbGkpAkCg4Wk8okAIL339jb3W5TNoOswT5ZOzduGXLv3KdSNMl9cWJETdszB400Uo8LdD3n");
const mongoose = require('mongoose');

const app = express();

const port = process.env.API_PORT || 3001;
const appPort = process.env.SERVER_PORT || 3000;
const appOrigin = authConfig.appOrigin || `http://localhost:${appPort}`;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/donate_ease');
  console.log('MongoDB connected')
}

const formSchema = new mongoose.Schema({
  username: String,
  email: String,
  phoneNumber: Number,
  aadharNumber: Number,
  address: String,
  state: String,
  nationality: String,
  cause: String,
  isPrivate: Boolean,
  isPublic: Boolean,
  whatsappNumber: Number,
  bankAccountHolder: Number,
  bankAccountNumber: Number,
  ifscCode: Number,
  branch: String,
  estimatedAmount: Number,
});

const Form = mongoose.model('Form', formSchema);

if (
  !authConfig.domain ||
  !authConfig.audience ||
  authConfig.audience === "YOUR_API_IDENTIFIER"
) {
  console.log(
    "Exiting: Please make sure that auth_config.json is in place and populated with valid domain and audience values"
  );

  process.exit();
}

app.use(morgan("dev"));
app.use(helmet());
app.use(cors({ origin: appOrigin }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const checkJwt = auth({
  audience: authConfig.audience,
  issuerBaseURL: `https://${authConfig.domain}/`,
  algorithms: ["RS256"],
});

app.get("/api/external", checkJwt, (req, res) => {
  res.send({
    msg: "Your access token was successfully validated!",
  });
});

app.use(bodyParser.json());

app.post('/api/donateEase', async (req, res) => {
  try {
    let form = new Form();
    form.username = req.body.username;
    form.email = req.body.email;
    form.phoneNumber = req.body.phoneNumber;
    form.aadharNumber = req.body.aadharNumber;
    form.address = req.body.address;
    form.state = req.body.state;
    form.nationality = req.body.nationality;
    form.cause = req.body.cause;
    form.isPrivate = req.body.isPrivate;
    form.isPublic = req.body.isPublic;
    form.whatsappNumber = req.body.whatsappNumber;
    form.bankAccountHolder = req.body.bankAccountHolder;
    form.bankAccountNumber = req.body.bankAccountNumber;
    form.ifscCode = req.body.ifscCode;
    form.branch = req.body.branch;
    form.estimatedAmount = req.body.estimatedAmount;
    
  

    const doc = await form.save();
    console.log(doc);
    res.json(doc);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.post("/api/fundraisers", async (req, res) => {
  try {
    const formData = req.body;

    // Create a new instance of the Fundraiser model with the form data
    const fundraiser = new Fundraiser(formData);

    // Save the fundraiser data to the database
    await fundraiser.save();

    res.status(200).json({ message: "Fundraiser data saved successfully." });
  } catch (error) {
    console.error("Error saving fundraiser:", error);
    res.status(500).json({ error: "An error occurred while saving the fundraiser data." });
  }
});

app.post("/api/payments", async (req, res) => {
  try {
    const { amount, currency, email } = req.body;

    // Create a payment intent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method_types: ["card"],
      receipt_email: email,
    });

    // Send the client secret back to the client
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error processing payment:", error);
    res.status(500).json({ error: "An error occurred while processing the payment." });
  }
});

app.listen(port, () => console.log(`API Server listening on port ${port}`));
