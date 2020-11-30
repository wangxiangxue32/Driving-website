const {exec,escape}=require("../db/mysql.js");

const getAdmin = () => {
  let sql = `select * from admin`
  console.log(sql)
  return exec(sql)
}

//修改密码
const updatePwd = (admin) => {
  let sql = `update admin set apassword='${admin.n_apassword}' where aaccount='${admin.aaccount}'`
  console.log(sql)
  return exec(sql)
}

module.exports={
  getAdmin,
  updatePwd
};