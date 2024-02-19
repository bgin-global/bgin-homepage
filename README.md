# <img src="./public/images/Header/Logo.svg">

BGIN's (new) official website powered by Next.js and TailwindCSS.<br>
With simple, popular management workflow.

<br>

## Prepare

#### 1. install node.js

from https://nodejs.org/en/download

#### 2. install npm

```bash
$ sudo npm install -g npm
```

#### 3. use github

https://docs.github.com/en/get-started/quickstart/hello-world

also see [cheatsheets](https://training.github.com/downloads/github-git-cheat-sheet/)

<br>

## Getting Started

```bash
$ git clone git@github.com:bgin-global/bgin-homepage.git
$ cd bgin-homepage
$ npm i
$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<br>

## Deploy

When you push to any branch and create a pull request, the app will be automatically deployed to test.

When you push to `main` branch, the app will be automatically deployed to production.

<br>

## Management Workflow

This section explains the management workflow when you want to create/edit the events, working groups, documentations.
You can edit the markdown files under the folder `contents/` directly, and update the news when reflecting the changes to GitHub.

The example steps of the workflow are below↓

### 0. Cut the branch

```bash
$ git clone git@github.com:bgin-global/bgin-homepage.git
$ cd bgin-homepage
$ git checkout -b yourname-001
```

### 1. Create/Edit new File

Create `contents/**/~~~.md` and edit it. Please set the same top metadata as the other md files.

For instance, event's metadata is like:

```md
---
title: "Blockchain Summit 2023"
date: "2023 Mar. 29"
location: "New York, US"
---
```

All files follows markdown format.

### 2. Push to new branch

```bash
$ git add .
$ git commit -m"what you changed"
$ git push origin HEAD
```

then, go to the GitHub and create new Pull Request.

### 3. Review

Your updates will be reflected to preview site automatically.
Plz check the link and review it.

### 4. Merge

If the updates is file, merge the branch to `main`.
Then, deployment will run.

### 5. Update Remote

After updating, please renew your main.

```bash
$ git checkout main
$ git pull origin main
```

<br>

## Update Next Call Date

1. Go to ./contents/next-call-ts
2. Modify the parameter `nextCall`
3. Push

If you have a question, plz feel free to contact to @0xvon
