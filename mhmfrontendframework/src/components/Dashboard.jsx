import {useState, useEffect} from 'react';
import background from '../assets/background.png';
import {Link} from 'react-router-dom';
import "./Dashboard.css"



const Dashboard = () => {
  const[generatedTexts, setGeneratedTexts]=useState([]);
  const [userEmail, setUserEmail] = useState(null);


  useEffect(() => {
    let userDetails = localStorage.getItem("authSession");
    userDetails = JSON.parse(userDetails);

    const email = userDetails ? userDetails.email : null;
    setUserEmail(email);
    const fetchData = async () => {
      try {

        const response = await fetch(`http://localhost:8000/api/dashboard/get-generated-texts/?email=${email}`);
        const data = await response.json();
        setGeneratedTexts(data.generated_texts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const formatCreatedAt = (createdAt) => {
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      // timeZoneName: 'short',
    }).format(new Date(createdAt));
    return formattedDate;
  };


//   return (
//     <main className=' absolute top-0 left-0 h-full w-full font-spaceGrotesk space-x-4 bg-cover text-slate-300' style={{backgroundImage:`url(${background})`}}>
//     <div className='flex mt-20 space-x-4 mx-10'>
//     <div className='mt-5 w-[50%] h-[80vh] space border-slate-500 border-b-2 border-l-2 rounded-md flex-grow' style={{ maxHeight: '650px', overflowY: 'auto' }}>
//       <h1 className='text-3xl font-bold font-spaceGrotesk text-center'>History</h1>
//       {generatedTexts.length > 0 ? (
//        generatedTexts.map((generatedText, index) => (
//         // <div className='border-black border-b-2' key={index}>
//         <div key={index} className="border-slate-500 border-b-2 p-4 rounded-lg backdrop-blur-sm mb-2">
//           <strong>Query:</strong> {generatedText.input_text}<br />
//           <strong>Answer:</strong> {generatedText.generated_text}<br />
//           <span className='font-bold text-sm'> {formatCreatedAt(generatedText.created_at)}</span><br />
//           {/* <hr /> */}
//           </div>
//          ))
//         ) : (
//           <div className="flex items-center justify-center h-full">
//           <p className="text-3xl text-slate-500 font-bold">No chats to show</p>
//         </div>
//           // <p className="text-center text-3xl mt-20 justify-center text-slate-500 font-bold">No chats to show</p>
//         )}
//     </div>

//     <div className=' h-[80vh] w-[50vw] flex flex-col justify-center items-center text-2xl text-center'><span className='text-4xl animated-text gradient-text font-bold'>Click here to chat with chatHealth </span>
//       {/* Click here to chat with chatHealth   */}
//       <div className='flex flex-row space-x-5'>
//         <Link to="/user/view">
//           <button className=" bg-purple-600 hover:bg-purple-700 text-white font-bold font-spaceGrotesk py-2 px-4 rounded-full mt-5 justify-center">chatHealth</button>
//         </Link>
//         </div>
//     </div>
//     </div>
//     </main>

//   )
// }

// export default Dashboard;
return (
  <main
    className="absolute top-0 left-0 h-full w-full bg-cover text-slate-300 font-spaceGrotesk" // Removed redundant styles
    style={{ backgroundImage: `url(${background})` }}
  >
    <div className="flex mt-20 space-x-4 mx-10">
      <div className="w-[50%] h-[80vh] space border-slate-500 border-b-2 border-l-2 rounded-lg flex-grow overflow-y-auto" style={{ maxHeight: "650px" }}>
        <h1 className="text-3xl font-bold text-center mb-4">History</h1>
        {generatedTexts.length > 0 ? (
          generatedTexts.map((generatedText, index) => (
            <div key={index} className="chat-item p-4 text-slate-300 border-b-2 background-blur-sm hover:bg-slate-500 rounded-lg shadow-md mb-2">
              <div className="flex items-center space-x-2">
                <strong>Query:</strong> {generatedText.input_text}
              </div>
              <div className="mt-2">
                <strong>Answer:</strong> {generatedText.generated_text}
              </div>
              <span className="font-bold text-sm text-slate-300 mt-2">
                {formatCreatedAt(generatedText.created_at)}
              </span>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-3xl text-slate-500 font-bold">No chats to show</p>
          </div>
        )}
      </div>

      <div className="h-[80vh] w-[50vw] flex flex-col justify-center items-center">
        <span className="animated-text gradient-text font-bold text-4xl">Click here to chat with chatHealth</span>
        <div className="flex flex-row space-x-5 mt-5">
          <Link to="/user/view">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold font-spaceGrotesk py-2 px-4 rounded-full">
              chatHealth
            </button>
          </Link>
        </div>
      </div>
    </div>
  </main>
);
};

export default Dashboard;