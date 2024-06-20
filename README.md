# Management of Transactions Project

## Overview

This is a Node.js and Express.js based application that manages transactions between sender and recipient. The application includes filtering operations and allows filtering transactions by date and status of transactions. The application connects to a MongoDB database to stores transactions data in the database.
There is facility of create transaction. Also, once transaction is available, it's comment can also be updated.

Assuming Transactions are uni-directional entity. So, added create endpoint to create transactions and get endpoints to get transactions data along with an update comment functionality to update transactions comment.

## Features

- Create a new transaction
- Retrieve all transactions with optional filtering by date and status
- Retrieve a transaction by ID
- Update a existing transaction comment

## Assumption

In Reality, Transaction status depends on status received from merchant. In this project, transaction status is generated dynamically using random generator functionality.

## Prerequisites

- Node.js (>=14.x.x)
- MongoDB (local or remote)

## Installation

1. **Clone the repository:**

    ```bash
    git clone <repository-url>

    cd transaction-management-backend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up and Run MongoDB:**
    Make sure MongoDB is running locally on `mongodb://localhost:27017/transaction-db` or update the MongoDB connection string in `database/setup.js` if you are using a remote MongoDB instance.

## Usage

1. **Start the server:**

    ```bash
    npm start
    ```

2. **Access the API:**

    The server will be running on `http://localhost:3000`. You can use tools like Postman or cURL to interact with the API.

## API Endpoints

### Transactions

- **Get All Transactions**

    ```http
    GET /api/transactions
    ```

- **Get All Transactions with filtering**

    ```http
    GET /api/transactions/?status={status}&startDate={startDate}&endDate={endDate}
    ```

    Query Parameters:
    - `status` (optional): Filter transactions by status
    - `startDate` (optional): Filter transactions from this date (inclusive)
    - `endDate` (optional): Filter transactions to this date (inclusive)

- **Get Transaction by ID**

    ```http
    GET /api/transactions/:id
    ```

- **Create Transaction**

    ```http
    POST /api/transactions
    ```
- **Update Transaction Comment**

    ```http
    PUT /api/transactions/:id
    ```

## Screenshots

Create a new transaction 1
![Alt text](public/1.png?raw=true "transaction create 1")

Create a new transaction 2
![Alt text](public/2.png?raw=true "transaction create 2")

Create a new transaction 3
![Alt text](public/3.png?raw=true "transaction create 3")

List all transactions with status, startDate and endDate as Query parameters
![Alt text](public/4.png?raw=true "transaction with filtering")

Get Transaction by id
![Alt text](public/5.png?raw=true "transaction by id")

List all transactions
![Alt text](public/6.png?raw=true "transaction all")

Transaction with Updated comment
![Alt text](public/7.png?raw=true "transaction update comment")
