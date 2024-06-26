# ApplyDigital
QA Challenge

# Installation and Setup
Run this commands in order to setup Cypress and needed dependencies in your local machine:
```bash
cd /your/project/path
npm install
npx cypress install


# Running tests locally
Open the Cypress GUI by executing `npm run cy:open` for running tests using cypress dashboard.
Open the Cypress GUI by executing `npm run cy:run` for running tests using cypress headless.

# Running specific tests locally
Open the terminal and execute `cy:run:contact-us-tests` for running contact-us tests related to contact-us.
Open the terminal and execute `cy:run:login-tests` for running login tests.
Open the terminal and execute `cy:run:payment-tests` for running payment tests.
Open the terminal and execute `cy:run:product-tests` for running product tests.

# Reports locally
Reports will be generate as a .html file in the ptah /cypress/results


# Running tests on github actions
> Go to the reporsitory https://github.com/kuaker/apply-digital
> Go to the Actions label
> On the left select
    - Run E2E Users Flows || Run Parallel Cypress Tests
> Then click on Run workflow button
> Select the branch (master)
> Select the env
    -qa
    -staging
> Click on Run Workflow


# Reports in GithubActions
> After the every runnning, dive into the job
> Scroll down to the Artifacts section > Will appear report to download
> Select the report and download it
> Open the zip file
> Click on index.html
> Then Will see the assertions and a video attached.


# Project Structure and settings
The project was built using cypress framework with Typescript.
I used POM (Page Object Model).
I set it up to run it in differents environments (/config)
I used assert-pages in order to reuse assertions
I created some data generators for reusability.
I set it up to run it on github actions in parallel.


# Comments
I´ve tried to implement BDD by using cucumber library but I had some issues with the plugin and configuration for cypress 10.0.0 and over version with typescript.