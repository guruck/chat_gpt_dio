const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config()

module.exports = class openai{
  static configuration(){
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    return new OpenAIApi(configuration)
  }

  static textCompletion({prompt}){
    return {
        model: "text-davinci-003",
        prompt: `${prompt}`,
        temperature: 0,
        max_tokens: 3500,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      }
  }
}


// const response = await openai.createCompletion({
//   model: "text-davinci-003",
//   prompt: "qual melhor sorvete?\n\nNão existe uma resposta única para essa pergunta, pois a melhor escolha de sorvete depende dos gostos e preferências de cada pessoa.",
//   temperature: 0.7,
//   max_tokens: 256,
//   top_p: 1,
//   frequency_penalty: 0,
//   presence_penalty: 0,
// });