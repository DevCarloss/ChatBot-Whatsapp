const { dotenv } = require('../bot.js') // Importar OpenAI
const { Configuration , OpenAIApi } = require('openai') // Importar Configuração da OpenAI

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY, // Definir API Key da OpenAI
    basePath: process.env.OPENAI_API_BASE // Definir API Base da OpenAI
})

const openai = new OpenAIApi(configuration) // Definir OpenAI

async function create_Completion(message){
    const result = await openai.createCompletion({
        model: 'gpt-3.5-turbo',
        prompt: message,
        max_tokens: 2048,
        temperature: 0.7
    })
    return result.data.choices[0].text
}

module.exports = create_Completion // Exportar Modulo






