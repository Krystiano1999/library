require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");
const bookRouter = require("./api/books/book.router");

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/books", bookRouter);
app.listen(process.env.APP_PORT, ()=>{
    console.log("Serwer działa na porcie: ",process.env.APP_PORT);
})