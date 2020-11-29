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

module.exports={
  getDriving,
  getDrivingLicense,
  getDrivingInfoByDid,
  getDrivingCoachByDid,

  addDriving,

  updateDriving,
};