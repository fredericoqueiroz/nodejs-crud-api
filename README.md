# Node.js CRUD APIs

> Node.js Restful CRUD API using Express, Sequelize with MySQL database.

This project is an example of REST APIs that can create, retrieve, update, delete and find Tutorials by title. Node.js Express exports REST APIs and interacts with MySQL Database using Sequelize ORM.

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

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [MySQL](https://dev.mysql.com/doc/refman/5.7/en/installing.html) database should be installed in your machine.

## Built With

- [Node.js](https://nodejs.org/en/about/) - Asynchronous event-driven JavaScript runtime designed to build scalable network applications.
- [Express](https://expressjs.com/) - Web framework for Node.js.
- [Sequelize](https://expressjs.com/) - Promise-based Node.js ORM for MySQL.

## Author

- [**Frederico Queiroz**](https://github.com/fredericoqueiroz).

## License

- This project is licensed under the **GNU General Public License v3.0** - see the [LICENSE](LICENSE.md) file for details.
