import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState({
    red: 0,
    green: 0,
    blue: 0,
  });

  const changeColor = () => {
    const newRed = Math.floor(Math.random() * 256);
    const newGreen = Math.floor(Math.random() * 256);
    const newBlue = Math.floor(Math.random() * 256);
    setColor({ red: newRed, green: newGreen, blue: newBlue });
  };

  const classname = {
    backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`,
  };

  return (
    <>
      <div style={classname} className="h-screen flex justify-center items-center">
        <div className="text-center p-5 rounded shadow-lg bg-white bg-opacity-80">
          <button 
            onClick={changeColor} 
            className="p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
            Change Color
          </button>
          <div className="mt-4 text-lg">
            RGB Value: <span className="font-bold">{color.red}, {color.green}, {color.blue}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
