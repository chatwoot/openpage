import { google } from "googleapis";
import { youtubeConfig } from "../config";

export default async (req, res) => {
  if (req.query.id) {
    const auth = new google.auth.GoogleAuth({
      credentials: youtubeConfig,
      scopes: ["https://www.googleapis.com/auth/youtube.readonly"],
    });

    const youtube = google.youtube({
      auth,
      version: "v3",
    });

    const response = await youtube.channels.list({
      id: req.query.id,
      part: "statistics",
    });

    const channel = response.data.items[0];
    const { subscriberCount, viewCount } = channel.statistics;

    return res.status(200).json({
      status: "success",
      data: {
        pinned: subscriberCount,
        subscribers: subscriberCount,
        views: viewCount,
      },
    });
  } else {
    res.status(400).json({
      status: "error",
      message: "Please provide a channel id",
    });
  }
};
