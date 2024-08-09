import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [visits, setVisits] = useState()
  useEffect(() => {
    (async () => {
      try {

        const { data } = await axios.get('http://localhost:8000')
        setVisits(data)

      }
      catch (e) {
        console.log(e);

      }
    })()
  }, [])
  return (
    <>
      <div className="main">
        HELLO EVERYONE! {visits} times!
      </div>
    </>
  )
}

export default App;
