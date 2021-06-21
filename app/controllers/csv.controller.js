const db = require("../models");
const Post_data = db.students_data;

const fs = require("fs");
const csv = require("fast-csv");

const readXlsxFile = require('read-excel-file/node');
const { debug } = require("console");
var moment = require('moment'); // require

baseUrl = 'http://localhost:8080/api/csv/getInfo/';
//baseUrl: "http://fileuploader.ritamdigital.org/api/csv/getInfo/";

const upload = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload a CSV file!");
    }

    let post_data = [];
    let path = __basedir + "/resources/static/assets/uploads/" + req.file.filename;

    if (req.file.mimetype.includes('csv') ||
    req.file.mimetype.includes("vnd.ms-excel")
    ) {

      fs.createReadStream(path)
        .pipe(csv.parse({ headers: true }))
        .on("error", (error) => {
          throw error.message;
        })
        .on("data", (row) => {
          post_data.push(row);
        })
        .on("end", () => {
          Post_data.bulkCreate(post_data)
            .then(() => {
              res.status(200).send({
                message:
                  "Uploaded the file successfully: " + req.file.originalname,
              });
            })
            .catch((error) => {
              fs.unlinkSync(path)
              res.status(500).send({
                message: "Failed to import data into database!",
                error: error.message,
              });
            });
        });
    }
    else if (req.file.mimetype.includes("excel") ||
    req.file.mimetype.includes("spreadsheetml")
    ) {

      readXlsxFile(path).then((rows)=>{
                
        rows.shift();
        let post_data = [];
        rows.forEach((row) => {
          
          let datetime = moment(row[3], "MMMM Do YYYY, HH:mm:ss.SSS").format('YYYY-MM-DD HH:mm:ss.SSS');
          datetime = moment(datetime).add('5','hours');
          datetime = moment(datetime).add('30','minutes');

            let posts = {
              //moment(row[0], 'YYYY-MM-DD hh:mm:ss')
              Date_Text: datetime,
              Language: row[4],
              Post_Type: row[5],
              Publisher: row[6],
              Title: row[7],
              Category: row[8],
              //Description: row[6],
              //Description: '',
              mediaType: row[10],
              Viewes: row[11],
              Reads: row[12],
              Likes: row[13],
              Comments: row[14],
              Shares: row[15],

            };
            
            post_data.push(posts);
        });
        console.log(post_data)
        //console.log(post_data[0])
        Post_data.bulkCreate(post_data).then(
            ()=>{
                res.status(200).send({
                    message: 'Excel Uploaded Successfully!  '+ req.file.originalname
                });
            }
        ).catch(
            (error)=>{
              fs.unlinkSync(path)
                res.status(500).send({
                    message: 'Failed to upload excel!  ' + req.file.originalname,
                    error: error.message
                });
            } 
        );

    })
    }
  } catch (error) {
    //console.log(error);
    fs.unlinkSync(path);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};

const getPost = (req, res) => {
  Post_data.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving posts.",
      });
    });
};

const getUrl = (req,res) =>{
  let path = __basedir + "/resources/static/assets/uploads/";

  fs.readdir(path, function(error , excel){
      if(error){
          res.status(500).send({
              message: "Unable to get excel!",
          });
      }

      let excelInfos = [];

      if(excel)
      {
          excel.forEach((file) =>{
            excelInfos.push({
              name: file,
              url: baseUrl + file
           });
          });
          res.status(200).send(excelInfos);
      }
  });
};

const download = (req,res) =>{
  const fileName = req.params.name;
  const path = __basedir + "/resources/static/assets/uploads/";

  res.download(path + fileName, fileName, (error)=>{
      if(error){
          res.status(500).send({
              message: "Unable to Download the Excel!" + error,
          });
      }
  });
};

module.exports = {
  upload,
  getPost,
  getUrl,
  download
};