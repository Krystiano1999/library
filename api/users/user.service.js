const lib = require("../../config/database");

module.exports = {
    create:(data,callBack)=>{
        lib.query(
            `insert into user(login,first_name,passwd,admin) 
            values(?,?,?,?)`,
            [
                data.login,
                data.first_name,
                data.passwd,
                data.admin
            ],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUserByUserLogin: (login, callBack)=>{
        lib.query(
            `select * from user where login = ?`,
            [login],
            (error,results,fields)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null,results[0]);
            }
        );
    }
};