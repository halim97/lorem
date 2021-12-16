import React ,{useState} from 'react';
import './App.css';
import text from './data';


function App() {
  const [newTxt,setNewTxt]=useState([]);
  const [index,setIndex]=useState(0);
  const txt=()=>{
    setNewTxt(text.slice(0,index+1))
  }
  return (
    <div className="App">
      <h1>TIRED OF BORING LOREM IPSUM?</h1>
      <div className='one'>
        <h4>Paragraphs:</h4>
        <input type='number' min='1' max='9' onChange={(event)=>{setIndex(event.target.value-1);console.log(index)}}></input>
        <button onClick={txt} >GENERATE</button>
      </div>
      <article className='lorem-text'>
        {newTxt.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>

    </div>
  );
}

export default App;
