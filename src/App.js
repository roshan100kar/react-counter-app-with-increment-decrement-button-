import React, {useState} from 'react';
function App() {

  const [count, setCount] = useState(0);
  return (
    <div className='container my-5'>
      <div className='card text-center my-5'>
        <div className='card-body'>
          <h1>Counter Appâ°</h1>
          <div className='my-5'>
            <h1 className='my-5'>{count}</h1>
            <button className='btn btn-success mx-3 ' onClick={()=> setCount(count + 1)}  > â </button>
            <button className='btn btn-danger mx-3 '  onClick={()=> setCount(count - 1)} disabled = {count === 0}> â </button>
            <button className='btn btn-primary mx-3 ' onClick={()=> setCount(0)} disabled = {count === 0}> ð </button>
          </div>

        </div>
      </div>

    </div>
   
  );
}

export default App;
