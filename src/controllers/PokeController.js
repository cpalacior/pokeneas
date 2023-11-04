const { pokeneas } = require('../models/Pokeneas');
const os = require("os");

const showInformation = async(req, res) => {
    try{
        const number = Math.floor(Math.random() * 7);
        const pokenea = pokeneas[number];
        const DATA = {'id': pokenea.id, 'nombre': pokenea.nombre, 'altura': pokenea.altura, 'habilidad': pokenea.habilidad};
        return res.json({'pokenea': DATA, 'contenedor': os.hostname()});
    }
    catch(err){
        return json(err);
    }
}

const showFrase = async(req, res) => {
    try{
        const number = Math.floor(Math.random() * 7);
        const pokenea = pokeneas[number];
        const DATA = {'id': pokenea.id, 'nombre': pokenea.nombre, 'altura': pokenea.altura, 'habilidad': pokenea.habilidad};
        return res.json({'pokenea': DATA, 'contenedor': os.hostname()});
    }
    catch(err){
        return json(err);
    }
} 

module.exports = {showInformation, showFrase};