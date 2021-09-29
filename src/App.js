//import logo from './logo.svg';
import './App.css'
import {useState} from 'react'

function App() {
  const [age, setAge] = useState(0);
  const [low, setLow] = useState(0);
  const [up, setUp] = useState(0);
  const [hr, setHr] = useState(0);

function countHr(a) {

  a.preventDefault();
  const upper = Math.round((220 - age) * 0.85);
  const lower = Math.round((220- age) * 0.65);
  setLow(lower);
  setUp(upper);
  setHr(lower + "-" + upper);
} 

return (
<div id="container">
  <h3>Heart rate limits calculator</h3>
   <form onSubmit={countHr}>
     <div>
       <label>Age</label>
       <input type="number" onChange={a => setAge(a.target.value)} value={age}/>
     </div>
     <div>
      <label>Heart rate limits: </label>
      <input value= {hr}  readonly/>
      </div>
      <button>Calculate</button>
   </form>
   </div>
  );
}

export default App;





