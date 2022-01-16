import axios from "axios";

export default async function handler(req, res) {
  if (req.query.id) {
    const { data } = await axios.get(
      `https://api.github.com/repos/${req.query.repo}`
    );
    res.status(200).json({
      status: "success",
      data: {
        pinned: data.stargazers_count,
        name: data.full_name,
        stars_count: data.stargazers_count,
        forks_count: data.forks_count,
        profile_pic: data.owner.avatar_url,
        profile_url: data.owner.html_url,
      },
    });
  } else {
    res.status(200).json({
      status: "error",
      message: "Please provide a valid repository name",
      hint: "chatwoot/chatwoot",
    });
  }
}
