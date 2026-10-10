# Chronicle — Sanjay's Personal Site

A cinematic personal site built with plain HTML, CSS, and JavaScript.
No frameworks. No build step. Just files.

## Live site

Once deployed: `https://imsanjay-h.github.io/Chronicle`

## Deploy to GitHub Pages (step by step)

### 1. Create the repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `Chronicle`
3. Set to **Public**
4. Click **Create repository**

### 2. Upload the files

1. On the new repo page, click **uploading an existing file**
2. Drag the entire folder contents:
   - `index.html`
   - `about.html`
   - `movies.html`
   - `anime.html`
   - `connect.html`
   - `README.md`
   - `assets/` (the whole folder)
3. Click **Commit changes**

### 3. Enable GitHub Pages

1. Go to **Settings** (top of repo)
2. In the left sidebar, click **Pages**
3. Under **Source**, select `Deploy from a branch`
4. Branch: `main` · Folder: `/ (root)`
5. Click **Save**
6. Wait ~1 minute
7. Visit: `https://imsanjay-h.github.io/Chronicle`

### 4. To update later

Just edit any file on GitHub (click the file → pencil icon → edit → commit).
The site updates automatically in ~30 seconds.

## Adding new films

Open `assets/movies-data.js` and add to the relevant tier:

```js
{ t: "Film Title", y: 2024, r: 4.5, d: "Director", note: "Your thoughts" }