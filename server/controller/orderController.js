const {exec,escape}=require("../db/mysql.js");

//获取所有订单
const getOrder = () => {
  let sql = `select * from orders o,driving d,coach c,license l,student s where o.did=d.did and o.cid=c.cid and o.lid=l.lid and o.sid=s.sid`
  console.log(sql)
  return exec(sql)
}

//添加数据
const addOrder = (order) => {
  let sql=`insert into orders(sid,did,cid,lid,otime,lprice) values(${order.sid},${order.did},${order.cid},${order.lid},'${order.otime}','${order.lprice}')`
  console.log(sql)
  return exec(sql)
}

//根据sid查询订单信息
const getOrderBySid = (sid) => {
  let sql = `select * from orders o,driving d,coach c,license l where o.sid=${sid} and o.did=d.did and o.cid=c.cid and o.lid=l.lid`
  console.log(sid)
  return exec(sql)
}

//根据cid查询订单信息
const getOrderByDid = (did) => {
  let sql = `select * from orders o,coach c,student s,license l where o.did=${did} and o.cid=c.cid and o.sid=s.sid and o.lid=l.lid`
  console.log(did)
  return exec(sql)
}

//删除订单
const deleteOrder = (oid) => {
  let sql = `delete from orders where oid=${oid}`
  console.log(sql)
  return exec(sql)
}

module.exports={
  addOrder,

  getOrder,
  getOrderBySid,
  getOrderByDid,

  deleteOrder,
};

