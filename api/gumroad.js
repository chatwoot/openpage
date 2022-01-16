import axios from "axios";

export default async (req, res) => {
  const apiKey = process.env.GUMROAD_API_KEY;
  // Your product id
  const productId = req.query.id;
  const { data } = await axios.get(
    `https://api.gumroad.com/v2/products/${productId}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    }
  );

  const { product } = data;
  const sales = product.sales_usd_cents / 100;

  return res.status(200).json({
    status: "success",
    data: {
      pinned: sales,
      revenue: sales,
      label: `$${sales}`,
    },
  });
};
