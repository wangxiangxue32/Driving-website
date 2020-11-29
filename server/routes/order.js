var express = require('express');
var router = express.Router();
const orderController=require("../controller/orderController");
const {ErrorModel,SuccessModel}=require("../model/resModel.js");

//获取所有订单
router.get('/', function (req, res) {
  orderController.getOrder().then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//添加数据
router.post('/add_order', function (req, res) {
  let order = req.body
  console.log(order)
  orderController.addOrder(order).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//根据sid查询订单信息
router.get('/get_order_by_sid', function (req, res) {
  let sid = req.query.sid
  console.log(sid)
  orderController.getOrderBySid(sid).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//根据cid查询订单信息
router.get('/get_order_by_did', function (req, res) {
  let did = req.query.did
  console.log(did)
  orderController.getOrderByDid(did).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

//删除订单
router.get('/delete_order', function (req, res) {
  let oid = req.query.oid
  console.log(oid)
  orderController.deleteOrder(oid).then(data => {
    if (data.length!==0) {
      return res.json(new SuccessModel(data,"ok"));
    }
    res.json(new ErrorModel("err"));
  })
})

module.exports = router;