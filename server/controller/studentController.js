const {exec,escape}=require("../db/mysql.js");

//获取用户信息
const getStudents = () => {
  let sql = `select * from student`
  console.log(sql)
  return exec(sql)
}

//根据sid获取用户信息
const getStudentBySid = (sid) => {
  let sql = `select * from student where sid=${sid}`
  console.log(sql)
  return exec(sql)
}

//添加/注册用户
const addStudent = (student) => {
  let sql = `insert into student(saccount,spassword,sname,sidentity,sphone,splace) values('${student.saccount}','${student.spassword}','${student.sname}','${student.sidentity}','${student.sphone}','${student.splace}')`
  console.log(sql)
  return exec(sql)
}

//更新用户信息
const updateStudent = (student) => {
  let sql = `update student set sname='${student.sname}',sidentity='${student.sidentity}',sphone='${student.sphone}',splace='${student.splace}' where sid=${student.sid}`
  console.log(sql)
  return exec(sql)
}

//移除用户信息
const deleteStudent = (sid) => {
  let sql = `delete from student where sid=${sid}`
  console.log(sql)
  return exec(sql)
}
const deleteStudentOrder = (sid) => {
  let sql = `delete from order where sid=${sid}`
  console.log(sql)
  return exec(sql)
}


//修改密码
const updatePwd = (student) => {
  let sql = `update student set spassword='${student.n_spassword}' where saccount='${student.saccount}'`
  console.log(sql)
  return exec(sql)
}

module.exports={
  getStudents,
  getStudentBySid,

  addStudent,

  updateStudent,

  deleteStudent,
  deleteStudentOrder,

  updatePwd
};