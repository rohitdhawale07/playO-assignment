# Customer Management Dashboard (PlayO Assignment)
## Hosted Link:- https://play-o-assignment.vercel.app/

Welcome to the Customer Management Dashboard project! This dashboard allows you to manage and view all your customers. 
You can add new customers, sort them based on various columns, change their status, edit their details,
and delete them. Additionally, pagination has been implemented to efficiently manage large datasets.

## Features
- Display all customers in a tabular format.
- Add new customers through a form.
- Sort customers based on different columns.
- Implement pagination to navigate through the list of customers.
- Actions to delete or edit customer details.
- Form validations while adding customer details.
- Search implementation.

## Mock Node Server
The mock node server is used for API integration. 
It stores data in JSON format or objects, providing endpoints to retrieve, add, update, and delete customer details.

## Endpoints
- GET /api/customers: This endpoint is used to get all the stored data.
- POST /api/customers: this endpoint is used to send data to api.
- DELETE /api/customers: this end point is used to delete data from api and table aslo.
- PUT /api/customers: this endpoint is used to edit data in api.

## Usage
1. Once the dashboard is opened in your browser, you will see a table displaying all the customers.
2. Use the "Add Customer" button to open the form and add new customers. Ensure to fill in all required fields and validate your inputs.
3. Click on the column headers to sort the customers based on that column.
4. Navigate through the pages using the pagination controls at the bottom of the table.
5. Use the dropdown menu in the "Status" column to change the status of customers according to the specified order.
6. edit or delete customer details, click on the respective buttons in the table row.

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
