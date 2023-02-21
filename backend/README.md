# Install npm packages
```
  npm install
```

# run the backend locally
You can run the backend server using the following command.
```
  npm run dev
```
The backend will be running on Port 8080.

# Testing
You can execute unit testing code using the following command.
```
  npm run test
```
The folder `/tests` includes controllers and services unit tests. The test files has .test.ts extension.

# Directory Structure
```
|-- controllers/
    |-- search.controller.ts
|-- data/
    |-- dataset.ts 
|-- middlewares/
    |-- cache.ts   
|-- models/
    |-- vehicle.model.ts
|-- routes/
    |-- search.routes.ts
|-- services/
    |-- search.service.ts
|-- types/
    |-- search.type.ts
|-- app.ts
|-- server.ts
```

# What does the backend do?
The backend has an API that takes multiple optional input(s) of Car manufacturer’s (Make) name (full or partial name), model name (full or partial model name), budget in USD, and/or model year or a combination of any these input variables and returns the following search results in REST friendly format:

1. Total Number of vehicles available that matches the faceted search parameters
2. Number of vehicles matched by Make and Model combination as a sub-group of Total Number
3. Lowest, Median, and Highest Price of the vehicle that matches the price
4. 5 Suggested vehicles that are within a given budget. Sort by price in ascending order. Distinct Brand. ( Budget range is 10% of given budget. For example: A budget of 25k will yield vehicles with pricing between 22,500 and 27,500 )

## Cache
* The backend has a memory cache. If the user make the same request again, it will return the cached response.
* The cache system has been implemented using `memory-cache`