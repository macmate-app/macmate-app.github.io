# New Website

## Setup

Install the `timeout` command:

```
brew install coreutils
```

Install node.js libraries:

```
yarn install
```

Install new browsers for the playwright:

```
yarn playwright install
```

## Test and generate a production build

```
yarn test
```

## Prompt for chatGPT

I am creating a website to sell Mac apps. All the apps are listed in the Mac App Store.
My apps are mainly for productivity & creativity.
One of the apps is to help users to draft professional-looking icons quickly.
Another app is to help users to try out TypeScript code snippets conveniently.
Most of the users are developers or designers. Some of them are for general users.
All the apps are professionally built, not just small or hobby projects.
Please write me some marketing text for my website. I will use it to promote my apps.
Please do not mention specific apps. I want to keep the website generic.

## Todo

- add a blog section
- avoid hard-coding anything
  - dynamic import

## Notes

In dev mode, clicking the carousel still redirects.
It is because the click `event.target` is `img` instead of `a`.
We didn't handle the click event for an image.
We can ignore it, it has no impact on the production build.
