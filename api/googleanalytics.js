import { google } from "googleapis";
import { gaConfig } from "../config";

export default async (req, res) => {
  const startDate = req.query.startDate;
  const view = req.query.id;
  const auth = new google.auth.GoogleAuth({
    // Note the GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL email id must be added as a user to the Google analytics property.
    credentials: gaConfig,
    scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
  });

  const analytics = google.analytics({
    auth,
    version: "v3",
  });

  const response = await analytics.data.ga.get({
    "end-date": "today",
    ids: `ga:${view}`,
    metrics: "ga:pageviews",
    "start-date": startDate,
  });

  return res.status(200).json({
    status: "success",
    data: {
      pinned: response.data.rows[0][0],
      pageViews: response.data.rows[0][0],
    },
  });
};
