
# seeyourmind.art/README.md

README.md file for the seeyourmind.art repo, in which I am creating a site enabling users to
create images of their personality.

# 1. Notes on Github

Did they change something or did I do something wrong?

## 1.1. Errors Trying to Push an Update?!?

My first attempt to clone and update this repo failed!

When trying to push my changes with `git push origin master` - or specifically my alias `gpom` -
I kept getting these two error messages:

- `error: src refspec master does not match any` [sic]
   - I guess they're saying "src refspec master does not match any *branches*"???
- `error: failed to push some refs to 'https://github.com/tomwhartung/seeyourmind.art.git'`

## 1.2. Attempts to Fix

I tried a few things, such as using the SSH link instead of the HTTPS link to clone it,
but was unsuccessful.

Using the SSH link:

```
git clone git@github.com:tomwhartung/seeyourmind.art.git
```

Using the https link:

```
git clone https://github.com/tomwhartung/seeyourmind.art.git
```

I don't remember which to use, and have fixed issues before by using one rather than another,
but neither of these worked.

1.3. Partial Solution

At one point I used this command, found on a stackoverflow post I believe, to get the update pushed:

```
$ git push origin HEAD:master
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 2 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 6.81 KiB | 1.70 MiB/s, done.
Total 3 (delta 0), reused 0 (delta 0)
remote:
remote: Create a pull request for 'master' on GitHub by visiting:
remote:      https://github.com/tomwhartung/seeyourmind.art/pull/new/master
remote:
To github.com:tomwhartung/seeyourmind.art.git
 * [new branch]      HEAD -> master
$
```

But as is apparent, github said I would have to create a pull request to get the changes.

Another time I managed to get it pushed to the `main` branch instead of the `master` and
github said I should protect my `main` branch because it was unprotected.

## 1.4. Branches `main` vs. `master`

It turns out that somehow the `main` instead of the `master` branch got set up to be the default.

- I am used to using the `gpom` alias for this
- My `gpom` alias expands to `git push origin master`

## 1.5. The Fix

I did the following to hopefully fix this:

- 1. Created a new repo
- 2. On github.com, changed the default branch from `main` to `master`
- 3. Cloned the repo using the SSH link:
  - `git clone git@github.com:tomwhartung/seeyourmind.art.git`

## 1.6. Still Not Sure

I'm still not sure whether github changed something or I did something wrong!

Hopefully trying to `git add` then `gpom` this file will work ok!!

