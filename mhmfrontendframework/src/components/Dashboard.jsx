import {useState, useEffect} from 'react';

const Dashboard = () => {
  const[generatedTexts, setGeneratedTexts]=useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/dashboard/get-generated-texts/');
        const data = await response.json();
        setGeneratedTexts(data.generated_texts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


  return (
    <main className=''>
    <div className='' style={{ maxHeight: '500px', overflowY: 'auto' }}>
      <h1 className='text-2xl font-bold font-spaceGrotesk'>History</h1>
      {generatedTexts.map((generatedText, index) => (
        <div key={index}>
          <strong>Query:</strong> {generatedText.input_text}<br />
          <strong>Answer:</strong> {generatedText.generated_text}<br />
          <strong>Created At:</strong> {generatedText.created_at}<br />
          <hr />
        </div>
      ))}
    </div>
    <div className=''>
      Hello
    </div>
    </main>
  )
}

export default Dashboard;