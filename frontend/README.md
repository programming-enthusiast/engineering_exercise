# Install npm packages
```
  npm install
```

# run the backend locally
You can run the backend server using the following command.
```
  npm run start
```
The app will be running on Port 3000.

# Testing
You can execute unit testing code using the following command.
```
  npm run test
```
The basic components have unit tests in the folders. The test files has `.test.ts` extension.
# Directory Structure
```
|-- components/
    |-- controls
        |-- Button
            |-- Button.test.tsx
            |-- Button.tsx
            |-- index.ts
        |-- SelectField
            |-- index.ts
            |-- SelectField.test.tsx
            |-- SelectField.tsx
        |-- Table
            |-- index.ts
            |-- Table.test.tsx
            |-- Table.tsx
    |-- features
        |-- search
            |-- const.ts
            |-- index.tsx
            |-- Search.tsx
    |-- Logo.tsx
|-- types/
    |-- index.ts
|-- utils/
    |-- api.ts  
    |-- helper.ts 
|-- App.css
|-- App.tsx
|-- index.css
|-- index.tsx
...
```