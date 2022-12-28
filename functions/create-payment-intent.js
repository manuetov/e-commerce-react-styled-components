// serverless funtion to secure the data
// domain/.netlify/functions/create-payment-intent
// use Netlity CLI instead my own server or heroku or digital ocean etc..
require("dotenv").config();

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async function (event, context) {
  if (event.body) {
   //  console.log(event);
    const { cart, shipping_fee, total_amount } = JSON.parse(event.body);
   //  console.log(cart);
    const calculateOrderAmount = () => {
      return shipping_fee + total_amount;
    };
   //  testing with Stripe's API instead own API or de backend etc..
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: "eur",
      });
      // sending back to createPaymentIntent()
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: error.message }),
      };
    }
  }
  return {
    statusCode: 200,
    body: "Create Payment Intent",
  };
};
