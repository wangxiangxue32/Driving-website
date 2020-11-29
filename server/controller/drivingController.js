const {exec,escape}=require("../db/mysql.js");

//获取驾校信息
const getDriving = () => {
  let sql = `select * from driving`
  console.log(sql)
  return exec(sql)
}

//获取驾校驾照类型信息(在主页用)
const getDrivingLicense = () => {
  let sql = `select * from driving d,license l where d.did=l.did`
  console.log(sql)
  return exec(sql)
}

//根据did获取驾校信息
const getDrivingInfoByDid = (did) => {
  let sql = `select * from driving where did=${did}`
  console.log(sql)
  return exec(sql)
}

//根据did获取驾校的教练信息和驾照类型信息
const getDrivingCoachByDid = (did) => {
  let sql = `select * from license l,coach c where l.did=${did} and c.did=${did} and l.cid=c.cid`
  console.log(sql)
  return exec(sql)
}

//根据did、cid和lid获取驾校的教练信息和驾照类型信息
const getDrivingCoachByDCL = (did,cid,lid) => {
  let sql = `select * from license l,coach c where l.did=${did} and c.did=${did} and l.cid=c.cid and c.cid=${cid}`
  console.log(sql)
  return exec(sql)
}

//添加/注册驾校
const addDriving = (driving) => {
  let sql = `insert into driving(daccount,dpassword,dname,dphone,dplace,dintroduce) values('${driving.daccount}','${driving.dpassword}','${driving.dname}','${driving.dphone}','${driving.dplace}','${driving.dintroduce}')`
  console.log(sql)
  return exec(sql)
}

//更新驾校信息
const updateDriving = (driving) => {
  let sql = `update driving set dname='${driving.dname}',dphone='${driving.dphone}',dplace='${driving.dplace}',dintroduce='${driving.dintroduce}' where did=${driving.did}`
  console.log(sql)
  return exec(sql)
}

//根据关键词搜索驾校
const selectDriving = (keyword) => {
  let sql = `select * from driving d,license l where d.dname like '%${keyword}%' and d.did=l.did`
  console.log(sql)
  return exec(sql)
}

//移除教练信息
const deleteCoach = (cid) => {
  let sql = `delete from coach where cid=${cid}`
  console.log(sql)
  return exec(sql)
}
const deleteCoachLicense = (cid) => {
  let sql = `delete from license where cid=${cid}`
  console.log(sql)
  return exec(sql)
}
const deleteCoachOrder = (cid) => {
  let sql = `delete from orders where cid=${cid}`
  console.log(sql)
  return exec(sql)
}

//移除驾校信息
const deleteDriving = (did) => {
  let sql = `delete from driving where did=${did}`
  console.log(sql)
  return exec(sql)
}
const deleteDrivingLicense = (did) => {
  let sql = `delete from license where did=${did}`
  console.log(sql)
  return exec(sql)
}
const deleteDrivingOrder = (did) => {
  let sql = `delete from orders where did=${did}`
  console.log(sql)
  return exec(sql)
}
const deleteDrivingCoach = (did) => {
  let sql = `delete from coach where did=${did}`
  console.log(sql)
  return exec(sql)
}

module.exports={
  getDriving,
  getDrivingLicense,
  getDrivingInfoByDid,
  getDrivingCoachByDid,
  getDrivingCoachByDCL,

  addDriving,

  updateDriving,

  selectDriving,

  deleteCoach,
  deleteCoachLicense,
  deleteCoachOrder,

  deleteDriving,
  deleteDrivingLicense,
  deleteDrivingOrder,
  deleteDrivingCoach
};