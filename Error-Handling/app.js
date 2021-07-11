const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const methodOverride = require("method-override");
app.get("/", (req, res, next) => {
  res.send("Hello world");
});

app.get("/broken", (req, res, next) => {
  throw new Error("BROKEN"); // Express will catch this on its own.
});

app.get("/find-not-exit", (req, res, next) => {
  fs.readFile("/file-does-not-exist", function (err, data) {
    if (err) {
      next(err); // Pass errors to Express.
    } else {
      res.send(data);
    }
  });
});

app.get("/try_catch_block", async (req, res, next) => {
  try {
    var user = await getUserById(req.params.id);
    res.send(user);
  } catch (error) {
    next(error);
  }
});

app.get("/promise_catch", (req, res, next) => {
  Promise.resolve()
    .then(function () {
      throw new Error("BROKEN");
    })
    .catch(next); // Errors will be passed to Express.
});

app.get("/custom_error_handler", (req, res, next) => {
  next("route");
});

function errorHandler(err, req, res, next) {
  console.log("h1");
  res.status(500);

  res.json("error", { error: err });
}

function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: "Something failed!" });
  } else {
    next(err);
  }
}

function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}

app.use(methodOverride());
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
