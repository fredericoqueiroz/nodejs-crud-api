# Node.js CRUD APIs

> Node.js Restful CRUD API using Express, Sequelize with MySQL database.

This project is an example of REST APIs that can create, retrieve, update, delete and find Tutorials by title.
Node.js Express exports REST APIs and interacts with MySQL Database using Sequelize ORM.

<p align="center">
    <img src="https://github.com/fredericoqueiroz/nodejs-crud-api/blob/media/API-Architecture.png?raw=true" title="Architecture" alt="Architecture">
</p>

## APIs Overview

The following table shows an overview of the APIs that Express App will export:

| URLs | METHODS | ACTIONS |
| :- | :- | :- |
| api/tutorials | POST | add new Tutorial |
| api/tutorials | GET | get all Tutorials |
| api/tutorials | DELETE | remove all Tutorials
| api/tutorials/:id | GET | get Tutorial by `id` |
| api/tutorials/:id | PUT | update Tutorial by `id` |
| api/tutorials/:id | DELETE | remove Tutorial by `id` |
| api/tutorials/published | GET | find all published Tutorials |
| api/tutorials?title=[eg] | GET | find all Tutorials which title contains `eg` |

## Project structure



## Project setup

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- <a href="https://dev.mysql.com/doc/refman/5.7/en/installing.html" target="_blank">MySql Database</a>
- <a href="https://nodejs.org/en/" target="_blank">Node.js</a>

### Installation

- Clone this repo to your local machine.

- Install the following modules in the project folder:
    ```
    npm install express sequelize mysql2 body-parser cors --save
    ```

- Update the file <i>app/config/[db.config.js](app/config/db.config.js)</i> with you local database config.

- Create the dabatase: `create database tutorial_db;`

- Run the application: `node server.js`

## Built With

- <a href="https://nodejs.org/en/about/" target="_blank">Node.js</a> - Asynchronous event-driven JavaScript runtime designed to build scalable network applications.
- <a href="https://expressjs.com/" target="_blank">Express</a> - Web framework for Node.js.
- <a href="https://sequelize.org/" target="_blank">Sequelize</a> - Promise-based Node.js ORM for MySQL.

## Author

<a href="https://github.com/fredericoqueiroz" target="_blank">Frederico Queiroz</a>

## License

This project is licensed under the **GNU General Public License v3.0** - see the [LICENSE](LICENSE) file for details.
