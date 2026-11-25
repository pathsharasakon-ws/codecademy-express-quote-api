# Quote & Bio RESTful API

A lightweight, modular RESTful web API built with **Node.js** and **Express.js** to store, retrieve, update, and manage famous quotes in computing and technology, along with author biographies.

## Features
- **Modular Routing:** Organized using `express.Router()` (`/api/quotes` and `/api/bios`).
- **Full CRUD Operations:** Supports `GET`, `POST`, `PUT`, and `DELETE` endpoints with proper HTTP status codes (`200`, `201`, `204`, `400`, `404`).
- **Query Filtering:** Filter quotes and bios dynamically by author name.
- **Interactive Frontend:** Includes a static web interface to fetch random quotes, filter by author, and submit new entries with publication years.

## Tech Stack
- **Backend:** Node.js, Express.js, CORS
- **Frontend:** HTML5, CSS3, Vanilla JavaScript

## API Endpoints

### Quotes (`/api/quotes`)
| Method | Endpoint | Description | Query Params |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/quotes` | Get all quotes (or filter by author) | `?person=Grace Hopper` |
| `GET` | `/api/quotes/random` | Get a single random quote | - |
| `POST` | `/api/quotes` | Add a new quote | `?quote=...&person=...&year=...` |
| `PUT` | `/api/quotes/:id` | Update an existing quote by ID | `?quote=...&person=...&year=...` |
| `DELETE` | `/api/quotes/:id` | Delete a quote by ID | - |

### Bios (`/api/bios`)
| Method | Endpoint | Description | Query Params |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/bios` | Get all biographies (or filter by person) | `?person=Alan Turing` |
| `POST` | `/api/bios` | Add a new biography | `?person=...&bio=...` |

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/pathsharasakon-ws/codecademy-express-quote-api.git](https://github.com/pathsharasakon-ws/codecademy-express-quote-api.git)
   cd codecademy-express-quote-api
2. **Install dependencies:**
   ```bash
   npm install
3. **Run the server:**
   ```bash
   node main.js
4. Open your browser and navigate to http://localhost:4001
