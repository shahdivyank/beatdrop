This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## :speaker: BeatDrop - "hear the world from another's perspective"

## What is BeatDrop?

BeatDrop is a geographic-based music-sharing web application that allows users to hear the world from another’s perspective
Catalog special moments by linking current location to a song and sharing with world in the form of a BeatDrop

## Figma

[Click Here to View Figma](https://www.figma.com/file/wecb185mWk9vv38hyGGbDF/R'Parts?node-id=0%3A1&t=TYSMdw7hHYYr4bMz-1)

## Dev Link

(https://beatdrop-dev-lpbgh7zwda-uw.a.run.app/)

## Tools & Technologies Used

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

![Firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)

![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

## Features

**Sign Up / Log-In:**

- Users can login to their respective accounts. Once logged in, users are now able to view the map.

**Dashboard:**

- Showcases community and private beatdrops on a map using Google Maps API.
- Displays a feed of beatdrops, which displays the song, user, and time posted.
- Once user selects a beatdrop from either the map or feed, a pop-up will appear displaying more information regarding that beatdrop including captions, tags, a preview of the song, song information, and likes.

**Upload:**

- Users are able to upload a beatdrop from the dashboard.
- Using the Spotify Web API, users are able to search any song they would like to link to their location.
- Users are able to add tags and a caption to their post to personalize their beatdrop.
- Using the Geocoding API, the location will be displayed on their beatdrop.

**Profile:**

- Showcases beatdrops dropped by the logged-in user.
- User is able to view, delete, and edit beatdrop. Uses Static Maps API to showcase a snippet of the location in which the user dropped the beat. Uses Geocoding API to grab the location and display it on the user's profile.
- User is able to update bio.

**About:**

- Showcases the origins of beatdrop.
- Displays tech stack and dev team.

## Final Mockup

### Landing Page

![pika-1689977584861-1x](https://github.com/shahdivyank/beatdrop/assets/72523111/2dafb3ee-0f1c-4aab-91ed-655c963a8f5d)

### Dashboard / Map

![pika-1689977739786-1x](https://github.com/shahdivyank/beatdrop/assets/72523111/0cc5570e-f038-4703-aa9f-f718db6827f6)
![pika-1689977800136-1x](https://github.com/shahdivyank/beatdrop/assets/72523111/a8ead0e9-58e2-4ae9-a143-43d3f7c4b871)

### Public and Private Drops

Public:
![pika-1689977881172-1x](https://github.com/shahdivyank/beatdrop/assets/72523111/2e03882a-6bf1-46dc-91bc-56f5cec37e19)

Private:
![pika-1689977920004-1x](https://github.com/shahdivyank/beatdrop/assets/72523111/9e20d65e-45a7-4711-ad70-46a4c8acaad9)

### View Beatdrop

![pika-1689977997361-1x](https://github.com/shahdivyank/beatdrop/assets/72523111/8a233ac0-eeb4-45ca-958a-dac1c9e9e4a4)

### Upload Beatdrop

Empty:
![pika-1689978046258-1x](https://github.com/shahdivyank/beatdrop/assets/72523111/d29709ba-faef-4b6c-bd47-17e0a3115580)

Filled:
![pika-1689978074225-1x](https://github.com/shahdivyank/beatdrop/assets/72523111/e2f13b1c-236a-450b-9167-7bb8b3d025bb)

### User Profile

![pika-1689978133660-1x](https://github.com/shahdivyank/beatdrop/assets/72523111/1c5a9a35-aa54-40e8-92fc-4cbad61ae00f)
![pika-1689978153686-1x](https://github.com/shahdivyank/beatdrop/assets/72523111/63c88197-3902-4d05-b255-fcf3b6856828)

### About Beatdrop

![pika-1689978210625-1x](https://github.com/shahdivyank/beatdrop/assets/72523111/6bcccfd8-5a01-412e-8e66-75dfd0c5c7b3)
![pika-1689978241383-1x](https://github.com/shahdivyank/beatdrop/assets/72523111/f114be87-2cc3-459e-b524-c1a68fd90c61)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
