import { GET_RESPONSE, GET_RESPONSE_FAIL } from "./types";
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
})

const openai = new OpenAIApi(configuration)

export const getResponse = ( name ) => async (dispatch) => {

    console.log(name)
    try {
        const response = await openai.createCompletion("text-davinci-002", {
            prompt: `Write a detailed, smart, informative definition for ${name}`,
            temperature: 0.8,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
        
        dispatch({
            type: GET_RESPONSE,
            payload: response.data,
        });
    } catch (err) {
        const errors = err.response.data.errors;
        console.log(errors);

        dispatch({
            type: GET_RESPONSE_FAIL,
        });
    }
}