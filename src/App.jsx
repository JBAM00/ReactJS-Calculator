import { useState } from 'react'
import './index.css'

function App() {
  const [display, setDisplay] = useState("");

  const handleDisplay = (input) => {
    setDisplay((prev) => prev + input);
  };

  const handleDelete = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  const handleClear = () => {
    setDisplay("");
  };

  const handleAnswer = () => {
    try {
      const ans = display
        .replace(/÷/g, '/')
        .replace(/×/g, '*')
        .replace(/%/g, '/100');
      setDisplay(eval(ans).toString()); 
    } catch (error) {
      setDisplay("Error");
    }
  };

  return (
    <div className="bg-zinc-500 h-screen w-screen flex justify-center items-center">
      <div className="bg-neutral-950 h-auto w-64 px-3 py-4 rounded-xl shadow-black shadow-md">
        <input
          className="bg-neutral-950 w-full h-24 mb-2 focus:outline-none overflow-hidden text-white text-3xl text-right"
          type="text"
          value={display}
          readOnly
        />
        <div className="grid grid-cols-4 gap-2 text-lg justify-items-center items-center">
          <button
            onClick={handleClear}
            className="text-white bg-neutral-800 h-12 w-12 rounded-full hover:bg-neutral-700 hover:h-11 hover:w-11 hover:text-base hover:ease-out duration-300"
          >
            AC
          </button>
          <button
            onClick={() => handleDisplay('%')}
            className="text-white bg-neutral-800 h-12 w-12 rounded-full hover:bg-neutral-700 hover:h-11 hover:w-11 hover:text-base hover:ease-out duration-300"
          >
            %
          </button>
          <button
            onClick={handleDelete}
            className="text-white bg-neutral-800 h-12 w-12 rounded-full hover:bg-neutral-700 hover:h-11 hover:w-11 hover:text-base hover:ease-out duration-300"
          >
            DEL
          </button>
          <button
            onClick={() => handleDisplay('÷')}
            className="text-white bg-neutral-800 h-12 w-12 pb-2 rounded-full text-3xl hover:bg-neutral-700 hover:h-11 hover:w-11 hover:text-2xl hover:ease-out duration-300"
          >
            ÷
          </button>
          {['7', '8', '9'].map((num) => (
            <button
              key={num}
              onClick={() => handleDisplay(num)}
              className="text-white bg-neutral-700 h-12 w-12 rounded-full hover:bg-neutral-600 hover:h-11 hover:w-11 hover:text-base hover:ease-out duration-300"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleDisplay('×')}
            className="text-white bg-neutral-800 h-12 w-12 pb-2 rounded-full text-3xl hover:bg-neutral-700 hover:h-11 hover:w-11 hover:text-2xl hover:ease-out duration-300"
          >
            ×
          </button>
          {['4', '5', '6'].map((num) => (
            <button
              key={num}
              onClick={() => handleDisplay(num)}
              className="text-white bg-neutral-700 h-12 w-12 rounded-full hover:bg-neutral-600 hover:h-11 hover:w-11 hover:text-base hover:ease-out duration-300"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleDisplay('-')}
            className="text-white bg-neutral-800 h-12 w-12 pb-2 rounded-full text-3xl hover:bg-neutral-700 hover:h-11 hover:w-11 hover:text-2xl hover:ease-out duration-300"
          >
            −
          </button>
          {['1', '2', '3'].map((num) => (
            <button
              key={num}
              onClick={() => handleDisplay(num)}
              className="text-white bg-neutral-700 h-12 w-12 rounded-full hover:bg-neutral-600 hover:h-11 hover:w-11 hover:text-base hover:ease-out duration-300"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleDisplay('+')}
            className="text-white bg-neutral-800 h-12 w-12 pb-2 rounded-full text-3xl hover:bg-neutral-700 hover:h-11 hover:w-11 hover:text-2xl hover:ease-out duration-300"
          >
            +
          </button>
          <button
            onClick={() => handleDisplay('00')}
            className="text-white bg-neutral-700 h-12 w-12 rounded-full hover:bg-neutral-600 hover:h-11 hover:w-11 hover:text-base hover:ease-out duration-300"
          >
            00
          </button>
          <button
            onClick={() => handleDisplay('0')}
            className="text-white bg-neutral-700 h-12 w-12 rounded-full hover:bg-neutral-600 hover:h-11 hover:w-11 hover:text-base hover:ease-out duration-300"
          >
            0
          </button>
          <button
            onClick={() => handleDisplay('.')}
            className="text-white bg-neutral-700 h-12 w-12 pb-2 rounded-full text-3xl hover:bg-neutral-700 hover:h-11 hover:w-11 hover:text-2xl hover:ease-out duration-150"
          >
            .
          </button>
          <button
            onClick={handleAnswer}
            className="text-white bg-orange-500 h-12 w-12 pb-2 rounded-full text-3xl hover:h-11 hover:w-11 hover:text-2xl hover:ease-out duration-300"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default App
