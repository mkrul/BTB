import express, { Request, Response } from "express";
const router = express.Router();

const testController = require("../controllers/test");

router.get("/test/alignment", testController.startTest);
router.get("/test/breeds", testController.showBreedsPage);
router.get("/test/dna", testController.showDnaPage);

export { router };
