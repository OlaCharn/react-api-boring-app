import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [advice, setAdvice] = useState("")


  useEffect(()=>{
    getAdvice()
  },[])

    const getAdvice = async()=>{
      const responce = await fetch(`http://www.boredapi.com/api/activity/`);
      const data = await responce.json();
      setAdvice(data.activity)
    }
    
  return (
    <div className="App">
      <div> <h1> {advice} </h1> </div>
      <div> 
        <button onClick={getAdvice} > Click Me </button>
      </div>
    </div>
  );
}

export default App;
