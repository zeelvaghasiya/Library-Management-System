# Library Management System (TDD)

Welcome to my solution for the Library Management Kata! This project demonstrates how to use Test-Driven Development (TDD) to solve a programming problem. It focuses on making small, gradual changes to the code and keeping the code simple and easy to understand.

## Table of Contents

- [Problem Statement](#problem-statement)
- [Requirements](#requirements)
- [Solution](#solution)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Clone the Repository](#clone-the-repository)
  - [Import Project into Visual Studio Code](#import-project-into-visual-studio-code)
  - [Install Dependencies](#install-dependencies)
  - [Running Tests](#running-tests)
- [Test Coverage](#test-coverage)

## Problem Statement

Create a simple library management system that allows users to perform basic operations such as adding books, borrowing books, returning books, and viewing available books.

### Requirements

- **Add Books**:
  - Users should be able to add new books to the library.
  - Each book should have a unique identifier (e.g., ISBN), title, author, and publication year.

- **Borrow Books**:
  - Users should be able to borrow a book from the library.
  - The system should ensure that the book is available before allowing it to be borrowed.
  - If the book is not available, the system should raise an appropriate error.

- **Return Books**:
  - Users should be able to return a borrowed book.
  - The system should update the availability of the book accordingly.

- **View Available Books**:
  - Users should be able to view a list of all available books in the library.

## Solution

This project uses TDD (Test-Driven Development) to solve the kata problem. The solution is created step by step, with small changes made and tested one at a time. This shows how TDD works by building and testing each feature separately.

## Features

### Book Management

- **addBook**:
  - Adds a new book to the library's collection.
  - Checks if a book with the same ISBN already exists.
  - Throws an error if the book's ISBN is a duplicate.

- **viewAvailableBooks**:
  - Shows only the books that are available for borrowing.
  - Returns a list of books that are marked as available.

- **viewAllBooks**:
  - Displays all books in the library, whether they are available or borrowed.

### Borrowing and Returning Books

- **borrowBook**:
  - Allows a user to borrow a book from the library.
  - Ensures the book is available before borrowing.
  - Throws an error if the book is already borrowed or doesn't exist.

- **returnBook**:
  - Allows a user to return a borrowed book to the library.
  - Ensures the book was borrowed before returning it.
  - Throws an error if the book was not borrowed or doesn't exist.

## Setup Instructions

### Prerequisites

- **Node.js**: Ensure Node.js 16 or later is installed on your machine for running the JavaScript application.
- **npm**: Comes bundled with Node.js. Ensure npm is available for managing dependencies.
- **Jest**: A JavaScript testing framework for writing and running test cases.
- **Text Editor/IDE**: Use a code editor like Visual Studio Code for writing and managing the code.

### Clone the Repository

1. Open your terminal or command prompt.
2. Run the following command to clone the repository:

    ```bash
    git clone https://github.com/zeelvaghasiya/Library-Management-System.git
    ```

3. Navigate into the project directory:

    ```bash
    cd Library-Management-System
    ```

### Import Project into Visual Studio Code

1. Open Visual Studio Code.
2. Click on File > Open Folder... .
3. Select the root directory of the project.
4. Click OK to open the project.

### Install Dependencies

1. Open the integrated terminal in Visual Studio Code (Ctrl + ~).
2. Run the following command to install all dependencies:

    ```bash
    npm install
    ```

### Running Tests

- To run the tests, use the following command in the terminal:

    ```bash
    npm test
    ```

## Test Coverage

The test coverage for this project ensures that all aspects of the Library.js file are thoroughly tested. The summary is as follows:

![Test Coverage Screenshot](https://res.cloudinary.com/enjoywithcode/image/upload/v1735475247/Images/qcsdpbocefugsgnod2n7.png) 