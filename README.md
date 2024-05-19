# Create My Trip Now

Create My Trip Now is a web application that allows users to easily plan their trips by selecting their preferred country, places to visit, number of people, and budget. Additionally, the application provides an admin panel for managing user queries efficiently.

## Features

### User Interface
- **Filters**: Users can filter their trip preferences by country, places, number of people, and budget.
- **Popup Form**: After selecting trip preferences, users are prompted to fill in additional information such as name, phone number, email, and date of travel before submitting their query.
- **Confirmation Message**: Upon submission, users receive a confirmation message indicating that their query has been received, and a customer executive will reach out to them shortly.

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


## Installation

1. Clone the repository from GitHub.
   - **Frontend Repository**: [Travel-Frontend](https://github.com/mannika763/Travel-Frontend.git)
   - **Backend Repository**: [Travel-Backend](https://github.com/mannika763/Travel-Backend.git)

2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Configure environment variables as necessary.

**Note**: This project is based on the MERN (MongoDB, Express.js, React.js, Node.js) stack, with React as the frontend framework. Ensure you have Node.js and npm installed on your machine.



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
Installation Command: npm install axios/npm install axios --force

Dependency: bootstrap
Installation Command: npm install bootstrap/npm install bootstrap --force

Dependency: lottie-react
Installation Command: npm install lottie-react/npm install lottie-react --force

Dependency: multiselect-react-dropdown
Installation Command: npm install multiselect-react-dropdown/npm install multiselect-react-dropdown --force

Dependency: react-apexcharts
Installation Command: npm install react-apexcharts/npm install react-apexcharts --force

Dependency: recharts
Installation Command: npm install recharts/npm install recharts --force

Dependency: sweetalert2
Installation Command: npm install sweetalert2/npm install sweetalert2 --force

## Additional Resources

- [React Documentation](https://legacy.reactjs.org/docs/getting-started.html)
- [Hosted Website](https://example.com) 
