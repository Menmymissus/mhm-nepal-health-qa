import {useState, useEffect} from 'react';

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
    <main className=' absolute top-0 left-0 h-full w-full font-spaceGrotesk space-x-4 bg-orange-100 '>
    <div className='flex mt-20 space-x-4 mx-4'>
    <div className='w-[50%] space border-black border-2 rounded-md' style={{ maxHeight: '650px', overflowY: 'auto' }}>
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
    <div className='flex flex-col space-y-4'>
    <div className='h-[40vh] w-[50vw] bg-red-100  border-black border-2 rounded-md flex justify-center items-center'>
      Placeholder
    </div>
    <div className=' h-[40vh] w-[50vw] bg-slate-100 border-black border-2 rounded-md flex justify-center items-center'>
      Placeholder
    </div></div>
    </div>
    </main>
  )
}

export default Dashboard;