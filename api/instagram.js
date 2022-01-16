import axios from "axios";

export default async function handler(req, res) {
  if (req.query.username) {
    var url = "https://www.instagram.com/haxzie";
    const { data } = await axios.get(url);
    if (data.indexOf('meta property="og:description" content="') != -1) {
      let followers = data
        .split('meta property="og:description" content="')[1]
        .split("Followers")[0];
      res.status(200).json({
        status: "success",
        data: {
          followers,
        },
      });
    }
    // const { data } = await axios.get(
    //   `https://www.instagram.com/${req.query.username}/?__a=1`
    // );
    // const followers = data.graphql.user.edge_followed_by.count;
    // const profile_pic = data.graphql.user.profile_pic_url_hd;
    // const full_name = data.graphql.user.full_name;
    // res.status(200).json({
    //   status: "error",
    //   data: {
    //     followers,
    //     profile_pic,
    //     name: full_name,
    //   },
    // });
  } else {
    res.status(200).json({
      status: "error",
      message: "Please provide a valid instagram username",
    });
  }
}
