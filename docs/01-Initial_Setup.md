
# docs/README-initial_setup.md

These are the commands run to set up the project in this directory.

# 0. About This File

This file contains the following sections:

- 1. "Commands to Create *"The Whole Shebang"*"
     - Commands run in `1-whole_shebang` to initialize a minimal "Hello world"-type project using:
       - Vite with Reactjs
       - MDB
       - TypeScript
       - ESLint
- 2. "Add Code From the `whole_shebang/projects/6-wsw_navbar_graphics_sliders` Project"
     - This code is in the `always_learning_javascript` repo

# 1. Commands to Create *"The Whole Shebang"*

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


## 2.1. Copy the `index*.html` Files

The `index*.html` files contain the home page's top menu options:

- Home icon
- En - Pages in English
- Es - Pages in Spanish
- Fr - Pages in French

**We will update these later.**
For now, run the following commands to copy them as-is.

```
pwd       # /var/www/always_learning/always_learning_javascript/whole_shebang/projects/
ls -al 4-wsw_navbar/index*.html
cp 4-wsw_navbar/index*.html 6-wsw_navbar_graphics_sliders/
cp 4-wsw_navbar/src/favicon.ico 6-wsw_navbar_graphics_sliders/src/
cd ../..
pwd       # /var/www/always_learning/always_learning_javascript/
git add whole_shebang/projects/6-wsw_navbar_graphics_sliders/
git commit -m 'Copied the whole_shebang/projects/4-wsw_navbar/index*.html files to whole_shebang/projects/6-wsw_navbar_graphics_sliders/ .'
```

## 2.2. Copy the Language-Specific Files

These files define the trivial components we use for testing the menus.

### 2.2.1. Copy the English `4-wsw_navbar/src/en/*` Files

```
pwd       # /var/www/always_learning/always_learning_javascript/whole_shebang/projects
ls -al 4-wsw_navbar/src/en/
cp -r  4-wsw_navbar/src/en/ 6-wsw_navbar_graphics_sliders/src/
cd ../..
pwd       # /var/www/always_learning/always_learning_javascript/
git add whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/en/
git commit -m 'Copied the English language files in whole_shebang/projects/4-wsw_navbar/src/en/ to whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/en .'
```

### 2.2.2. Copy the Spanish `4-wsw_navbar/src/es/*` Files

```
pwd       # /var/www/always_learning/always_learning_javascript/whole_shebang/projects
ls -al 4-wsw_navbar/src/es/
cp -r 4-wsw_navbar/src/es/ 6-wsw_navbar_graphics_sliders/src/
cd ../..
pwd       # /var/www/always_learning/always_learning_javascript/
git add  whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/es/
git commit -m 'Copied the Spanglish language files in whole_shebang/projects/4-wsw_navbar/src/es/ to whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/es .'
```

### 2.2.3. Copy the French `4-wsw_navbar/src/fr/*` Files

```
pwd       # /var/www/always_learning/always_learning_javascript/whole_shebang/projects
ls -al 4-wsw_navbar/src/fr/
cp -r 4-wsw_navbar/src/fr/ whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/
cd ../..
pwd       # /var/www/always_learning/always_learning_javascript/
git add whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/fr/
git commit -m 'Copied the French language files in whole_shebang/projects/4-wsw_navbar/src/fr/ to whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/fr .'
```


## 2.3. Copy the `src/main*.tsx` Files

```
pwd       # /var/www/always_learning/always_learning_javascript/whole_shebang/projects
l 4-wsw_navbar/src/main*
cp  4-wsw_navbar/src/main* 6-wsw_navbar_graphics_sliders/src/
cd ../..
pwd       # /var/www/always_learning/always_learning_javascript/
git add  whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/main*
git commit -m 'Copied the whole_shebang/projects/4-wsw_navbar/src/main* files to whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/ .'
```

## 2.4. Copy the `src/App*.tsx` Files

These files provide "Hello world" text on the home page for each language.

- Note that this text remains visible after clicking on the time-related options in the top menu for each language-specific page

```
pwd       # /var/www/always_learning/always_learning_javascript/whole_shebang/projects
l 4-wsw_navbar/src/App*.tsx
cp 4-wsw_navbar/src/App*.tsx 6-wsw_navbar_graphics_sliders/src/
cd ../..
pwd       # /var/www/always_learning/always_learning_javascript/
git add whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/App*
git commit -m 'Copied the whole_shebang/projects/4-wsw_navbar/src/App*.tsx files to whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/ .'
```

## 2.5. Copy the `src/*.css` Files

These files provide some basic styles for the App.

```
pwd       # /var/www/always_learning/always_learning_javascript/whole_shebang/projects
l 4-wsw_navbar/src/*.css
cp 4-wsw_navbar/src/*.css 6-wsw_navbar_graphics_sliders/src/
cd ../..
pwd       # /var/www/always_learning/always_learning_javascript/
git add whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/*.css
git commit -m 'Copied the whole_shebang/projects/4-wsw_navbar/src/*.css files to whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/ .'
```

## 2.6. Cleanup Logo Cruft

Ensure there are no lingering references to `*.svg` files, and delete the ones installed by `npm`

```
cd 6-wsw_navbar_graphics_sliders
pwd                              # /var/www/always_learning/always_learning_javascript/whole_shebang/projects/6-wsw_navbar_graphics_sliders
grep svg index.html src/*.*
git rm public/vite.svg src/assets/react.svg
cd ../../..
pwd       # /var/www/always_learning/always_learning_javascript/
git commit -m 'Removed whole_shebang/projects/6-wsw_navbar_graphics_sliders/public/vite.svg and whole_shebang/projects/6-wsw_navbar_graphics_sliders/src/assets/react.svg because they are crufty and unneeded.'
```

## 2.7. Check for Differences

Run the following series of `diff` commands to ensure we haven't forgotten anything:

- It's ok to ignore differences in files like `.eslintrc.cjs` and `package*.json`
  - These are no doubt due to having run `npm install` at different times
  - That is why it's best to start each new project fresh
- I don't know why there's a `README.md` file in `whole_shebang/projects/6-wsw_navbar_graphics_sliders/` ...
  - ... but *not* one in `whole_shebang/projects/4-wsw_navbar/`
  - *Not* going to worry about this, becuase `README.md` is *not a source file*

```
pwd       # /var/www/always_learning/always_learning_javascript/whole_shebang/projects

diff 4-wsw_navbar/ 6-wsw_navbar_graphics_sliders/
diff 4-wsw_navbar/src/ 6-wsw_navbar_graphics_sliders/src/
diff 4-wsw_navbar/src/en/ 6-wsw_navbar_graphics_sliders/src/en
diff 4-wsw_navbar/src/es/ 6-wsw_navbar_graphics_sliders/src/es
diff 4-wsw_navbar/src/fr 6-wsw_navbar_graphics_sliders/src/fr
```

## 2.8. Sanity Checks

- [x] Check VSCode
  - [x] Press **Ctrl+Shift+M** or click on [Menu icon ->] View -> Problems
  - [x] Give it a little time to analyze all the code and check for issues
- [x] Run `npm run lint` inside the `6-wsw_navbar_graphics_sliders` directory
- [x] Run `npm run dev` inside the `6-wsw_navbar_graphics_sliders` directory
- [x] Check that the `App` is working in the browser

**Note:** at this point, the App should work just like the App in `whole_shebang/projects/4-wsw_navbar`.


