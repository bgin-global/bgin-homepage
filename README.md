# <img src="./public/images/Header/Logo.svg">

BGIN's (new) official website powered by Next.js and TailwindCSS.<br>
With simple, popular management workflow.

<br>

## Getting Started


```bash
$ npm i
$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

<br>

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

<br>

## Deploy

When you push to `main` branch, the app will be automatically deployed.

<br>

## Management Workflow

This section explains the management workflow when you want to create/edit the events, working groups, documentations.
You can edit the markdown files under the folder `posts/` directly, and update the news when reflecting the changes to GitHub.

The example steps of the workflow are below↓

### 1. Create/Edit new File

Create `posts/**/~~~.md` and edit it. Please set the same top metadata as the other md files.

For instance, event's metadata is like:

```md
---
title: 'Blockchain Summit 2023'
date: '2023 Mar. 29'
location: 'New York, US'
---
```

All files follows markdown format.

### 2. Push to new branch

Cut the new branch from main and push your updates.

### 3. Review

Your updates will be reflected to preview site automatically.
Plz check the link and review it.

### 4. Merge

If the updates is file, merge the branch to `main`.
Then, deployment will run.

<br>

If you have a question, plz feel free to contact to masatojames@wall-of-death.com
