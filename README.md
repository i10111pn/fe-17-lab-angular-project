# FE-17-Lab Angular Project

This is a study project at EPAM Frontend Lab 17.

Demo: [fe-17-lab-angular-project.herokuapp.com](https://fe-17-lab-angular-project.herokuapp.com/)

## Tasks

* [Vitalii Murmylo](https://github.com/VitaliiMurmylo):

  pages/components: games, library

  issues:
  [#7](https://github.com/i10111pn/fe-17-lab-angular-project/issues/7),
  [#10](https://github.com/i10111pn/fe-17-lab-angular-project/issues/10),
  [#19](https://github.com/i10111pn/fe-17-lab-angular-project/issues/19),
  [#21](https://github.com/i10111pn/fe-17-lab-angular-project/issues/21)

* [Vladyslav Bekerskyi](https://github.com/bekerskyi):

  pages/components: friends, header

  issues: 
  [#6](https://github.com/i10111pn/fe-17-lab-angular-project/issues/6),
  [#11](https://github.com/i10111pn/fe-17-lab-angular-project/issues/11),
  [#16](https://github.com/i10111pn/fe-17-lab-angular-project/issues/16),
  [#17](https://github.com/i10111pn/fe-17-lab-angular-project/issues/17)


* [Yevhen Motrych](https://github.com/i10111pn): 

  pages/components: login, header

  issues: 
  [#2](https://github.com/i10111pn/fe-17-lab-angular-project/issues/2),
  [#3](https://github.com/i10111pn/fe-17-lab-angular-project/issues/3),
  [#14](https://github.com/i10111pn/fe-17-lab-angular-project/issues/14),
  [#24](https://github.com/i10111pn/fe-17-lab-angular-project/issues/24)    

## Initial Setup

* check if node has 16.x.x version: `node -v`
* check if npm has 8.x.x version: `npm -v`
* check if angular-cli has 13.x.x version: `ng --version`
* clone project: `git clone https://github.com/i10111pn/fe-17-lab-angular-project.git`
* install dependencies: `npm install`
* run project: `ng serve -o`

## Workflow

### Initial steps:
* pull latest changes: `git pull`

* create an issue at [GitHub](https://github.com/i10111pn/fe-17-lab-angular-project/issues), in the name describe what part of the work is going to be implemented

* create git branch with the same name as GitHub issue:

  `git checkout -b <branch name here>`

  for example: `git checkout -b add-documentation`

* add link of GitHub issue to README.md (Tasks section)

### Code changes:

* add your code changes and commit them to the git
 
  ```
    git add -A
    git commit -m "<commit message here>"
  ```

  see "Git Commit Message Convention" for the message format

### Code changes are done:

* pull latest changes: `git pull origin main`
* check if tests are not failing: `ng test`
* check if the linter is not failing: `ng lint`

* push changes to GitHub:

  `git push origin <branch name here>`

  for example: `git push origin add-documentation`

* create a pull request on GitHub and add reviewers
* merge pull request after two approvals
* check if changes are deployed to Heroku
* link pull request to related GitHub issue and to close it
* switch to main branch: `git checkout main`

## Git Commit Message Convention

```
<type>: <short summary>
  ???         ???
  ???         ?????? summary in present tense.
  ???       
  ???       
  ???
  ?????? commit type: docs|feat|fix|general|perf|refactor|test|typo
```

The type must be one of the following:

* **ci**: changes related to Heroku deployment
* **docs**: documentation only changes
* **feat**: a new feature
* **fix**: a bug fix
* **general**: general changes that do not fit any other type
* **perf**: a code change that improves performance
* **refactor**: a code change that neither fixes a bug nor adds a feature
* **test**: adding missing tests or correcting existing tests
* **typo**: typo fixes

Examples:

```
git commit -m "general: initial commit"
git commit -m "ci: deploy application to Heroku
git commit -m "feat: add login form validation"
```

## Heroku Deployment Test

  To test locally if deployment will be sucesufull run:

  ```
    ng build
    node server.js
  ```

  Visit [localhost:8080](http://localhost:8080/) in the browser.
