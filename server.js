const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const db = require("./app/models");
// const Routes = require("./app/routes/studentexcel.routes");
const initRoutes = require("./app/routes/post.routes");
global.__basedir = __dirname + "/";


var corsOptions = {
   origin: "http://localhost:8081"
   //origin: "http://fileuploader.ritamdigital.org" 
}; 
 
app.use(cors(corsOptions));

// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({extended: true}));
 
app.use(express.urlencoded({extended: true}));
initRoutes(app);

// require("./app/routes/student_data.routes")(app);


db.sequelize.sync();
// db.sequelize.sync({force: true}).then(()=>{
//     console.log("Dropping and Resynching Database")
// });

app.get("/", (req, res)=>{
    res.json({
        message: "Welcome to our application"
    });
});



const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

 