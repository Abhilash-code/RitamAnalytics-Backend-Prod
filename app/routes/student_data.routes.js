module.exports = app => {
    const students_data = require("../controllers/student_data.controller");
    const excelConroller = require('../controllers/excel.controller');
    const upload = require('../middlewares/upload');



    // var router = require("express").Router();
  
   
    // router.post("/", students_data.create);

    // router.post("/upload", upload.single('file'), excelConroller.upload);

    // router.get("/getlastupload", excelConroller.getStudentsData);
 
    // router.get("/", students_data.findAll);
  
    
    // router.get("/:id", students_data.findOne);
  

    // router.put("/:id", students_data.update);

    // router.delete("/:id", students_data.delete);
  
    // router.delete("/", students_data.deleteAll);

    // router.get("/allStudents", students_data.findallSaved);
  
    // app.use('/api/students_data', router);
  }; 