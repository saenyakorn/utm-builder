# UTM Builder with short link

"UTM" stands for "Urchin Tracking Module" and is a way to track the effectiveness of your marketing campaigns. It is a URL parameter that is added to the end of a link. For example, `https://domain.com/?utm_source=example&utm_medium=example&utm_id=example`.

According to [Collect campaign data with custom URLs](https://support.google.com/analytics/answer/1033863?hl=en#zippy=%2Cin-this-article) blog, Google Analytics can track utm by the following parameters:

| parameters   | requried                                                                        | required |
| ------------ | ------------------------------------------------------------------------------- | :------: |
| utm_source   | Identify the advertiser, site, publication                                      |   yes    |
| utm_medium   | The advertising or marketing medium, for example: cpc, banner, email newsletter |   yes    |
| utm_campaign | The individual campaign name, slogan, promo code, etc. for a product.           |   yes    |
| utm_term     | Identify paid search keywords.                                                  |    no    |
| utm_content  | Used to differentiate similar content, or links within the same ad.             |    no    |

In order to understand what and how UTM work in Google Analytics, you can read [Google Analytics UTM parameters explained](https://www.pragm.co/post/google-analytics-utm-parameters-explained).

# Features

- [x] Generate UTM link with parameters
- [x] Generate short link with UTM parameters using [https://short.io](https://short.io) API with custom domain

# Environment Variables

Environment variables are stored in `.env` file. It contains the following variables:

| Variable Name            | Description                                                 |
| ------------------------ | ----------------------------------------------------------- |
| VITE_SHORT_IO_DOMAIN     | the custom domain for the shorten link                      |
| VITE_SHORT_IO_PUBLIC_KEY | the public api key for [https://short.io](https://short.io) |

To get the short.io public API key.

1. Enter [https://short.io/docs/api](https://short.io/docs/api).
2. Click "Create API key".
3. Add a Public key.

> ⭐️ Feel free to fork this project and change the domain to your own by changing the environment variables.

# Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request. This project based on [SvelteKit](https://kit.svelte.dev/). You can read the [SvelteKit documentation](https://kit.svelte.dev/docs) to learn about SvelteKit.

## Developing

Once you clone the project, first you need to install the dependencies

```bash
pnpm install
```

Then, you can run the project in development mode

```bash
pnpm dev
```

The project will be running at [http://localhost:5173/](http://localhost:5173/).

## Building

To build the static site for production, please run

```
pnpm build
```

## Deploying

This project is developed using [Github Page](https://pages.github.com/). It's use `gh-pages` branch to deploy the static site. This project already provides Github Action for deployment.

To deploy the project, one thing you have to do is `dispatching` the [Deployment Workflow](https://github.com/saenyakorn/utm-builder/actions/workflows/deploy.yaml) then the site will be deployed automatically using latest version of `main` branch.

