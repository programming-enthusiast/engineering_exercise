# Mobile Exercise

Implement the following UI (homepage and vehicletype) with bottom tab menu and Unit test in android/swift/flutter.

## UI

Requirements:

- The attached designs are for iPhone 8
- The completed screens should match exact dimensions, layout, and styles in the attached designs.
- The images and font are not included - they can be mocked


Other details
- The home screen should have the logo, search bar, and 2 buttons
  -- clicking on "Search by vehicle type" button should launch the vehicle type screen
  -- clicking on "See Deals of the Day" button should call search function with search input ( see details below ) 
  -- return output to console in JSON format
- The vehicle type screen should show a list of cars.
## Unit test
use the Engineering_Exercise/Exercise_Dataset.json as input

 - implement a search function that takes multiple optional input(s) of:
    - Car manufacturer’s (Make) name (full or partial name), 
    - model name (full or partial model name), 
    - budget in USD, and/or model year or 
    - a combination of any these input variables
 
 The function must return the following search results:

 - Total Number of vehicles available that matches the faceted search parameters
 - Lowest, Median, and Highest Price of the vehicle that matches the price
