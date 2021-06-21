// const db = require("../models");

// const Student_data = db.students_data;

// const Op = db.Sequelize.Op;

// const paginator = (page, size) => {
//   const limit = size ? +size : 100;
//   const offset = page ? page * limit : 0;

//   return { limit, offset };
// };

// const paginator_data = (data, page, limit) => {
//   const { count: totalItems, rows: students_data } = data;
//   const currentPage = page ? +page : 0;
//   const totalPages = Math.ceil(totalItems / limit);

//   return { totalItems, students_data, totalPages, currentPage };
// };

// // exports.findStudentsInPage = (req, res) =>{
// //   const {page, size} = req.query;
// //   //console.log(req.query)
// //   const {limit, offset} = paginator(page, size);

// //   Student_data.findAndCountAll({
// //     where: '',
// //     limit,
// //     offset
// // }).then(data => {
// //   const resp = paginator_data(data, page, limit);

// //   res.send(resp);

// // }).catch(error=>{
// //   res.status(500).send({message: error.message || 'Error Occured while finding students'})
// // })
  
// // }

// exports.findAll = (req, res) => {
//   const { page, size, roll_number } = req.query;
//   var condition = roll_number ? { roll_number: { [Op.like]: `%${roll_number}%` } } : null;

//   const { limit, offset } = paginator(page, size);

//   Student_data.findAndCountAll({ where: condition, limit, offset })
//     .then(data => {
//       const response = paginator_data(data, page, limit);
//       res.send(response);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving Student Data."
//       });
//     });
// };

// exports.create = (req, res) => {
//   if (!req.body.roll_number) {
//     res.status(400).send({
//       message: "Nothing to create or Fill Data Properly",
//     });
//     return;
//   }

//   const student_data = {
//     // sno: req.body.sno,
//     roll_number: req.body.roll_number,
//     name: req.body.name,
//     father_name: req.body.father_name,
//     image: req.body.image,
//     finger_print: req.body.finger_print,
//     date_stamp: req.body.date_stamp,
//     saved: req.body.saved ? req.body.saved : false
//   };

//   Student_data.create(student_data)
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || "Error Occured while Creating Student Data.",
//       });
//     });
// };



// exports.findOne = (req, res) => {
//     const id = req.params.id;
//     Student_data.findByPk(id)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error in Searching Student Data with id=" + id
//       });
//     });
// };

// exports.update = (req, res) => {
//     const id = req.params.id;

//     Student_data.update(req.body, {
//       where: { id: id }
//     })
//       .then(num => {
//         if (num == 1) {
//           res.send({
//             message: "Student data was updated successfully."
//           });
//         } else {
//           res.send({
//             message: `Cannot update Student data with id=${id}. Maybe Student id was not found or req.body is empty!`
//           });
//         }
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Error updating Student data with id=" + id
//         });
//       });
// };

// exports.delete = (req, res) => {
//     const id = req.params.id;

//     Student_data.destroy({
//       where: { id: id }
//     })
//       .then(num => {
//         if (num == 1) {
//           res.send({
//             message: "Student data was deleted successfully!"
//           });
//         } else {
//           res.send({
//             message: `Cannot delete Student data with id=${id}. Maybe Student data was not found!`
//           });
//         }
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Could not delete Student data with id=" + id
//         });
//       });
// };

// exports.deleteAll = (req, res) => {
//     Student_data.destroy({
//         where: {},
//         truncate: false
//       })
//         .then(nums => {
//           res.send({ message: `${nums} Students data were deleted successfully!` });
//         })
//         .catch(err => {
//           res.status(500).send({
//             message:
//               err.message || "Some error occurred while deleting all Students record."
//           });
//         });
// };

// exports.findallSaved = (req, res) => {
//   const { page, size } = req.query;
//   const { limit, offset } = paginator(page, size);

//   Student_data.findAndCountAll({ where: { saved: true }, limit, offset })
//     .then(data => {
//       const response = paginator_data(data, page, limit);
//       res.send(response);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while Geting Students Data"
//       });
//     });
// };