import * as express from "express";
const router = express.Router();
import { HomeController } from "../controller/HomeController";

router.get("/", HomeController.home);

module.exports = router;
