// import React from 'react'

// const View = () => {
//   return (
//     <main className="absolute top-0 left-0 h-full w-full bg-orange-100 flex items-center justify-center">
      
//     </main>
//   )
// }

// export default View


import React, { useState, useEffect } from 'react';
import background from '../assets/background.png';



const View = () => {
    const [inputText, setInputText] = useState('');
    const [generatedText, setGeneratedText] = useState('');


    const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    let userDetails = localStorage.getItem("authSession");
    userDetails = JSON.parse(userDetails);

    const email = userDetails ? userDetails.email : null;
    setUserEmail(email);

    console.log("email =", email);
  }, []); 
    const generateText = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/inference/generate-text?input_text=${encodeURIComponent(inputText)}&email=${userEmail}`);
            const data = await response.json();
            setGeneratedText(data.generated_text);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
      <>
        <div className="absolute top-0 left-0 h-full w-full bg-orange-100 flex flex-col items-center justify-center bg-cover text-slate-300" style={{backgroundImage:`url(${background})`}}>
        
            <textarea className="peer h-[200] min-h-[100px] w-[50%] resize-none rounded-[7px] border bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline transition-all focus:border-2 focus:border-gray-900  focus:outline-0 disabled:resize-none"
      placeholder=" " value={inputText} onChange={(e) => setInputText(e.target.value)} />
            <button className='mt-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' onClick={generateText}>Ask Question</button>
            <div className='mt-5'>
                <strong>Answer:</strong> {generatedText}
            </div>
        
        </div>
      </>
    );
};

export default View;
