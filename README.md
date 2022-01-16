# Openpage

Public metrics and analytics pages for your website, product and startups.

![OpenPage](https://i.imgur.com/6Lfa5No.png)

The site is made with Nuxt, Tailwindcss and uses Vercel serverless functions to fetch data from respective services.

## How to get started

1. You need to host this site on Vercel.
2. Get the api keys for your services. (Instructions here)
3. Save the tokens as environment variables in your vercerl account.

## How to get twitter credentials

> TODO

## How to get youtube channel statistics credentials

This requires a Google API Credentials for Youtube and creating a Google service account.

### Enabling youtube api for your Google account.

1. Navigate to [Google developer console](https://console.developers.google.com/)
2. Create a new Google project or select an existing one.
3. Go to Credentials -> Create Credentials -> Service account. Enter all your project details.
4. Click on `Enable APIs and Services` and select `YouTube Data API V3` and enable it.

### Getting credentials from by enabling a service account.

1. Navigate to [Google Service Accounts](https://console.developers.google.com/iam-admin/serviceaccounts)
2. Click on `Create Key` and choose `JSON` format

## How to get Google analytics credentials

> TODO

## How to get stripe credentials

> TODO

## How to get gumroad credentials

> TODO

## How to get gumroad credentials

> TODO

## Customising the page

You can remove the link to this Github repository and just select the services which you'd like to showcase on the website.

## How to host your page?

1. Commit the changes to your github repository.
2. Create a vercel account and link your vercel account.
3. Create a new project in your vercel account and select the repository you created in your github account.
4. Override `Build and Output Settings` and set `Build Command` to `yarn generate`
5. Set all the environment variables in your vercel account.

## Environment variables

**Twitter credentials**

- TWITTER_API_KEY
- TWITTER_API_SECRET
- TWITTER_BEARER_TOKEN
- TWITTER_ACCESS_TOKEN
- TWITTER_ACCESS_TOKEN_SECRET

**Google analytics and Youtube**

- GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY
- GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL

**Gumroad**

- GUMROAD_API_KEY

**Stripe**

- STRIPE_SECRET_KEY

## Local development setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).
