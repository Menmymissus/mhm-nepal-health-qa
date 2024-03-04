// import React from 'react'

// const View = () => {
//   return (
//     <main className="absolute top-0 left-0 h-full w-full bg-orange-100 flex items-center justify-center">
      
//     </main>
//   )
// }

// export default View


import React, { useState, useEffect, useRef } from 'react';
import background from '../assets/background.png';
import Spinner from './Spinner'
import Typewriter from 'typewriter-effect';

import NepaliType from './nepaliType/nepalitype.js'
import { transliterateToNepali } from './nepaliType/nepalitype'

const View = () => {
    const [inputText, setInputText] = useState('');
    const [generatedText, setGeneratedText] = useState('');
    const [loading, setLoading] = useState(false);


    const [userEmail, setUserEmail] = useState(null);

    const inputRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === ' ') {
      const inputField = inputRef.current;
      if (inputField) {
        const currentWord = inputField.value.trim().split(' ').pop();
        const transliteratedWord = transliterateToNepali(currentWord);
        inputField.value = inputField.value.replace(currentWord, transliteratedWord);
        inputField.setSelectionRange(inputField.value.length, inputField.value.length);
      }
    }
  };

  useEffect(() => {
    let userDetails = localStorage.getItem("authSession");
    userDetails = JSON.parse(userDetails);

    const email = userDetails ? userDetails.email : null;
    setUserEmail(email);

    console.log("email =", email);
  }, []); 
    const generateText = async () => {
        try {
            setLoading(true);
            const response = await fetch(`http://localhost:8000/api/inference/generate-text?input_text=${encodeURIComponent(inputText)}&email=${userEmail}`);
            const data = await response.json();
            setGeneratedText(data.generated_text);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
    };

    return (
      <>
        <div className="absolute top-0 left-0 h-full w-full bg-orange-100 flex flex-col items-center justify-center bg-cover text-slate-300" style={{backgroundImage:`url(${background})`}}>
        
            <textarea id="input" className="peer h-[200] min-h-[100px] w-[50%] resize-none rounded-[7px] border bg-transparent px-3 py-2.5 font-sans text-md font-normal text-blue-gray-700 outline transition-all focus:border-2 focus:border-white-900  focus:outline-0 disabled:resize-none"
      placeholder=" " ref={inputRef} onKeyDown={handleKeyDown} onChange={(e) => setInputText(e.target.value)}/>
            <button className='mt-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' onClick={generateText}>Ask Question</button>
            {loading && <Spinner />}
            <div className='mt-5' style={{"width":"50%"}}>
                <strong>Answer:</strong>

                {console.log(generatedText)}
                {generatedText && <Typewriter
                  key={generatedText}
                    options={{
                      delay: 70,
                    }}
                    onInit={(typewriter) => {
                    typewriter.typeString(generatedText)
                        .callFunction(() => {
                          console.log('String typed out!');
                        })
                        .pauseFor(1500)
                        
                        .start();
                        }} />}

                    {/* <Typewriter options={{
                      delay: 80,
                    }}
                    onInit={(typewriter) => {
                    typewriter.typeString("मेरो नाम भरत थापा हो।")
                        .callFunction(() => {
                          console.log('String typed out!');
                        })
                        .pauseFor(100)
                        
                        .start();
                        }} /> */}
                 
            </div>
        
        </div>
      </>
    );
};

export default View;
