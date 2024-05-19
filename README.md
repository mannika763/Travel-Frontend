# Table of Contents

1. [Introduction](#create-my-trip-now)
2. [Features](#features)
    2.1 [User Interface](#user-interface)
3. [Installation](#installation)
    3.1 [Frontend Repository](#frontend-repository)
    3.2 [Backend Repository](#backend-repository)
4. [Admin Panel](#admin-panel)
5. [Usage](#usage)
6. [Additional Dependencies](#additional-dependencies)
7. [Additional Resources](#additional-resources)
8. [Video Demo](#video-demo)



## Create My Trip Now

Create My Trip Now is a web application that allows users to easily plan their trips by selecting their preferred country, places to visit, number of people, and budget. Additionally, the application provides an admin panel for managing user queries efficiently.

## Features

### User Interface
- **Filters**: Users can filter their trip preferences by country, places, number of people, and budget.
- **Popup Form**: After selecting trip preferences, users are prompted to fill in additional information such as name, phone number, email, and date of travel before submitting their query.
- **Confirmation Message**: Upon submission, users receive a confirmation message indicating that their query has been received, and a customer executive will reach out to them shortly.

## Installation

1. Clone the repository from GitHub.
   - **Frontend Repository**: [Travel-Frontend](https://github.com/mannika763/Travel-Frontend.git)
   - **Backend Repository**: [Travel-Backend](https://github.com/mannika763/Travel-Backend.git)

2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Configure environment variables as necessary.

**Note**: This project is based on the MERN (MongoDB, Express.js, React.js, Node.js) stack, with React as the frontend framework. Ensure you have Node.js and npm installed on your machine.

## Admin Panel

1. Click on the "Admin Panel" button in the navbar.
2. Log in using the following credentials:
   - **Email:** mannika2001verma@gmail.com
   - **Password:** Travel@123
   - **Note:** JWT token is used for authentication. Your login session lasts for one hour, so you don't have to log in repeatedly. Even if you refresh the page, you will remain logged in.
   
- **Dashboard**: Once logged in, admins are redirected to the dashboard, where they can view all user queries in a table format.
- **Charts**: The dashboard includes visual representations of user data in the form of bar and pie charts, displaying user information by month in percentages.
- **Search Functionality**: Admins can search for specific users using the search box.
- **Pagination**: User queries are displayed with pagination, showing 5 data entries per page for easy navigation.

3. To logout, click on the "Logout" button next to the "Welcome, Admin" greeting in the navbar.


## Usage

1. Open the application in your web browser.
2. Use the filters to select your trip preferences.
3. Fill in the required information in the popup form.
4. Submit your query and await confirmation.

## Admin Panel

1. Click on the "Admin Panel" button in the navbar.
2. Log in using the provided credentials.
3. Navigate to the dashboard to view user queries.
4. Utilize the search box and pagination for efficient data management.

## Additional Dependencies

After cloning the repository and installing the project dependencies, make sure to install the following additional dependencies:

Dependency: axios
Installation Command: npm install axios

Dependency: lottie-react
Installation Command: npm install lottie-react

Dependency: react-apexcharts
Installation Command: npm install react-apexcharts

Dependency: recharts
Installation Command: npm install recharts

Dependency: sweetalert2
Installation Command: npm install sweetalert2

## Additional Resources

- [React Documentation](https://legacy.reactjs.org/docs/getting-started.html)
- [Hosted Website](https://6649cb0592f7909bb988a766--harmonious-blancmange-ff1524.netlify.app) 

## Video Demo

- [Video](https://drive.google.com/file/d/1DInIht1VlO01oJlBMsmadgkj2C66SG22/view?usp=sharing)
