const express = require("express");
const router = express.Router();
const csvController = require("../controllers/csv.controller");
const upload = require("../middlewares/upload");

let routes = (app) => {
  router.post("/upload", upload.single("file"), csvController.upload);
  router.get("/posts", csvController.getPost);
  router.get("/getInfo", csvController.getUrl);
  router.get("/getInfo/:name", csvController.download);

  app.use("/api/csv", router);
};

module.exports = routes;