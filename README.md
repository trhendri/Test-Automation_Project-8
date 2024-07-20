Project 8 | Test Automation| Urban Routes 

//Description
The Urban Routes project aims to automate the testing of the Urban Routes app ordering functionality. It covers the following scenarios:

Setting the address.
Selecting a supportive plan.
Filling in the phone number.
Adding a credit card.
Writing a message for the driver.
Ordering a Blanket and handkerchiefs.
Order 2 Ice creams.
Verify the appearance of the car search modal.
Waiting for driver info modal to appear.

//Technologies and Techniques Used
WebdriverIO for end-to-end testing
JavaScript for test automation
Git and GitHub for version control
Visual Studio Code (VS Code) as the preferred development environment
Jest Framework

//Running Tests

Set Up:
Clone the Repository.
Make sure you’ve linked your TripleTen account with GitHub.
Open your terminal (Git Bash on Windows) and create a directory for your projects:
cd ~
mkdir projects
cd projects

Clone the repository (replace username with your GitHub username):
git clone git@github.com:username/hm08-qa-us.git

Install Dependencies:
Run the following command in your project folder:
npm install

Work Locally:
Open the project folder in VS Code:
code hm08-qa-us

Server URL:
Obtain the server address from the button provided.
Update the base URL in wdio.conf.js with the Urban Routes URL.

Run Tests:
Run  the following command in the terminal to run tests
npm run wdio
