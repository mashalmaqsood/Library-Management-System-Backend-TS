## Library Management System Backend

This project is a backend application designed to manage a library's essential operations. It uses a set of database tables to track books, copies, loans, transactions, and members.

## Table of Contents

1. Introduction
2. Features
3. Technologies Used
4. .env File Setup
5. Assumptions

## Introduction

The Library Management System is built to manage the core functionalities required for a Library Management System. With this system, libraries can maintain accurate records of their inventory and manage lending activities.

## Features:

Books: Information about the library's books, such as title, author, genre, etc.
Copies: Details about specific copies of each book, including status and the book it's associated with.
Loans: Tracks loans to members, with loan and return dates.
Transactions: Records borrowing and returning events.
Members: Information about library members, including their personal details such as name, address, contact information other relevant data.

## Technologies Used:

Node.js
Express.js
MySQL database
jest for testing endpoints

## .env File Setup:

Rename `.env.sample` to `.env` and can change the values according to your need.

## Assumptions:

1. Database Setup: The system assumes that a database is set up with the necessary tables for books, copies, loans, members, and transactions.
2. Unique Identifiers: Every entity (book, copy, member, etc.) has a unique identifier for tracking and referencing.
3. Operational Environment: The system is intended for use in a library environment with users who have a basic understanding of library operations.
4. Data Integrity: It is assumed that the data entered into the system is accurate and validated to prevent inconsistencies.
