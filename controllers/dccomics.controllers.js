const { request, response}= require ("express");


const { dccomics } = require("../dccomics");

const getDccomics = (req,res)=>{


    return res.json({
        ok:true,
        statusCode:200,
        dccomics
    });
}

const getDccomicId = (req = request ,res = response)=>{
    
    let id = parseInt(req.params.id);
    let comicABuscar ="";
    comicABuscar = dccomics.find((comic)=>{
        return comic.id==id;
    });

    if (comicABuscar){
        return res.json({
            ok:true,
            statusCode:200,
            comicABuscar
        });
    }else{

        return res.json({
            ok:true,
            statusCode:404,
            msg: "no hay equipos con ese id"
        });


    }

    
}

    module.exports = {
        getDccomics,
        getDccomicId
    }