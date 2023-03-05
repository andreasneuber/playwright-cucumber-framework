# playwright-cucumber-framework
Sample implementation with Playwright and Cucumber

## Application under test
The feature files, step definitions and page objects were written for https://github.com/andreasneuber/automatic-test-sample-site.
Readme in this repo has further details how to set it up.

## Install
`npm install`

## Run
To run all tests with much output on terminal: `npm run test:normal`

To run all tests with minimum output on terminal and adding results into a json file for a report: `npm run test:all`

or

`npm run test:e2e acceptance/features/ConvertCelsius.feature`

or 

`npm run test:e2e acceptance/features/AdminPrivileges.feature`

or 

`npm run test:e2e acceptance/features/Creditcard.feature`

or

`npm run test:e2e acceptance/features/Login.feature`

or

`npm run test:e2e acceptance/features/ProvideYourDetails.feature`

or

`npm run test:e2e acceptance/features/ConcurrentWindows.feature`

## Reporting
- Run tests: `npm run test:all`
- Generate HTML report: `npm run report`
- Open the generated HTML report in browser located here: `reports/cucumber_report.html`


## Helpful links
- [https://dev.to/jankaritech/behavior-driven-development-bdd-using-playwright-n1o](https://dev.to/jankaritech/behavior-driven-development-bdd-using-playwright-n1o)

