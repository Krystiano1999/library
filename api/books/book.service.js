const lib = require("../../config/database");

module.exports = {
    addBook:(data,callBack)=>{
        lib.query(
            `insert into book(title,isbn,author,user_id) 
            values(?,?,?,?)`,
            [
                data.title,
                data.isbn,
                data.author,
                1
            ],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deleteBook: (id, callBack)=>{
        `delete from book where id=?`,
        [id],
        (error,results,fields)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null,results[0]);
        }
    },
    updateBook: (data, callBack)=>{
        lib.query(
            `update book set title=?, isbn=?, author=? where id=?`,
            [
                data.title,
                data.isbn,
                data.author,
                data.id
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null,results[0]);
            }
        )
    },
    getBooks: callBack => {
        lib.query(
            `select id,title,isbn,author from book`,
            [],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getAvailableBooks: callBack => {
        lib.query(
            `select id,title,isbn,author from book where date_return<=NOW() AND date_return>'0000-00-00'`,
            [],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    rentBook: (data, callBack)=>{
        lib.query(
            `update book set date_loan=?, user_id=? where id=? AND title=?`,
            [
                data.date_loan,
                data.user_id,
                data.id,
                data.title
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null,results[0]);
            }
        )
    },
    returnBook: (data, callBack)=>{
        lib.query(
            `update book set date_return=? where id=? AND title=?`,
            [
                data.date_return,
                data.id,
                data.title
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null,results[0]);
            }
        )
    }
};