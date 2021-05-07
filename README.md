# Code Test - Queue Management System API
A NodeJS queue management system for hospitals. 

Base URL: https://express-queue-management.herokuapp.com/

- Initial package used: Express
- Added packages: Mongoose for MongoDB ORM
- Added files: 
  - routes/queue.js
  - models/db.js
  - models/queueModel.js
  - controllers/queueController.js

## I. Local Installation
### Clone repository
```
$ git clone https://github.com/muktiwbw/queue-management.git
$ cd queue-management
$ npm install
```

### Environment variables
```
$ cp .env.example .env
```
Fill out the database variables
```
APP_HOST=127.0.0.1
APP_PORT=3000

DB_HOST=mongodb_host
DB_PORT=
DB_USERNAME=mongodb_user
DB_PASSWORD=mongodb_passwrod
DB_DATABASE=mongodb_database
```

### Run app
```
$ npm start
```

## II. Endpoints
### 1. All Queues
GET /queues

### 2. Store Queue
POST /queues
```json
/* JSON body */
{
    "name": "Eren Jeager",
    "address": "Shiganshina",
    "phone": "087741414141",
    "clinic": "anak"
}
```
`clinic` only accepts: umum, gigi, mata, anak

### 3. Get Queue by ID
GET /queues/id
