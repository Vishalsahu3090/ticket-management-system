
# Ticket Management System

A simple RESTful API for managing support tickets using Node.js and MongoDB. This API allows users to create, read, update, and delete (CRUD) tickets.

## Features

- Create a new ticket with a title, description, and status.
- Retrieve all tickets or a specific ticket by its unique identifier.
- Update a ticket's details (title, description, and status).
- Delete a ticket by its unique identifier.
- Validation and error handling for invalid input and non-existent tickets.

---

## Tech Stack

- **Node.js**: JavaScript runtime to build the server.
- **Express.js**: Web framework for creating RESTful APIs.
- **MongoDB**: NoSQL database for storing ticket data.
- **Mongoose**: MongoDB ODM for defining and interacting with ticket schemas.
- **Dotenv**: To manage environment variables.
- **Body-parser**: To handle JSON requests.

---

## Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v14.x or later)
- **MongoDB** (either locally or use MongoDB Atlas)

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ticket-management-system.git
cd ticket-management-system
```

### 2. Install Dependencies

Run the following command to install the required Node.js modules:

```bash
npm install
```

### 3. Set up Environment Variables

Create a `.env` file in the root directory and add your MongoDB connection string (replace `your_mongo_uri` with your MongoDB URI):

```
MONGO_URI=your_mongo_uri
```

For example, if using MongoDB locally:

```
MONGO_URI=mongodb://localhost:27017/ticketDB
```

### 4. Run the Server

To start the server, run:

```bash
npm run start
```

Or, if you're using **nodemon** for development:

```bash
npm run dev
```

By default, the server will run on **http://localhost:3000**.

---

## API Documentation

### 1. Create a New Ticket

**Endpoint**: `POST /api/tickets`

**Request Body**:

```json
{
  "title": "Issue with login",
  "description": "Cannot login to my account"
}
```

**Response**:

```json
{
  "_id": "612abc123xyz",
  "title": "Issue with login",
  "description": "Cannot login to my account",
  "status": "open",
  "createdAt": "2023-09-15T08:52:45.342Z",
  "updatedAt": "2023-09-15T08:52:45.342Z",
  "__v": 0
}
```

### 2. Retrieve All Tickets

**Endpoint**: `GET /api/tickets`

**Response**:

```json
[
  {
    "_id": "612abc123xyz",
    "title": "Issue with login",
    "description": "Cannot login to my account",
    "status": "open",
    "createdAt": "2023-09-15T08:52:45.342Z",
    "updatedAt": "2023-09-15T08:52:45.342Z"
  },
  {
    "_id": "612abc456def",
    "title": "Error on checkout",
    "description": "Unable to complete the purchase",
    "status": "in-progress",
    "createdAt": "2023-09-14T10:21:15.123Z",
    "updatedAt": "2023-09-15T12:30:15.567Z"
  }
]
```

### 3. Retrieve a Single Ticket by ID

**Endpoint**: `GET /api/tickets/:id`

**Response**:

```json
{
  "_id": "612abc123xyz",
  "title": "Issue with login",
  "description": "Cannot login to my account",
  "status": "open",
  "createdAt": "2023-09-15T08:52:45.342Z",
  "updatedAt": "2023-09-15T08:52:45.342Z"
}
```

### 4. Update a Ticket

**Endpoint**: `PUT /api/tickets/:id`

**Request Body**:

```json
{
  "title": "Issue with login",
  "description": "Resolved issue with login",
  "status": "closed"
}
```

**Response**:

```json
{
  "_id": "612abc123xyz",
  "title": "Issue with login",
  "description": "Resolved issue with login",
  "status": "closed",
  "createdAt": "2023-09-15T08:52:45.342Z",
  "updatedAt": "2023-09-15T10:00:00.123Z"
}
```

### 5. Delete a Ticket

**Endpoint**: `DELETE /api/tickets/:id`

**Response**:

```json
{
  "message": "Ticket deleted successfully"
}
```

---

## Error Handling

The API responds with appropriate error messages for invalid requests:

- **400 Bad Request**: When required fields are missing or invalid in the request body.
- **404 Not Found**: When the ticket with the specified ID doesn't exist.
- **500 Internal Server Error**: For any server-side issues.

---

## Testing the API

You can test the API using tools like:

- [Postman](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)
- **curl** (command-line tool)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## Contact

For any questions or issues, please contact me at: **your.email@example.com**

---

That's your `README.md` file. Be sure to replace the placeholder links and information (like your GitHub repo URL and contact details) with actual data before publishing your project!