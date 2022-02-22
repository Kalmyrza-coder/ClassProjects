import { useState } from 'react';
import './App.css';

function App() {
 const [stars, setStars] = useState([0,1,2,3,4]);
 const [rate, setRate] = useState(localStorage.getItem('rate'));

 const handlerClick = (index) => {
  setRate(index);
  localStorage.setItem('rate', index)
 }

 const removeFromLocalStorage = () => {
   localStorage.removeItem('rate')
   setRate(0)
 }
 let paragraph = <p>:D</p>
 return (
   <>
   <h1>Hello World</h1>
   {stars.map((star, index) => {
     return (
      <div 
      style={
        {
          display: 'inline-block',
          border: '1px solid black',
          padding: '10px'

        }
      }
      onMouseOver={() => handlerClick(index)}

      className={index <= rate ? 'fill' : ''}
      > 
      {star}
      </div>
     )
   })}
   <button onClick={() => removeFromLocalStorage()}
   style={
     {
       position: 'relative',
       bottom: '10px',
       width: '100px',
       height: '40px',
       margin: '10px'
     }
   }
   >Remove from local storage</button>
   <p>{parseInt(rate)+1}/5</p>
   {parseInt(rate) === 4 ? paragraph : null}
   </>
 )
}

export default App;
