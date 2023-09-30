
# docs/README-initial_setup.md

This file lists the commands I ran to set up the project in this directory,
and it contains the following sections:

- 0. "Cloning the Repo and Running the App"
     -  Because this project has already been set up, this is the only part of this file that is still relevant
- 1. "Commands to Create *"The Whole Shebang"*"
     - I figured all this out over several months by creating projects in the `always_learning_javascript` repo
     - Lists the commands originally run in `1-whole_shebang` to initialize a minimal "Hello world"-type project using:
       - Vite with Reactjs
       - MDB
       - TypeScript
       - ESLint
- 2. "Add Code From the `whole_shebang/projects/6-wsw_navbar_graphics_sliders` Project"
     - This code is in the `always_learning_javascript` repo


# 0. Cloning the Repo and Running the App

**Note:** I've already gone through this process, so the list of steps following this section
is for possible future reference only.

# 0.1. Cloning the Repo

Now that this work has been done, you can get a copy of the code by running the following command:

```
cd /var/www   # or whatever other dir you want to put the code in
git clone git@github.com:tomwhartung/seeyourmind.art.git
```

# 0.2. Running the App

**Note:** Running the app requires installing the latest version of `npm`.

- These instructions assume you already have installed `npm`

```
cd /var/www   # or whatever other dir you put the code in above
cd seeyourmind.art
npm install
npm run dev
```

Now open a browser window to the url output by the command.

- Usually the `npm run dev` command displays a url that looks like this:
  - [http://localhost:5173/](http://localhost:5173/)


# 1. Commands to Create *"The Whole Shebang"*

**The notes in the rest of this file are for historical purposes only!**

## 1.1. Optional: Upgrade `npm`

```
$ npm -v                                                       # Check current version of `npm`
9.6.7
$ sudo npm install -g npm@latest                               # Upgrade current version of `npm`
$ npm -v
10.1.0
$
```

## 1.2. Create New Project Using Vite, React, TypeScript, and MDB

Following are the commands run to create the project, along with their output:

[x] 1. When it asks for the `Project name`, type "Site"
[x] 2. Then accept the suggested "site" for the `Package name`

```
$ pwd
/var/www/seeyourmind.art
$ npm init vite@latest -- --template react-ts
✔ Project name: … Site
✔ Package name: … site

Scaffolding project in /var/www/seeyourmind.art/Site...

Done. Now run:

  cd Site
  npm install
  npm run dev

$ cd Site
$ npm i mdb-react-ui-kit

added 209 packages, and audited 210 packages in 31s

41 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

$ npm i react-router-dom --save

added 3 packages, and audited 213 packages in 3s

41 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
$ npm run lint

> site@0.0.0 lint
> eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0

$ npm run dev

  VITE v4.4.9  ready in 1117 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

**Note:** We use `react-router-dom` for menus.

## 1.3. Load Demo Site in Browser

Open a browser window to [http://localhost:5173/](http://localhost:5173/).

## 1.4. Load Into VSCode

Load the new project directory into VSCode and use Shift-Ctrl-M to ensure there are no problems.

## 1.5. Commit to Github

```
$ pwd
/var/www/seeyourmind.art
$ git add Site
$ git commit -m  'Added initial coding framework in the Site/ directory.  For details, see docs/01-Initial_Setup.md .'
[master e7a59bc] Added initial coding framework in the Site/ directory.  For details, see docs/01-Initial_Setup.md .
 16 files changed, 3308 insertions(+)
 create mode 100644 Site/.eslintrc.cjs
 create mode 100644 Site/.gitignore
 create mode 100644 Site/README.md
 create mode 100644 Site/index.html
 create mode 100644 Site/package-lock.json
 create mode 100644 Site/package.json
 create mode 100644 Site/public/vite.svg
 create mode 100644 Site/src/App.css
 create mode 100644 Site/src/App.tsx
 create mode 100644 Site/src/assets/react.svg
 create mode 100644 Site/src/index.css
 create mode 100644 Site/src/main.tsx
 create mode 100644 Site/src/vite-env.d.ts
 create mode 100644 Site/tsconfig.json
 create mode 100644 Site/tsconfig.node.json
 create mode 100644 Site/vite.config.ts
$ git add docs/01-Initial_Setup.md
$ git commit -m 'Updated docs/01-Initial_Setup.md with steps taken to install the initial coding framework for this Site.'
[master 37d5957] Updated docs/01-Initial_Setup.md with steps taken to install the initial coding framework for this Site.
 1 file changed, 57 insertions(+), 20 deletions(-)
$
```

## 1.6. Add a Custom `.gitignore` File

Add a custom `.gitignore` file to ignore all docs/.*.swp* files and check into github:

```
$ pwd
/var/www/seeyourmind.art
$ cat .gitignore
#
# .gitignore - cusTOMizations
# ---------------------------
# The main .gitignore file is Site/.gitignore
# This file is for ignoring files outside of the Site heirarchy
#   For example, we want to ignore all docs/.*.swp* files
#
# Editor directories and files
## .vscode/*
## !.vscode/extensions.json
## .idea
## .DS_Store
## *.suo
## *.ntvs*
## *.njsproj
## *.sln
*.sw?
 $ git add .gitignore
tomh@jane: /var/www/seeyourmind.art
 $ git commit -m 'Adding a custom .gitignore in the top-level directory of this repo to ignore all docs/.*.swp* files.'
[master 232aa8f] Adding a custom .gitignore in the top-level directory of this repo to ignore all docs/.*.swp* files.
 1 file changed, 17 insertions(+)
 create mode 100644 .gitignore
 $
```

## 1.7. Cleanup Logo Cruft

Run these commands to remove an unneeded logo file:

```
$ git rm  public/vite.svg
$ git commit -m 'Removed crufty logo file public/vite.svg .'
[master d324ac9] Removed crufty logo file public/vite.svg .
 1 file changed, 1 deletion(-)
 delete mode 100644 Site/public/vite.svg
$
```

# 2. Add Files From the `always_learning_javascript` Repo

## 2.1. Copy Code From the `whole_shebang/projects/6-wsw_navbar_graphics_sliders` Project

Run the following commands to add code from the `whole_shebang/projects/6-wsw_navbar_graphics_sliders`
project in the `always_learning_javascript` repo:

```
$ pwd
/var/www/seeyourmind.art
$ cd Site
$ pwd
/var/www/seeyourmind.art/Site
$ cp /var/www/always_learning/always_learning_javascript/whole_shebang/projects/6-wsw_navbar_graphics_sliders/index* .
$ mkdir ../delete_me_you_wuss/
$ mv src ../delete_me_you_wuss/
$ cp -r /var/www/always_learning/always_learning_javascript/whole_shebang/projects/6-wsw_navbar_graphics_sliders/src .
$ npm run dev
$
```

## 2.2. Sanity Checks

### 2.2.1. Check in VSCode

Load the `Site` directory into VSCode and ensure there are no problems.

- Use Ctrl+Shift-M to open the Problems pane
- Open several files just to make sure it's scanning them:
  - `Site/index-jungian.html`
  - `Site/jungian/*.tsx`
  - `Site/lib/jungian/ImageLib.ts`
  - `Site/lib/jungian/LocalStorageLib.ts`

### 2.2.2. Check in Browser

Test the code in the browser to ensure that it works ok.

- Note that the only that does anything is the Jungian option:
  - http://localhost:5173/index-jungian.html

## 2.3. Check Into Github

Assuming there are no problems in VSCode or the Browser, commit the changes:

```
$ pwd
/var/www/seeyourmind.art
$ git add Site
$ git commit -m 'Copied files from the whole_shebang/projects/6-wsw_navbar_graphics_sliders project in the always_learning_javascript repo into the Site site directory, removing a few in the process.'
[master 32161a5] Copied files from the whole_shebang/projects/6-wsw_navbar_graphics_sliders project in the always_learning_javascript repo into the Site site directory, removing a few in the process.
 41 files changed, 2446 insertions(+), 81 deletions(-)
 create mode 100644 Site/index-big_five.html
 create mode 100644 Site/index-enneagram.html
 create mode 100644 Site/index-jungian.html
 create mode 100644 Site/index-sun_signs.html
 rewrite Site/src/App.css (91%)
 rewrite Site/src/App.tsx (91%)
 create mode 100644 Site/src/AppBigFive.tsx
 create mode 100644 Site/src/AppEnneagram.tsx
 create mode 100644 Site/src/AppJungian.tsx
 create mode 100644 Site/src/AppSunSigns.tsx
 create mode 100644 Site/src/JungianMenuAndPages.tsx
 delete mode 100644 Site/src/assets/react.svg
 create mode 100644 Site/src/big_five/Create.tsx
 create mode 100644 Site/src/big_five/Help.tsx
 create mode 100644 Site/src/big_five/Refine.tsx
 create mode 100644 Site/src/big_five/View.tsx
 create mode 100644 Site/src/customizations.css
 create mode 100644 Site/src/enneagram/Create.tsx
 create mode 100644 Site/src/enneagram/Help.tsx
 create mode 100644 Site/src/enneagram/Refine.tsx
 create mode 100644 Site/src/enneagram/View.tsx
 create mode 100644 Site/src/favicon.ico
 create mode 100644 Site/src/jungian/Create.tsx
 create mode 100644 Site/src/jungian/Help.tsx
 create mode 100644 Site/src/jungian/Refine.tsx
 create mode 100644 Site/src/jungian/View.tsx
 create mode 100644 Site/src/lib/CanvasLib.tsx
 create mode 100644 Site/src/lib/jungian/ImageLib.ts
 create mode 100644 Site/src/lib/jungian/LocalStorageLib.ts
 create mode 100644 Site/src/lib/jungian/ScoreSliderLib.tsx
 create mode 100644 Site/src/lib/jungian/SquareSizeSliderLib.tsx
 create mode 100644 Site/src/main-big_five.tsx
 create mode 100644 Site/src/main-enneagram.tsx
 create mode 100644 Site/src/main-jungian.tsx
 create mode 100644 Site/src/main-sun_signs.tsx
 create mode 100644 Site/src/sun_signs/Create.tsx
 create mode 100644 Site/src/sun_signs/Help.tsx
 create mode 100644 Site/src/sun_signs/Refine.tsx
 create mode 100644 Site/src/sun_signs/View.tsx
$
```

## 2.4. Copy Documentation From the `whole_shebang/projects/6-wsw_navbar_graphics_sliders` Project

Run the following command to add a key bit of documentation from the `whole_shebang/projects/6-wsw_navbar_graphics_sliders`
project in the `always_learning_javascript` repo, and commit it to github:

```
$ pwd
/var/www/seeyourmind.art
$ cd docs
$ pwd
/var/www/seeyourmind.art/docs
$ cp  /var/www/always_learning/always_learning_javascript/whole_shebang/projects/6-wsw_navbar_graphics_sliders/README-React_notes.md ./02-React_notes.md
$ git add 02-React_notes.md
$ git commit -m 'Adding docs/02-React_notes.md , a file containing important documentation copied from the `whole_shebang/projects/6-wsw_navbar_graphics_sliders` project.'
$
```

