import React,{useState, useEffect} from 'react';
import './App.css';






const App = () => {
  const [quotes,setQuotes] = useState('');

  const getQuote = () => {
    fetch(' https://type.fit/api/quotes')
    .then(res => res.json())
    .then(data => {
      let randomNumber = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNumber]);
    })
    
  }
  useEffect(() => {
    getQuote();
  },[])
  
  return (
    <div className="App">
      <div className="quote">
        <p>{quotes.text}</p>
        <p>{quotes.author}</p>
          <div className="btnContainer">
          <button className='btn' onClick={getQuote}>Get quote</button>
          </div>

      </div>

    </div>
  );

  }
export default App;
