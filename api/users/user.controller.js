const {create,getUserByUserLogin} = require("./user.service");

const {genSaltSync, hashSync, compareSync} = require("bcrypt");
const {sign} = require("jsonwebtoken");

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.passwd = hashSync(body.passwd, salt);
        create(body,(err,result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message: "Error Database Connection"
                });
            }
            return res.status(200).json({
                success:1,
                data:result
            });
        });
    },
    login: (req, res) => {
        const body = req.body;
        getUserByUserLogin(body.login, (err, results) => {
          if (err) {
            console.log(err);
          }
          if (!results) {
            return res.json({
              success: 0,
              data: "Invalid login or password"
            });
          }
          const result = compareSync(body.passwd, results.passwd);
          if (result) {
            results.passwd = undefined;
            const jsontoken = sign({ result: results }, process.env.JWT_KEY, {
              expiresIn: "1h"
            });
            return res.json({
              success: 1,
              message: "login successfully",
              token: jsontoken
            });
          } else {
            return res.json({
              success: 0,
              data: "Invalid login or password"
            });
          }
        });
    }
};