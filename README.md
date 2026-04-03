# CLI Todo List
A command-line interface Todo List application built with Node.js and local JSON storage. Inspired by the backend projects on [roadmap.sh](https://roadmap.sh).

## Features
* Add, update, and delete tasks.
* Change task statuses (`todo`, `in-progress`, `done`).
* List all tasks or filter them by their current status.

---

## Usage Guide

### Add a Task
Creates a new task and automatically assigns it a unique ID. If your task has spaces, make sure to wrap it in quotes!
**Command:**
`node app.js add "Buy groceries"`

### List Tasks
Displays all tasks currently in your database.
**Command:**
`node app.js list`

### Update a Task
Changes the description of an existing task. You must provide the task ID followed by the new description.
**Command:**
`node app.js update 1 "Buy groceries and cook dinner"`

### Delete a Task
Permanently removes a task from the database using its ID.
**Command:**
`node app.js delete 1`

### Update Task Status
Move a task through your workflow by changing its status.
**Commands:**
`node app.js mark-in-progress 1`
`node app.js mark-done 1`

---

## Built With
* JavaScript (Node.js)
* Native `fs` module for file system operations
