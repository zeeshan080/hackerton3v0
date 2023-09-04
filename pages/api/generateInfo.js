/*
Create a controller with the following specifications:

1. import the Configuration class and the OpenAIApi class from the openai npm module
2. create a new configuration object that includes the api key and uses the Configuration class from the openai module
3. create a new instance of the OpenAIApi class and pass in the configuration object
4. create an async function called generateInfo that accepts a request and response object as parameters
5. use try to make a request to the OpenAI completetion api and return the response
6. use catch to catch any errors and return the error include a message to the user
7. export the generateInfo function as a module
*/

const { OpenAI } = require("openai");
const { recipePrompt } = require("../../data/recipe.json");

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: "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",
});

const generateInfo = async (req, res) => {
  const { recipe } = req.body;
  try {
    
   
    const completion = await openai.chat.completions.create({
        model:"gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `${recipePrompt}${recipe}` ,
          },
        ],
      });
    const response = completion.choices[0].message.content;
    return res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    console.log(error);
    if (error.response && error.response.status === 401) {
      return res.status(401).json({
        error: "Please provide a valid API key.",
      });
    }
    return res.status(500).json({
      error:
        "An error occurred while generating recipe information. Please try again later.",
    });
  }
};

module.exports = { generateInfo };
// Path: pages\api\server.js
