

import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./dalle.css";
import PageSection from "./PageSection";

function Dalle() { 
    console.log(process.env, 'hello')
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState(
    " Starry Night, with led zeppelin, and a cat"
  );
  const configuration = new Configuration({
    
    apiKey: process.env.REACT_APP_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    setPlaceholder(`Search ${prompt}..`);
    setLoading(true);
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "512x512",
    });
    console.log(res)
    setLoading(false);
    setResult(res.data.data[0].url);
  };
  return (
    <PageSection className='mt-5'
    name="openai"
     
 
  >
    <div className="app-main h-screen mb-5 bg-stone-200 p-2 ">
      {loading ? (
        <>
          <h2>Generating..Please Wait..</h2>
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-black">Use key phrases to create an AI image!</h2>

          <textarea
            className="app-input rounded-full  text-black"
            placeholder={placeholder}
            onChange={(e) => setPrompt(e.target.value)}
            rows="10"
            cols="40"
          />
          <button className="p-2 bg-blue-400" onClick={generateImage}>Generate an Image</button>
          {result.length > 0 ? ( 
            <div classname='border-2 border-blue w-5 border-solid p-4  '>
            <img className="result-image" src={result} alt="result" />
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </div> 
    </PageSection>
  );
}

export default Dalle;