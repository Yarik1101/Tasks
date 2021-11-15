# Tasks
test tasks for AB-soft

## Requirements
- `node` - `v14.17.0`
- `npm` - `6.14.13`
- `chrome driver` - [latest version](http://chromedriver.storage.googleapis.com/index.html) 

## Installation
```
git clone .../Tasks.git
cd Tasks
npm install
npm test
```

## Note about chrome-driver
You will need to download additional components to work with browser. 
Download the [latest version](http://chromedriver.storage.googleapis.com/index.html) of chrome-driver here.
The driver for Chrome should be placed on your system PATH.

# Tests
## Image comparison
- Compares web image url with local image by converting to base64
## Database (SQLite)
- Сhecks that the population density is below 50 people/sq.km. only in the USA
- Checks that the sum of the population of all countries is less than 2 billion people
## Iframe
- Replace inner HTML
