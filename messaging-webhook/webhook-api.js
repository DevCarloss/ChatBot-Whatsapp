const { express , bodyParser , cors , MessagingResponse } = require('../bot.js'); // Importar Modulos
const app = express(); // Inicializar Express
const create_completion = require('../openai/openai.js'); // Importar Função de Completar Texto da OpenAI

// Configurar Body Parser
app.use(bodyParser.urlencoded({ extended: false })); // Configurar Body Parser
app.use(bodyParser.json()); // Configurar Body Parser

// Configurar CORS
app.use(cors()); // Configurar CORS

// Configurar Rota de Webhook
app.post('/webhooks/twilio/messaging', async (req, res) => {
    const twiml = new MessagingResponse(); // Inicializar Twilio Messaging Response
    const message = req.body.Body.toLowerCase(); // Pegar mensagem do corpo da requisição
    await create_completion(message)
    .then(async (result) => {
        await twiml.message(result)
        res.writeHead(200, {'Content-Type': 'text/xml'});
        res.end(twiml.toString());
    })
    .catch((error) => {console.log(error)})
});

// Executar Servidor
async function run(){
    await app.listen(3000, () => console.log('Webhook Rodando')); // Executar Servidor
}

// Exportar Função de Execução do Servidor
module.exports = run;