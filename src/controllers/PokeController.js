const { render } = require('ejs');
const { pokeneas } = require('../models/Pokeneas');
const os = require("os");

const inicio = async(req, res) => {
    try{
        res.render('index')
    }
    catch(err){
        return json(err);
    }
} 

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
        const DATA = {'imagen': pokenea.imagen, 'frase': pokenea.frase};
        res.render('carta', {'pokenea': DATA, 'contenedor': os.hostname()})
        //return res.json({'pokenea': DATA, 'contenedor': os.hostname()});
    }
    catch(err){
        return json(err);
    }
} 

module.exports = {showInformation, showFrase, inicio};