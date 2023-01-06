import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "OPEN_AI_API_KEY",
});
const openai = new OpenAIApi(configuration);

export const generateContent = async (prompt, maxTokens) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${prompt}, you must write this in ${maxTokens} words please`,
    max_tokens: maxTokens,
    temperature: 0.98,
    top_p: 1,
  });
  return response.data;
};
