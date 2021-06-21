// const db = require("../models");
// const uploadFile = require("../middlewares/upload");
// const fs = require("fs");

// const Student_data = db.students_data;

// const baseUrl = 'http://localhost:8080/api/excel/getInfo/';

// const readXlsxFile = require('read-excel-file/node');

// const upload = async(req, res)=>{
//     try{

//         // await uploadFile(req, res);

//         if(req.file == undefined){
//             return res.status(400).send('Please upload excel');
//         }
    
//         let path = __basedir + '/resources/static/assets/uploads/'+req.file.filename;

//         const schema = {
//             'roll_number': {
//                 prop: 'roll_number',
//                 type: String
//               },
//               'name': {
//                 prop: 'name',
//                 type: String
//               },
//               'father_name': {
//                 prop: 'father_name',
//                 type: String
//               },
//               'image': {
//                 prop: 'image',
//                 type: String
//               },
//               'finger_print': {
//                 prop: 'finger_print',
//                 type: String
//               },
//             'date_stamp': {
//               prop: 'date_stamp',
//               type: Date
//             }
//         }
        
//         readXlsxFile(path, {schema}).then(({rows, errors})=>{
                
//             errors.length === 0;
//             // console.log(rows);
//             // rows.shift();
//             let StudentData = [];
//             rows.forEach((row) => {
//                 // console.log(row)
//                 let student = {
//                     // sno: row[0],
//                     roll_number: row.roll_number,
//                     name: row.name,
//                     father_name: row.father_name,
//                     image: row.image,
//                     finger_print: row.finger_print,
//                     date_stamp: row.date_stamp
//                     // ,
//                     // saved: row[6]
//                 };
//                 StudentData.push(student);
//                 console.log(StudentData);
//             });
            
//             Student_data.bulkCreate(StudentData).then(
//                 ()=>{
//                     res.status(200).send({
//                         message: 'Excel Uploaded Successfully!  '+ req.file.originalname
//                     });
//                 }
//             ).catch(
//                 (error)=>{
//                     res.status(500).send({
//                         message: 'Failed to upload excel!  ' + req.file.originalname,
//                         error: error.message
//                     });
//                 } 
//             );

//         })
   
//     }
    
//     catch(error){
        
//         res.status(500).send({
//         message: 'Failed to upload excel!' + req.file.originalname
//         });
//     }
// };

// const getStudentsData = (req, res)=>{
//     Student_data.findAll().then(
//         (data)=>{
//             res.send(data);
//         }
//     )
//     .catch(
//         (error)=>{
//             res.status(500).send({
//                 message: error.message || 'Some Occured while uploading StudentData[]'
//             })
//         }
//     )
// }

// const getUrl = (req,res) =>{
//     let path = __basedir + "/resources/static/assets/uploads/";

//     fs.readdir(path, function(error , excel){
//         if(error){
//             res.status(500).send({
//                 message: "Unable to get excel!",
//             });
//         }

//         let excelInfos = [];

//         if(excel)
//         {
//             excel.forEach((file) =>{
//               excelInfos.push({
//                 name: file,
//                 url: baseUrl + file
//              });
//             });
//             res.status(200).send(excelInfos);
//         }
//     });
// };

// const download = (req,res) =>{
//     const fileName = req.params.name;
//     const path = __basedir + "/resources/static/assets/uploads/";

//     res.download(path + fileName, fileName, (error)=>{
//         if(error){
//             res.status(500).send({
//                 message: "Unable to Download the Excel!" + error,
//             });
//         }
//     });
// };

// module.exports = {
//     upload, getStudentsData, getUrl, download
// };