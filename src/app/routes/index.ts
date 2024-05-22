import * as express from "express";
import { Express } from "express";
import * as HomeRoutes from "./HomeRoutes";

function route(app: Express) {
  app.use("/", HomeRoutes);
}

module.exports = route;
