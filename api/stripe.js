const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const amount = await getStripeRevenue(stripe, 1610015305, 1641551305);
  res.status(200).json({
    status: "success",
    data: {
      revenue: amount,
      pinned: amount,
    },
  });
}

async function getStripeRevenue(
  stripe,
  startRangeTimestamp,
  endRangeTimestamp
) {
  // credit here: https://stackoverflow.com/a/53775391/3015595
  const paymentIntentsInCents = await stripe.paymentIntents.list({
    created: { gte: startRangeTimestamp, lte: endRangeTimestamp },
    limit: 100, // Maximum limit (10 is default)
  });

  if (!paymentIntentsInCents) {
    console.log(`LOG: paymentIntentsInCents`, paymentIntentsInCents);
    console.error(
      `❌ ERROR: either couldn't get payouts from Stripe or none found for this date range`
    );
    console.log(
      `LOG: This may happen if you run this at the start of the month and there are no payouts yet.`
    );
    console.log(
      `LOG: Try changing the startRangeTimestamp or endRangeTimestamp.`
    );
    return 0;
  }

  // paymentIntents returned by Stripe API are in cents, so we divide by 100
  const paymentIntents = paymentIntentsInCents.data
    .filter((paymentIntent) => paymentIntent.status === "succeeded")
    .map((paymentIntent) => {
      return paymentIntent.amount / 100;
    });

  if (!paymentIntents) {
    console.error(
      `❌ ERROR: Something went wrong converting the paymentIntentsInCents to dollars`
    );
    console.log(`LOG: paymentIntents`, paymentIntents);
    return 0;
  }

  const amountTotal = calculateAmountTotal(paymentIntents);

  if (!amountTotal) {
    console.error(
      `❌ ERROR: Something went wrong calculating the total amount`
    );
    console.log(`LOG: paymentIntentsInCents`, paymentIntentsInCents);
    console.log(`LOG: amountTotal`, amountTotal);
    return 0;
  }

  return amountTotal;
}

function calculateAmountTotal(paymentIntents) {
  if (paymentIntents.length === 0) {
    return 0;
  }

  // Some months there may have one payout
  if (paymentIntents.length === 1) {
    return paymentIntents[0];
  }

  return paymentIntents.reduce((a, b) => a + b);
}
