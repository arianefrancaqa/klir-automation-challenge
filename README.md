# klir-automation-challenge
Klir's Automation Challenge

## Welcome to my Klir's Automation Challenge! :raising_hand_woman: 
### This project includes:
- API Testing
- WEB testing

### 1. Download/Install NodeJS/NPM:

- Access the link [https://nodejs.org/](https://nodejs.org/), download and install NodeJS version 10 or >10;
- Verify the NodeJS and NPM instalation, open Command Prompt and type:

```javascript
    node -v 
```

```javascript
    npm -v
```


### 2. Download/Install Git/GitBash:

- Access the link [https://git-scm.com/downloads](https://git-scm.com/downloads);


### 3. Clone the repository:

``git clone https://github.com/arianefrancaqa/klir-automation-challenge.git``

### 4. Install the dependencies and update the packages:

 - For Playwright to work, it needs to be installed via *npm install* to download all node packages in the root folder of the project.

 Install Playwright:
```javascript
    npm i
```

### 4. Build and start the Customer App

 - Build and Start Klir's Customer App:
   https://github.com/tsklir/klir_interview#task-1-test-environment-setup

### 6. Getting Playwright Tests running:
Run All tests:
```javascript
  npx playwright test
```

Run a single spec:
```javascript
  npx playwright test ${specName}.spec.js 
```

Run a single test:
```javascript
  npx playwright test ${specName}.spec.js -g "${testTitle}"
```

### 7. Author
#### Ariane França

### 8. Check Playwright documentation that this project is based:
- https://playwright.dev/docs/intro


### 9. Find out more about my work:
- https://arianefrancaqae.vercel.app/
