import {useState, useEffect} from 'react';
import background from '../assets/background.png';
import {Link} from 'react-router-dom';


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


  return (
    <main className=' absolute top-0 left-0 h-full w-full font-spaceGrotesk space-x-4 bg-cover text-slate-300' style={{backgroundImage:`url(${background})`}}>
    <div className='flex mt-20 space-x-4 mx-4'>
    <div className='w-[50%] space border-slate-300 border-2 rounded-md' style={{ maxHeight: '650px', overflowY: 'auto' }}>
      <h1 className='text-2xl font-bold font-spaceGrotesk text-center'>History</h1>
      {generatedTexts.map((generatedText, index) => (
        <div className='border-black border-b-2' key={index}>
          <strong>Query:</strong> {generatedText.input_text}<br />
          <strong>Answer:</strong> {generatedText.generated_text}<br />
          <span className='font-bold text-sm'> {formatCreatedAt(generatedText.created_at)}</span><br />
          <hr />
        </div>
      ))}
    </div>
    <div className='flex flex-col space-y-4 '>
    <div className='h-[40vh] w-[50vw] border-slate-300 border-2 rounded-md flex justify-center items-center'style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
      Graph or some shit goes here.
    </div>
    <div className=' h-[40vh] w-[50vw]   border-slate-300 flex flex-col justify-center items-center'>
      Click here to check your stresslevel
      <div className='flex flex-row space-x-5'>
    <Link to="/stressometer">
          <button className="bg-blue-300 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full mt-5 justify-center">Stressometer</button>
        </Link>
        <Link to="/user/view">
          <button className="bg-blue-300 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full mt-5 justify-center">QAbot</button>
        </Link>
        </div>
    </div>
    </div>
    </div>
    </main>
  )
}

export default Dashboard;