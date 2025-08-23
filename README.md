# NodeJs

This repository contains code samples, images, and notes for learning Node.js and Express.js, covering core concepts, practical examples, and visual explanations.

## Folder Structure & Summary

- `01-modules/` — Learn about Node.js modules, the require system, and internal architecture. Includes:

  - Code samples (`index.js`, `script.js`)
  - Notes and explanations (`notes.txt`, `copy.txt`)
  - Visuals: how require works, internal architecture, and npm (`behind_scene_of_require.png`, `internal_archi_nodejs.png`, `npm.png`, `require.png`)
  - `package.json` for module management

- `02-event/` — Explore Node.js events and EventEmitter:

  - Code for custom events and error handling (`myevents.js`, `myevents_class.js`, `errorevents.js`)
  - Visuals: event flow and internals (`Events.png`, `internal working.png`)
  - `ChatApp/`: A simple chatroom app using events (`chatroom.js`, `index.js`)

- `03-buffer/` — Understand Node.js buffers for binary data:

  - Code example (`buffer.js`)
  - Images showing buffer operations (`buffer1.png`, `buffer2.png`)

- `04-HTTP/` — HTTP server basics and deep dive:

  - Code for HTTP servers (`index.js`)
  - Visuals: HTTP methods, status codes, request-response cycle, and deep dive (`HTTP method.png`, `http status code.png`, `http working.png`, `req-res cycle.png`, `HTTP_deep_dive.png`)
  - `HTTP/`: Subfolder with more HTTP server code and its own `package.json`
  - `TASK/`: Practice tasks, logs, and explanations (`index.js`, `log.txt`, `task.md`)

- `05-express/` — Introduction to Express.js and middleware:

  - Express server example (`index.js`)
  - Visuals: RESTful API, semantic versioning, middleware concepts (`Restfull_API.png`, `Semantic_version.png`, `version.png`)
  - `Middlewares/`: Middleware code and diagrams (`middleware.js`, `diagram of middleware.png`, `middleware_does_task.png`, `realtime application of the middleware.png`)

- `Express-Book-Store/` — A sample Express.js project for a book store:
  - RESTful API for managing books (`index.js`)
  - Log file for requests (`log.txt`)
  - Project documentation (`Readme.md`)
  - `package.json` for dependencies

## Getting Started

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Clone this repository or download the code.
3. Navigate to a folder and run example files using:
   ```sh
   node <filename.js>
   ```

## Example Usage

To see how events work in Node.js:

```sh
cd 02-event
node myevents.js
```

To run an HTTP server example:

```sh
cd 04-HTTP
node index.js
```

To try the Express Book Store API:

```sh
cd Express-Book-Store
node index.js
```

## Learning Topics

- Node.js modules and the require system
- EventEmitter and custom events
- Node.js buffer operations
- Building HTTP servers and understanding HTTP concepts
- Express.js basics, RESTful APIs, and middleware
- Basic Node.js and Express.js architecture

---
