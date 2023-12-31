import "reflect-metadata";
import {classToPlain, plainToClass} from "class-transformer";
import {Router} from "express";
import {estructuraDto} from "../controller/jwt.js";

const appMiddlewareAlquilerVerify = Router();

appMiddlewareAlquilerVerify.use((req,res,next)=>{
    if(req.rateLimits) return;
    let {payload} = req.data;
    let {iat, exp, ...newPayload} = payload;
    payload = newPayload;
    let clone = JSON.stringify(classToPlain(plainToClass(estructuraDto("Alquiler").class, {}, {ignoreDecorators:true})));
    let verify = clone === JSON.stringify(payload);
    (!verify) ?res.status(406).send({status:406, message:"Token no valido para (Alquiler)"}) :next();
})

export{
    appMiddlewareAlquilerVerify
}