const dotenv = require('dotenv').config(); // Importar dotenv
const twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN); // Importar Twilio
const MessagingResponse = require('twilio').twiml.MessagingResponse; // Importar Twilio Messaging Response
const express = require('express'); // Importar Express
const bodyParser = require('body-parser'); // Importar Body Parser
const cors = require('cors'); // Importar CORS

// Exportar modulos
module.exports = {
    dotenv,
    twilio,
    express,
    bodyParser,
    cors,
    MessagingResponse
}

// Executar Servidor
const run = require('./messaging-webhook/webhook-api.js'); // Importar Função de Execução do Servidor
run(); // Executar Servidor