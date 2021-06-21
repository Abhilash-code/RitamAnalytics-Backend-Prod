const multer = require("multer");
const moment = require("moment");

const csvFilter = (req, file, cb) => {
  if (file.mimetype.includes("csv") ||
  file.mimetype.includes("vnd.ms-excel") ||
  file.mimetype.includes("excel") ||
  file.mimetype.includes("spreadsheetml")
  ) {
    cb(null, true);
  } else {
    cb(`${file.mimetype}` , false);
  }
};

const timestamp = moment().format("DD-MM-YYYY-h-mm-ss-a");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/static/assets/uploads/");
  },
  filename: (req, file, cb) => {
    //console.log(file.originalname);
    cb(null, `${timestamp}-post-${file.originalname}`);
  },
});

var uploadFile = multer({ storage: storage, fileFilter: csvFilter });
module.exports = uploadFile;