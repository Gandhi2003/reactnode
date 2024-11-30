import express from 'express';
import { Router } from 'express';
// const express = require('express');
const router = express.Router();
router.get("/", (req, res) => {
    res.send("Hello World raja!");
})
module.exports = router;