import express from "express";
import router from "./livrosRouters.js"


function routes(app){
  app.use(
    express.json(),
    router
  )
}

export default routes
