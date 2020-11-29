var express = require('express');
var router = express.Router();
const studentController=require("../controller/studentController");
const {ErrorModel,SuccessModel}=require("../model/resModel.js");

//获取用户信息
router.get('/', function (req, res) {
  studentController.getStudents().then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//根据sid获取用户信息
router.get('/get_student_by_sid', function (req, res) {
  let sid = req.query.sid
  console.log(sid)
  studentController.getStudentBySid(sid).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//添加/注册用户
router.post('/add_student', function (req, res) {
  let student = req.body
  console.log(student)
  studentController.addStudent(student).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//更新用户信息
router.post('/update_student', function (req, res) {
  let student = req.body
  console.log(student)
  studentController.updateStudent(student).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

module.exports = router;
