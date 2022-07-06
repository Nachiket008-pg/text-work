import React, { useState } from 'react'

function HeadSection() {



  const toUpper = () => {
    let newText = upper.toUpperCase()
    setUpper(newText);

  };

  const toLower = () => {
    let newText = upper.toLowerCase()
    setUpper(newText);

  };

  const toClear = () => {
    let newText = ""
    setUpper(newText);

  };

  const handleOnChange = (event) => {
    setUpper(event.target.value)
  };


  const [upper, setUpper] = useState();


  return (
    <div className="bg-slate-800 h-auto">




      <textarea name="" id="" value={upper} onChange={handleOnChange} cols="120" rows="10" placeholder="Enter your text here..." className="my-3 border-none p-3 bg-slate-600 text-yellow-200 focus:border-none "></textarea>

      <div className="">
        <button className="text-white bg-slate-800 hover:cursor-pointer mb-5 hover:bg-slate-900 p-2 font-medium mx-3 border-2 border-solid rounded-xl my-4" onClick={toUpper}>Convert to uppercase</button>

        <button className="text-white bg-slate-800 hover:cursor-pointer mb-5 hover:bg-slate-900 p-2 font-medium mx-3 border-2 border-solid rounded-xl my-4" onClick={toLower}>Convert to lowercase</button>

        <button className="text-white bg-slate-800 hover:cursor-pointer mb-5 hover:bg-slate-900 p-2 font-medium mx-3 border-2 border-solid rounded-xl my-4" onClick={toClear}>Clear textground</button>
      </div>


    </div>
  )
}

export default HeadSection