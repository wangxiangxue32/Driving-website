const {exec,escape}=require("../db/mysql.js");

const getAdmin = () => {
  let sql = `select * from admin`
  console.log(sql)
  return exec(sql)
}

module.exports={
  getAdmin
};