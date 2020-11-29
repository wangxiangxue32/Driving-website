var express = require('express');
var router = express.Router();
const drivingController=require("../controller/drivingController");
const {ErrorModel,SuccessModel}=require("../model/resModel.js");

//获取驾校信息
router.get('/', function (req, res) {
  drivingController.getDriving().then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//获取驾校和驾照信息(在主页用)
router.get('/get_driving_license', function (req, res) {
  drivingController.getDrivingLicense().then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//根据did获取驾校信息
router.get('/get_driving_info_by_did', function (req, res) {
  let did = req.query.did
  console.log(did)
  drivingController.getDrivingInfoByDid(did).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//根据did获取驾校的教练信息和驾照类型信息
router.get('/get_driving_coach_by_did', function (req, res) {
  let did = req.query.did
  console.log(did)
  drivingController.getDrivingCoachByDid(did).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//添加/注册驾校
router.post('/add_driving', function (req, res) {
  let driving = req.body
  console.log(driving)
  drivingController.addDriving(driving).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//更新驾校信息
router.post('/update_driving_info', function (req, res) {
  let driving = req.body
  console.log(driving)
  drivingController.updateDriving(driving).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

module.exports = router;