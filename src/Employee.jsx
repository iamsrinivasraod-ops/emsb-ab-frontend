import {useState} from 'react';
function Employee(){
  const [count,setCount] = useState(0);
  return(
    <div>
      <h1>Counting Application</h1>
      <button onClick={()=>{setCount(count+1)}}>Inc</button>
      <button onClick={()=>{setCount(count-1)}}>Dec</button>
      <button onClick={()=>{setCount(0)}}>Reset</button>
      <p>Count:{count}</p>
    </div>
  );
}
export default Employee;