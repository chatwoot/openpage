import { TwitterClient } from "twitter-api-client";
import { twitterConfig } from "../config";

const twitterClient = new TwitterClient(twitterConfig);

export default async function handler(req, res) {
  if (req.query.id) {
    const data = await twitterClient.accountsAndUsers.usersSearch({
      q: req.query.id,
    });
    res.status(200).json({
      status: "success",
      data: {
        pinned: data[0].followers_count,
        name: data[0].name,
        screenname: data[0].screen_name,
        followers: data[0].followers_count,
        following: data[0].friends_count,
        profile_pic: data[0].profile_image_url_https.replace(
          "_normal.jpg",
          "_400x400.jpg"
        ),
        profile_banner: data[0].profile_banner_url,
      },
    });
  } else {
    res.status(200).json({
      status: "error",
      message: "Please provide a valid twitter username",
    });
  }
}
