export const hostURL = "https://openpage.vercel.app";
export const appTitleSmall = "Open Page";
export const appTitle = "Open Page";
export const description =
  "Public metrics and analytics pages for your website, product and startups.";

export const head = {
  title: appTitle,
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { hid: "description", name: "description", content: description },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
};

export const pwa = {
  meta: {
    name: appTitleSmall,
    description,
    ogHost: hostURL,
    ogImage: "/social.png",
    twitterCard: "summary_large_image",
    twitterSite: "@fayazara",
    twitterCreator: "@fayazara",
  },
  manifest: {
    lang: "en",
    name: appTitle,
    short_name: appTitleSmall,
  },
};

export const axios = {
  baseURL: "/",
};

export const css = ["~/assets/styles.css"];

export const plugins = ["~/plugins/dataApi"];

export const buildModules = ["@nuxtjs/tailwindcss"];

export const modules = ["@nuxtjs/axios"];
