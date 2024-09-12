## <img src="./public/images/Header/Logo.svg">

BGIN's official website powered by Next.js and TailwindCSS.

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

## Getting Started

```bash
$ git clone git@github.com:bgin-global/bgin-homepage.git
$ cd bgin-homepage
$ npm i
$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy

When you push to any branch and create a pull request, the app will be automatically deployed to test.

When you push/merge to `main` branch, the app will be automatically deployed to production.

## Contribution Guideline

This section explains how to edit the contents of the website.
As the high level overview, you can mainly edit the contents under the folder `contents/` directly, and push it to GitHub to reflect the changes.

More details are explained in the following sections.

#### 0. Clone project and create the new branch

```bash
$ git clone git@github.com:bgin-global/bgin-homepage.git
$ cd bgin-homepage
$ git checkout -b yourname-001
```

If you've already cloned the project, please make sure that your main branch is up-to-date. And always create the new branch from `main`.

```
$ git checkout main
$ git pull origin main
$ git checkout -b yourname-001
```

### 1. Edit the contents

You can edit the contents under the folder `contents/` directly.

| Content               | Where to edit               |
| --------------------- | --------------------------- |
| Next Block Conference | /contents/upcomingEvents.ts |
| Next Layer2 Meeting   | /contents/upcomingEvents.ts |
| Next WG Calls         | /contents/upcomingEvents.ts |
| Roadmap               | /contents/roadmap.ts        |
| Project List          | /contents/projects.ts       |
| Working Group List    | /contents/workingGroups.ts  |
| Event                 | contents/events/...         |
| Partnerships          | contents/sponsors.ts        |

For other contents, please edit `app/` directly.

### 2. Push to new branch

```bash
$ git add .
$ git commit -m"write what you changed"
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

If you have a question, plz feel free to contact to @0xvon
