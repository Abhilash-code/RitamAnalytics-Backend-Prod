
const express = require("express");
const router = express.Router();
const excelConroller = require("../controllers/excel.controller");
const upload = require("../middlewares/upload");

let routes = (app) => {
    // router.post("/upload", upload.single('file'), excelConroller.upload);

    // router.get("/getlastupload", excelConroller.getStudentsData);

    // router.get("/getInfo", excelConroller.getUrl);
    // router.get("/getInfo/:name", excelConroller.download);

    app.use("/api/excel", router);
 
};

module.exports = routes;