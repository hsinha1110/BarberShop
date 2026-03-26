import express from 'express';
import Stripe from 'stripe';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-02-24.acacia', // ✅ match everywhere
});

app.post('/payment-sheet', async (req, res) => {
  try {
    const customer = await stripe.customers.create();

    const ephemeralKey = await stripe.ephemeralKeys.create(
      { customer: customer.id },
      { apiVersion: '2025-02-24.acacia' }, // ✅ same version
    );

    const paymentIntent = await stripe.paymentIntents.create({
      amount: 10000,
      currency: 'inr',
      customer: customer.id,
      automatic_payment_methods: {
        // ✅ replaces payment_method_types
        enabled: true,
      },
    });

    res.json({
      paymentIntent: paymentIntent.client_secret,
      ephemeralKey: ephemeralKey.secret,
      customer: customer.id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message }); // ✅ better error response
  }
});

app.listen(3000, () => {
  console.log('Stripe server running on port 3000');
});
