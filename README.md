# Product Management CRUD App
```markdown


A simple product management application for adding, editing, and deleting products. This project is built with React for the front end and Node.js with Express for the back end. MongoDB is used as the database to store product information.

## Features

- Create a new product with a name, price, quantity, and description.
- View a list of existing products.
- Edit product details.
- Delete products.

## Technologies Used

- React (Front End)
- Node.js (Back End)
- Express (Back End Framework)
- MongoDB (Database)
- Cloudinary (Image Storage - Optional)
- Multer (File Upload - Optional)

## Getting Started

Follow the instructions below to get a copy of this project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your machine.
- MongoDB database setup (local or remote). Update the connection string in the backend configuration if needed.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/hawt24/Yenetta-task.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Yenetta-task.
   ```

3. Install dependencies for both the front end and back end:

   ```bash
   cd front-end
   npm install

   cd ../server
   npm install
   ```

4. Start the development servers:

   - Front End:

     ```bash
     cd front-end
     npm start
     ```

   - Back End:

     ```bash
     cd server
     npm start
     ```

5. Your application should now be running. You can access it in your web browser:

   - Front End: http://http://localhost:5173
   - Back End: http://localhost:3001

### Configuration

- Set up the MongoDB connection string in the back end (backend/index.js) to connect to your MongoDB database.

### Usage

- Open the application in your browser.
- Use the application to manage products.

```
