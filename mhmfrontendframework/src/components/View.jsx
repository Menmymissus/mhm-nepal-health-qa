// import React from 'react'

// const View = () => {
//   return (
//     <main className="absolute top-0 left-0 h-full w-full bg-orange-100 flex items-center justify-center">
      
//     </main>
//   )
// }

// export default View


import React, { useState } from 'react';

    const View = () => {
    const [inputText, setInputText] = useState('');
    const [generatedText, setGeneratedText] = useState('');

    // const handleInputChange = (e) => {
    //     setGeneratedText(e.target.value);
    //   };
    
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (generatedText.trim() === '') return;

    const generateText = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/inference/generate-text?input_text=${encodeURIComponent(inputText)}`);
            const data = await response.json();
            setGeneratedText(data.generated_text);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

};

    return (
      <>
   {/* <div className="flex justify-center items-center h-screen">  
   <div className="container mx-auto max-w-lg ">
       <div className="flex flex-col border border-gray-300 rounded-lg p-4 mb-4"> */}
         {/* <div className="mb-4"> */}
        <div className="absolute top-0 left-0 h-full w-full  flex flex-col items-center justify-center">
        
            <textarea className="peer h-[200] min-h-[100px] w-[50%] resize-none rounded-[7px] border bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline transition-all focus:border-2 focus:border-gray-900  focus:outline-0 disabled:resize-none"
      placeholder=" " value={inputText} onChange={(e) => setInputText(e.target.value)} />
            <button className='mt-5 bg-custom-green hover:bg-custom-hover text-white font-bold py-2 px-4 border-b-4 border-bg-custom-green rounded' onClick={generateText}>Ask Question</button>
            <div className='mt-5'>
                <strong>Answer:</strong> {generatedText}
            </div>
        </div>
      </>
    );
};

export default View;
// import React, { useState } from 'react';

// const ChatBot = () => {
//   const [messages, setMessages] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (inputValue.trim() === '') return;

//     // Add user's question to messages
//     setMessages([...messages, { type: 'user', text: inputValue.trim() }]);
//     // Simulate chatbot response (replace this with actual chatbot logic)
//     setMessages([
//       ...messages,
//       { type: 'bot', text: `I'm a simple chatbot. You asked: ${inputValue.trim()}` },
//     ]);
//     setInputValue('');
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//     <div className="container mx-auto max-w-lg ">
//       <div className="flex flex-col border border-gray-300 rounded-lg p-4 mb-4">
//         <div className="mb-4">
//         <textarea className="peer h-[200] min-h-[100px] w-[50%] resize-none rounded-[7px] border bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline transition-all focus:border-2 focus:border-gray-900  focus:outline-0 disabled:resize-none"
//       placeholder=" " value={inputText} onChange={(e) => setInputText(e.target.value)} />
//             <button className='mt-5 bg-custom-green hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-bg-custom-green hover:bg-custom-hover rounded' onClick={generatedText}>Ask Question</button>
//             <div className='mt-5'>
//                 <strong>Answer:</strong> {generatedText}
//             </div>
          /* {inputText.map((inputText, index) => (
            <div key={index} className={inputText.type === 'user' ? 'text-left mb-2' : 'mb-2'}>
              <span
                className={
                    inputText.type === 'user'
                    ? 'bg-blue-500 text-white rounded-lg p-2'
                    : 'bg-gray-200 text-gray-700 rounded-lg p-2'
                }
              >
                {inputText.text}
              </span>
            </div>
          ))} */
//         </div>

//       </div>
//     </div>
//     </div>
    
//   );
// };

// export default View;
