// import express from 'express';
const express=require('express');
const app = express();
const cors=require('cors');
const CookieParser=require('cookie-parser');
// const cookieParser = require('cookie-parser');
app.use(cors());
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static("public"));
app.use(CookieParser())
module.exports={
    app
}