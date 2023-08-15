import express from "express";
import {conx} from '../db/atlas.js';
import {limitApi} from '../limit/limit.js';


const appRerserva = express();
appRerserva.use(express.json())

appRerserva.get("/pendiente",limitApi(), async (req,res)=>{
    let db = await conx();
    let reserva = db.collection("reserva");

    let query = [
        {
            $lookup: {
              from: "automovil",
              localField: "ID_Automovil",
              foreignField: "ID_Automovil",
              as: "dataAutomovil"
            }
        },
        {
            $lookup:{
                from: "cliente",
                localField:"ID_Cliente",
                foreignField:"ID_Cliente",
                as:"dataCliente"
            }
        },
        {
            $project: {
                "_id":0,
                "dataAutomovil._id":0,
                "dataCliente._id":0,
            }
        },
        {
            $match: {
                "Estado":{$eq: "Pendientes"}
            }
        }
    ];
    
    let result = await reserva.aggregate(query).toArray();
    res.send(result);
})



export default appRerserva;