# cypress_example

## Purpose of the project

The objective of this project is to create automated tests using the **_Cypress_** testing framework (https://www.cypress.io/) to cover the following flows on the **_Web Application_** hosted on https://www.saucedemo.com:

* **Login validations** - positive and negative scenarios
* Application **Happy Path**, which consists of:
    + Login into the application
    + Adding items to cart
    + Removing items from cart
    + Performing the checkout flow
    + Successfully make the order

For these tests the **Page Object Model** design pattern was used (Page Classes are under the _page_ directory).
The tests (under the _e2e_ directory) will be using the _describe()_ and _it()_ blocks as well as hooks to setup tests - provided by **mocha.js**. For assertions, the **chai** library is used. 
Both of these are bundled into **_Cypress_** by default.

## Usage

After cloning the repository, to install dependencies run the following command
> yarn install

### To run the tests, there are multiple options

Use this command to run the tests through the cypress dashboard - and follow steps there
> yarn cypress open

The following commands allow running the tests directly from the command line:
* Run all tests on **_e2e_** folder
> yarn cypress run
* Run specific tests with _--spec_ parameter
> yarn cypress run --spec _path/to/test/file.js_
* Run tests in specific browsers with _--browser_ parameter - supports _chrome_, _firefox_, _edge_ and _electron_ (last one is the deafult one):
> yarn cypress run --browser _browserName_
* Run tests in headful mode (by default is headless):
> yarn cypress run --headed


While running the tests, the default report is displayed in the terminal. 
However, this project also supports the **_cypress-mochawesome-reporter_** custom reporter. After running the test, run the following command on the terminal to check this HTML report (example for Windows machine):
> start .\cypress\reports\html\index.html

Also, a video execution is generated each time a test run is performed - under `cypress/videos` directory inside the project.