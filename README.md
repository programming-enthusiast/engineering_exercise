
# Part A - API Developers & Full Stack Developers

# Problem Statement:

+ Create an API that takes multiple optional input(s) of Car manufacturer’s (Make) name (full or partial name), model name (full or partial model name), budget in USD, and/or model year or a combination of any these input variables and returns the following search results in REST friendly format:

* Total Number of vehicles available that matches the faceted search parameters
* Number of vehicles matched by Make and Model combination as a sub-group of Total Number
* Lowest, Median, and Highest Price of the vehicle that matches the price

# Requirements:

+ Develop a fully REST compliant HTTP API
+ Publish your code along with any data sets used on your own GitHub page
+ Create a Readme for your project on how to use, build, install, and run
+ Create any additional instructions / documentation as you see helpful
+ Must work through command line / shell (should not require us to use an IDE)
+ Must pass the unit tests created by the interviewer (will not be disclosed to you ahead of time)
+ Must have the ability to handle and simulate a system error and should be documented and handled properly according to REST semantics
+ Test must be returned within 48 hours (will check the latest commit timestamp on your GitHub for qualification)


# Required Technical Stack:

+ Must be created either using JavaScript, Typescript (preferred), or Go lang ONLY
+ Can use any open source frameworks, plugins that are available through public code artifactories (e.g., npm) {cannot use unpublished GitHub source code}
+ Bonus points for limiting the number of open source frameworks utilized to deliver the functionality
+ Use JSON Server or other in-memory persistence layer to store the data sets provided by us or created by you for your exercise (do not use file system in your API code)

# Reference

+ Attached is a randomized vehicle statistics snapshot for your exercise.


# Part B - Full Stack Developers Only

# Problem Statement:

+ Create a Single Page Application that demonstrates the use of the API created in Part (A) of the exercise

* A responsive Web Application that allows the users to enter the full text search keywords for make and model, Budget and Year (all being optional)
* Displays the search results from the API in a user-friendly way
* Abilty to search several times
* Handle errors elegantly

# Requirements:

+ Develop a SPA
+ Publish your code along with any data sets used on your own GitHub page
+ Create a Readme for your project on how to use, build, install, and run
+ Create any additional instructions / documentation as you see helpful
+ Must work through command line / shell (should not require us to use an IDE)
+ Must pass the unit tests created by the interviewer (will not be disclosed to you ahead of time)
+ Must have the ability to handle and simulate a system error and should be documented and handled properly according to REST semantics
+ Test must be returned within 48 hours (will check the latest commit timestamp on your GitHub for qualification)


# Required Technical Stack:

+ Must be created either using JavaScript, Typescript (preferred)
+ Must be developed using React or Vue SPA frameworks only
+ Can use any open source packages, plugins that are available through public code artifactories (e.g., npm) {cannot use unpublished GitHub source code}
+ Bonus points for limiting the number of open source frameworks utilized to deliver the functionality
+ Use the API built in Part (A) of this exercise

# Reference

+ HTML Template is provided as a starting point for your SPA application. You have to use this design but can replace HTML/Web components as you need to based on the libraries you have chosen so long as the design system is showcased.

# Part A & Part B Scoring and Next Steps

# Test Scoring - Minimum to consider for interview (75%)
+ Project scaffolding and Git friendliness (10%)
+ Clean & self-documented code (30%)
+ Domain Model suitability (10%)
+ Design Patterns usage (20%)
+ Usage of modern language practices (e.g., async, avoiding loops, etc.,) (30%)

# Post Test Interview process:

+ There will be 2 interviews after the test has been successfully submitted
+ 1 Interview will be focused on submitted exercise, code review, and requirements validation
+ 1 Interview will be focused on your experience working in —> agile environments, interactions with QA Automation teams, technical collaboration style, and ability to receive and provide honest feedback to team
