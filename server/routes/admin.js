var express = require('express');
var router = express.Router();
const adminController=require("../controller/adminController");
const {ErrorModel,SuccessModel}=require("../model/resModel.js");

router.get('/', function (req, res) {
  adminController.getAdmin().then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//修改密码
router.post('/update_pwd', function (req, res) {
  let admin = req.body
  console.log(admin)
  adminController.updatePwd(admin).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

module.exports = router;