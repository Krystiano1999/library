const router = require("express").Router();
const {addBook,deleteBook,updateBook,getBooks,getAvailableBooks,rentBook,returnBook} = require("./book.controller");

router.post("/",addBook);
router.delete("/",deleteBook);
router.patch("/",updateBook);
router.get("/",getBooks); 
router.get("/available",getAvailableBooks);
router.patch("/rent",rentBook); 
router.patch("/return",returnBook); 
 
module.exports = router;