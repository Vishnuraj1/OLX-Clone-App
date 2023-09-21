import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OpenAIComponent = () => {
  const [generatedText, setGeneratedText] = useState('');
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const API_KEY = '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';

  // console.log(generatedText);
  
  const fetchData = async () => {
    setIsLoading(true); // Set loading to true while fetching data
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/text-davinci-002/completions',
        {
          prompt: "what are the features of"+ prompt,
          max_tokens: 50,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`, // Use the API_KEY variable
          },
        }
      );

      setGeneratedText(response.data.choices[0].text);
    } catch (error) {
      console.error('Error fetching data from OpenAI:', error);
    } finally {
      setIsLoading(false); // Set loading back to false when done
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(); // Call fetchData when the submit button is clicked
  };

  const handleInputChange = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div>
      <h1>OpenAI Text Generation</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your prompt"
          value={prompt}
          onChange={handleInputChange}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Generating...' : 'Generate Text'}
        </button>
      </form>
      <div>
        <h2>Generated Text:</h2>
        <p>{generatedText}</p>
      </div>
    </div>
  );
};

export default OpenAIComponent;