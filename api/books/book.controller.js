const {addBook,deleteBook,updateBook,getBooks,getAvailableBooks,rentBook,returnBook} = require("./book.service");

module.exports = {
    addBook: (req, res) => {
        const body = req.body;
        addBook(body,(err,result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message: "Error Database Connection"
                });
            }
            return res.status(200).json({
                success:1,
                message: "Book added",
                data:result
            });
        });
    },
    deleteBook: (req,res)=>{
        const data = req.body;
        deleteBook(data, (err, results)=>{
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success: 0,
                    message: "Not found record"
                });
            }
            return res.json({
                success:1,
                message:"Book deleted successfully"
            });
        });
    },
    updateBook: (req,res)=>{
        const body = req.body;
        updateBook(body, (err, results)=>{
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success: 0,
                    message: "updated failed"
                });
            }
            return res.json({
                success:1,
                message:"updated successfully"
            });
        });
    },
    getBooks: (req,res)=>{
        getBooks((err, results)=>{
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getAvailableBooks: (req, res)=>{
        getAvailableBooks((err,results)=>{
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    rentBook: (req,res)=>{
        const body = req.body;
        rentBook(body, (err, results)=>{
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success:1,
                message:"Rented successfully"
            });
        });
    },
    returnBook: (req,res)=>{
        const body = req.body;
        returnBook(body, (err, results)=>{
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success:1,
                message:"Return successfully"
            });
        });
    }
};